import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "storybound_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function sessionSecret() {
  const value = process.env.ADMIN_SESSION_SECRET;
  if (!value) throw new Error("ADMIN_SESSION_SECRET must be configured.");
  return value;
}

function sign(value: string) {
  return createHmac("sha256", sessionSecret()).update(`${value}:${process.env.ADMIN_USERNAME}:${process.env.ADMIN_PASSWORD}`).digest("base64url");
}

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = `${expires}.${randomBytes(16).toString("hex")}`;
  return { value: `${payload}.${sign(payload)}`, maxAge: SESSION_TTL_SECONDS };
}

export function verifyAdminSession(value?: string) {
  if (!value || !process.env.ADMIN_SESSION_SECRET || !/^\d{10}\.[a-f0-9]{32}\.[A-Za-z0-9_-]{43}$/.test(value)) return false;
  const [expires, nonce, signature] = value.split(".");
  const now = Math.floor(Date.now() / 1000);
  if (Number(expires) <= now || Number(expires) > now + SESSION_TTL_SECONDS) return false;
  const expected = Buffer.from(sign(`${expires}.${nonce}`));
  const received = Buffer.from(signature);
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export async function isAdminAuthenticated() {
  return verifyAdminSession((await cookies()).get(ADMIN_COOKIE)?.value);
}

export function verifyCredentials(username: string, password: string) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword || !process.env.ADMIN_SESSION_SECRET || typeof username !== "string" || typeof password !== "string") return false;
  const hash = (value: string) => createHash("sha256").update(value).digest();
  const userMatches = timingSafeEqual(hash(username), hash(expectedUser));
  const passwordMatches = timingSafeEqual(hash(password), hash(expectedPassword));
  return userMatches && passwordMatches;
}
