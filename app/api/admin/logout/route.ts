import { requireSameOrigin, requestFailure } from "@/lib/request-security";
import { ADMIN_COOKIE } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try { requireSameOrigin(request); } catch (error) { return requestFailure(error); }
  return Response.json({ ok: true }, { headers: { "Set-Cookie": `${ADMIN_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Strict${process.env.NODE_ENV === "production" ? "; Secure" : ""}` } });
}
