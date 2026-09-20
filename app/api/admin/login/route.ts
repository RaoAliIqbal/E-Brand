import { verifyFormProtection } from "@/lib/form-protection";
import { readJson, rateLimit, requestFailure } from "@/lib/request-security";
import { ADMIN_COOKIE, createAdminSession, verifyCredentials } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await readJson(request, 12288);
    rateLimit(request, "admin-login", 3, 10 * 60 * 1000);
    await verifyFormProtection(body, "admin_login");
    if (typeof body.username !== "string" || typeof body.password !== "string" || !verifyCredentials(body.username, body.password)) {
      return Response.json({ error: "Invalid username or password." }, { status: 401 });
    }
    const session = createAdminSession();
    return Response.json({ ok: true }, { headers: { "Set-Cookie": `${ADMIN_COOKIE}=${session.value}; Path=/; Max-Age=${session.maxAge}; HttpOnly; SameSite=Strict${process.env.NODE_ENV === "production" ? "; Secure" : ""}` } });
  } catch (error) { return requestFailure(error); }
}
