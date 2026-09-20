import { readJson, requestFailure } from "@/lib/request-security";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getDashboardData, updateContactStatus, type ContactStatus } from "@/lib/admin-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!await isAdminAuthenticated()) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const page = Number(new URL(request.url).searchParams.get("activityPage") || 1);
  return Response.json(await getDashboardData(page), { headers: { "Cache-Control": "no-store" } });
}

export async function PATCH(request: Request) {
  if (!await isAdminAuthenticated()) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
  const body = await readJson(request, 1024) as { id?: string; status?: ContactStatus };
  const allowed: ContactStatus[] = ["new", "in-progress", "resolved", "archived"];
  if (typeof body.id !== "string" || !/^[a-f0-9-]{36}$/i.test(body.id) || !body.status || !allowed.includes(body.status)) return Response.json({ error: "Invalid update" }, { status: 400 });
  return await updateContactStatus(body.id, body.status) ? Response.json({ ok: true }) : Response.json({ error: "Message not found" }, { status: 404 });
  } catch (error) { return requestFailure(error); }
}
