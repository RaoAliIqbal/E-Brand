import { RequestError } from "@/lib/request-security";

export async function verifyFormProtection(body: Record<string, unknown>, action: "enquiry" | "admin_login") {
  if (body.website_hp !== undefined && body.website_hp !== "") throw new RequestError("Unable to accept this submission.", 400);
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!secret || !siteKey) {
    if (process.env.NODE_ENV !== "production" && !secret && !siteKey) return;
    throw new RequestError("Form verification is not configured. Please contact us by email.", 503);
  }
  const token = body.recaptchaToken;
  if (typeof token !== "string" || !token || token.length > 8192) throw new RequestError("Please retry the verification.", 400);
  const hostname = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname : "localhost";
  let result;
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }), signal: AbortSignal.timeout(8000), cache: "no-store",
    });
    if (!response.ok) throw new Error("Verification unavailable");
    result = await response.json();
  } catch { throw new RequestError("Verification is temporarily unavailable. Please try again.", 503); }
  const age = Date.now() - Date.parse(result.challenge_ts);
  if (result.success !== true || typeof result.score !== "number" || !Number.isFinite(result.score) || result.score < 0.5 || result.action !== action || result.hostname !== hostname || !Number.isFinite(age) || age < -10000 || age > 120000) {
    throw new RequestError("Verification did not pass. Please try again or contact us by email.", 403);
  }
}
