import { readJson, rateLimit, requestFailure } from "@/lib/request-security";
import { getCountry, recordAnalytics } from "@/lib/admin-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await readJson(request, 8192);
    rateLimit(request, "analytics", 240, 60000);
    const clean = (value: unknown, maximum: number) => typeof value === "string" ? value.trim().slice(0, maximum) : "";
    const visitorId = clean(body.visitorId, 80);
    const sessionId = clean(body.sessionId, 80);
    const pagePath = clean(body.path, 500);
    const type = body.type === "heartbeat" ? "heartbeat" : "pageview";
    const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
    if (!uuid.test(visitorId) || !uuid.test(sessionId) || !pagePath || !pagePath.startsWith("/") || pagePath.startsWith("/adminarea")) return Response.json({ ok: false }, { status: 400 });
    const location = getCountry(request);
    await recordAnalytics({ visitorId, sessionId, path: pagePath, title: clean(body.title, 200), referrer: clean(body.referrer, 500), type, userAgent: clean(request.headers.get("user-agent"), 500), ...location });
    return Response.json({ ok: true });
  } catch (error) { return requestFailure(error); }
}
