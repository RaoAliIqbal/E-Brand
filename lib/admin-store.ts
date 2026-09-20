import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { isIP } from "node:net";
import { isEnquiryEmailConfigured } from "@/lib/enquiry-email-config";

export type ContactStatus = "new" | "in-progress" | "resolved" | "archived";
export type EnquiryEmailStatus = "pending" | "sending" | "sent" | "partial" | "failed" | "not-configured";
export type EnquiryEmailNotification = {
  status: EnquiryEmailStatus;
  attempts: number;
  acceptedRecipients: string[];
  lastAttemptAt?: string;
  sentAt?: string;
  error?: string;
};
export type ContactSubmission = {
  id: string; name: string; email: string; phone: string; service: string; message: string;
  sourcePage: string; country: string; status: ContactStatus; submittedAt: string; campaign?: string;
  formSource?: "contact-page" | "footer" | "popup-70" | "popup-85" | "quote-popup";
  emailNotification?: EnquiryEmailNotification;
};
export type VisitorRecord = {
  id: string; sessionId: string; firstSeen: string; lastSeen: string; currentPath: string;
  country: string; region: string; city: string; referrer: string; userAgent: string; pageViews: number; lastIp?: string;
};
export type PageView = {
  id: string; visitorId: string; sessionId: string; path: string; title: string; referrer: string;
  country: string; occurredAt: string; ip?: string;
};
type AdminData = { contacts: ContactSubmission[]; visitors: Record<string, VisitorRecord>; pageViews: PageView[] };

const emptyData = (): AdminData => ({ contacts: [], visitors: {}, pageViews: [] });
const dataFile = process.env.ADMIN_DATA_FILE || path.join(process.cwd(), "data", "admin-data.json");
let writeQueue: Promise<unknown> = Promise.resolve();

async function readData(): Promise<AdminData> {
  try { return JSON.parse(await readFile(/* turbopackIgnore: true */ dataFile, "utf8")) as AdminData; }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return emptyData();
    throw error;
  }
}

async function mutate<T>(callback: (data: AdminData) => T | Promise<T>) {
  const task = writeQueue.then(async () => {
    const data = await readData();
    const result = await callback(data);
    await mkdir(path.dirname(dataFile), { recursive: true });
    const temporary = `${dataFile}.${process.pid}.tmp`;
    await writeFile(temporary, JSON.stringify(data, null, 2), { encoding: "utf8", mode: 0o600 });
    await rename(temporary, dataFile);
    return result;
  });
  writeQueue = task.catch(() => undefined);
  return task;
}

export function getCountry(request: Request) {
  const candidates = [request.headers.get("x-vercel-forwarded-for"), request.headers.get("cf-connecting-ip"), request.headers.get("x-real-ip"), request.headers.get("x-forwarded-for")];
  const ip = candidates.map(value => value?.split(",")[0].trim().replace(/^::ffff:/, "") || "").find(value => isIP(value)) || "";
  const local = /^(127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) || ip === "::1" || /^(fc|fd|fe80:)/i.test(ip);
  const code = (request.headers.get("x-vercel-ip-country") || request.headers.get("cf-ipcountry") || request.headers.get("cloudfront-viewer-country") || request.headers.get("x-country-code") || "").toUpperCase();
  let country = local ? "Local network" : "Unavailable";
  if (/^[A-Z]{2}$/.test(code) && !["XX", "ZZ"].includes(code)) {
    country = new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
  }
  const region = request.headers.get("x-vercel-ip-country-region") || "";
  const city = request.headers.get("x-vercel-ip-city") || "";
  let decodedCity = city;
  try { decodedCity = decodeURIComponent(city); } catch { /* Keep malformed provider values readable. */ }
  return { country, region, city: decodedCity, ip };
}

export async function recordAnalytics(input: { visitorId: string; sessionId: string; path: string; title: string; referrer: string; type: "pageview" | "heartbeat"; userAgent: string; country: string; region: string; city: string; ip?: string }) {
  await mutate(data => {
    const now = new Date().toISOString();
    if (!/^[a-f0-9-]{36}$/i.test(input.visitorId)) throw new Error("Invalid visitor ID");
    const existing = Object.hasOwn(data.visitors, input.visitorId) ? data.visitors[input.visitorId] : undefined;
    data.visitors[input.visitorId] = {
      id: input.visitorId, sessionId: input.sessionId, firstSeen: existing?.firstSeen || now, lastSeen: now,
      currentPath: input.path, country: input.country && !["Unknown", "Unavailable"].includes(input.country) ? input.country : existing?.country || input.country || "Unavailable", region: input.region || existing?.region || "",
      city: input.city || existing?.city || "", referrer: input.referrer || existing?.referrer || "Direct",
      userAgent: input.userAgent || existing?.userAgent || "", pageViews: (existing?.pageViews || 0) + (input.type === "pageview" ? 1 : 0), lastIp: input.ip || existing?.lastIp || "",
    };
    const visitorIds = Object.keys(data.visitors);
    if (visitorIds.length > 10000) {
      const oldest = visitorIds.sort((a, b) => data.visitors[a].lastSeen.localeCompare(data.visitors[b].lastSeen))[0];
      delete data.visitors[oldest];
    }
    if (input.type === "pageview") {
      data.pageViews.unshift({ id: randomUUID(), visitorId: input.visitorId, sessionId: input.sessionId, path: input.path, title: input.title, referrer: input.referrer, country: data.visitors[input.visitorId].country, ip: input.ip, occurredAt: now });
      data.pageViews = data.pageViews.slice(0, 10000);
    }
  });
}

export async function addContact(input: Omit<ContactSubmission, "id" | "status" | "submittedAt">) {
  return mutate(data => {
    const contact: ContactSubmission = { ...input, id: randomUUID(), status: "new", submittedAt: new Date().toISOString() };
    data.contacts.unshift(contact);
    return contact;
  });
}

export async function updateContactStatus(id: string, status: ContactStatus) {
  return mutate(data => {
    const contact = data.contacts.find(item => item.id === id);
    if (!contact) return false;
    contact.status = status;
    return true;
  });
}

export async function claimEnquiryEmail(id: string) {
  return mutate(data => {
    const contact = data.contacts.find(item => item.id === id);
    if (!contact || contact.emailNotification?.status === "sent") return null;
    const notification = contact.emailNotification;
    if (notification?.status === "sending" && notification.lastAttemptAt && Date.now() - new Date(notification.lastAttemptAt).getTime() < 300000) return null;
    contact.emailNotification = {
      status: "sending", attempts: (notification?.attempts || 0) + 1,
      acceptedRecipients: notification?.acceptedRecipients || [], lastAttemptAt: new Date().toISOString(),
    };
    return structuredClone(contact);
  });
}

export async function updateEnquiryEmail(id: string, notification: EnquiryEmailNotification) {
  return mutate(data => {
    const contact = data.contacts.find(item => item.id === id);
    if (contact) contact.emailNotification = notification;
  });
}

export async function getDashboardData(requestedPage = 1) {
  const data = await readData();
  const pageSize = 25;
  const totalPages = Math.max(1, Math.ceil(data.pageViews.length / pageSize));
  const page = Math.min(totalPages, Math.max(1, Number.isSafeInteger(requestedPage) ? requestedPage : 1));
  const now = Date.now();
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const activeVisitors = Object.values(data.visitors).filter(visitor => now - new Date(visitor.lastSeen).getTime() < 120000).sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
  const todayViews = data.pageViews.filter(view => new Date(view.occurredAt) >= todayStart);
  const uniqueToday = new Set(todayViews.map(view => view.visitorId)).size;
  const countBy = (values: string[]) => Object.entries(values.reduce<Record<string, number>>((result, value) => { result[value || "Unknown"] = (result[value || "Unknown"] || 0) + 1; return result; }, Object.create(null))).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([label, value]) => ({ label, value }));
  const trend = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() - (6 - index));
    const end = new Date(date); end.setDate(end.getDate() + 1);
    return { label: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }), value: data.pageViews.filter(view => { const time = new Date(view.occurredAt); return time >= date && time < end; }).length };
  });
  return {
    generatedAt: new Date().toISOString(),
    emailConfigured: isEnquiryEmailConfigured(),
    summary: { activeNow: activeVisitors.length, visitorsToday: uniqueToday, pageViewsToday: todayViews.length, totalVisitors: Object.keys(data.visitors).length, newMessages: data.contacts.filter(contact => contact.status === "new").length, totalMessages: data.contacts.length },
    activeVisitors, contacts: data.contacts.slice(0, 500), recentPageViews: data.pageViews.slice((page - 1) * pageSize, page * pageSize).map(view => ({ ...view, lastIp: data.visitors[view.visitorId]?.lastIp || view.ip || "" })),
    recentPageViewsPagination: { page, pageSize, totalPages, total: data.pageViews.length },
    topPages: countBy(todayViews.map(view => view.path)), topCountries: countBy(todayViews.map(view => view.country)), trend,
  };
}
