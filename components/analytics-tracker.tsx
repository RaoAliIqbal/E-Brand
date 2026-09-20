"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function id(storage: Storage, key: string) {
  const existing = storage.getItem(key);
  if (existing) return existing;
  const value = crypto.randomUUID(); storage.setItem(key, value); return value;
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    if (pathname.startsWith("/adminarea")) return;
    const visitorId = id(localStorage, "storybound_visitor_id");
    const sessionId = id(sessionStorage, "storybound_session_id");
    const pagePath = `${pathname}${query ? `?${query}` : ""}`;
    const send = (type: "pageview" | "heartbeat") => fetch("/api/analytics", { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true, body: JSON.stringify({ visitorId, sessionId, path: pagePath, title: document.title, referrer: document.referrer, type }) }).catch(() => undefined);
    send("pageview");
    const timer = window.setInterval(() => { if (document.visibilityState === "visible") send("heartbeat"); }, 30000);
    const visibility = () => { if (document.visibilityState === "visible") send("heartbeat"); };
    document.addEventListener("visibilitychange", visibility);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", visibility); };
  }, [pathname, query]);
  return null;
}
