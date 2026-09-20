import { readJson, rateLimit, requestFailure } from "@/lib/request-security";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { notifyEnquiry } from "@/lib/enquiry-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!await isAdminAuthenticated()) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await readJson(request, 1024);
    rateLimit(request, "email-retry", 20, 60000);
    if (typeof body.id !== "string" || !/^[a-f0-9-]{36}$/i.test(body.id)) return Response.json({ error: "Invalid enquiry" }, { status: 400 });
    await notifyEnquiry(body.id);
    return Response.json({ ok: true });
  } catch (error) { return requestFailure(error); }
}
