import { isIP } from "node:net";

export class RequestError extends Error {
  constructor(message: string, public status = 400, public retryAfter = 900) { super(message); }
}

// Only configure a header that the hosting proxy overwrites, never one it passes through.
export function clientAddress(request: Request) {
  const header = process.env.TRUSTED_PROXY_IP_HEADER || (process.env.VERCEL ? "x-vercel-forwarded-for" : "");
  const value = header ? request.headers.get(header)?.split(",")[0].trim() || "" : "";
  return isIP(value) ? value : "shared";
}

export function requireSameOrigin(request: Request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") throw new RequestError("Cross-site request denied.", 403);
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  // next dev can receive the request on 0.0.0.0 or a LAN address while the
  // browser's Origin remains localhost. These are all one local development
  // environment, so permit them only outside production.
  if (process.env.NODE_ENV !== "production") {
    const isLocal = (hostname: string) => hostname === "localhost" || hostname === "0.0.0.0" || hostname === "::1" || isIP(hostname);
    try {
      if (origin && isLocal(new URL(origin).hostname) && isLocal(requestUrl.hostname)) return;
    } catch { /* Invalid Origin is rejected below. */ }
  }
  const expected = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin : requestUrl.origin;
  if (origin !== expected) throw new RequestError("Request origin denied.", 403);
}

const buckets = new Map<string, { count: number; expires: number }>();
export function rateLimit(request: Request, scope: string, maximum: number, windowMs: number) {
  const now = Date.now();
  for (const [key, bucket] of buckets) if (bucket.expires <= now) buckets.delete(key);
  const address = clientAddress(request);
  // Global ceiling also prevents rotating/spoofed identities from bypassing all limits.
  for (const [key, limit] of [[`${scope}:global`, maximum * 20], [`${scope}:${address}`, maximum]] as const) {
    const bucket = buckets.get(key);
    if (bucket && bucket.count >= limit) throw new RequestError("Too many requests. Please try again later.", 429, Math.ceil((bucket.expires - now) / 1000));
    if (!bucket && buckets.size >= 10000) throw new RequestError("Please try again later.", 429);
  }
  for (const key of [`${scope}:global`, `${scope}:${address}`]) {
    const bucket = buckets.get(key) || { count: 0, expires: now + windowMs };
    bucket.count++; buckets.set(key, bucket);
  }
}

export async function readJson(request: Request, maximum = 16384): Promise<Record<string, unknown>> {
  requireSameOrigin(request);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") throw new RequestError("JSON is required.", 415);
  if (Number(request.headers.get("content-length")) > maximum) throw new RequestError("Request is too large.", 413);
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError("Missing request body.");
  const chunks: Uint8Array[] = []; let size = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maximum) { await reader.cancel(); throw new RequestError("Request is too large.", 413); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new RequestError("Invalid JSON."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new RequestError("Invalid request body.");
  return body as Record<string, unknown>;
}

export function requestFailure(error: unknown) {
  return Response.json({ error: error instanceof RequestError ? error.message : "Unable to process this request." }, {
    status: error instanceof RequestError ? error.status : 500,
    headers: { "Cache-Control": "no-store", ...(error instanceof RequestError && error.status === 429 ? { "Retry-After": String(error.retryAfter) } : {}) },
  });
}
