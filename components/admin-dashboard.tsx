"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Activity, BarChart3, BookOpen, Clock3, Globe2, Inbox, LogOut, Mail, MapPin, RefreshCw, Search, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AdminDiscountCustomers } from "@/components/admin-discount-customers";
import { AdminEmailNotification } from "@/components/admin-email-notification";
import type { EnquiryEmailNotification } from "@/lib/admin-store";
import { isPopupContact } from "@/lib/contact-campaign";

type ContactStatus = "new" | "in-progress" | "resolved" | "archived";
type Contact = { id: string; name: string; email: string; phone: string; service: string; message: string; sourcePage: string; country: string; status: ContactStatus; submittedAt: string; campaign?: string; emailNotification?: EnquiryEmailNotification };
type Visitor = { id: string; sessionId: string; firstSeen: string; lastSeen: string; currentPath: string; country: string; lastIp?: string; region: string; city: string; referrer: string; userAgent: string; pageViews: number };
type DashboardData = {
  generatedAt: string;
  emailConfigured: boolean;
  summary: { activeNow: number; visitorsToday: number; pageViewsToday: number; totalVisitors: number; newMessages: number; totalMessages: number };
  activeVisitors: Visitor[]; contacts: Contact[];
  recentPageViews: { id: string; visitorId: string; path: string; country: string; lastIp?: string; occurredAt: string }[];
  recentPageViewsPagination: { page: number; pageSize: number; totalPages: number; total: number };
  topPages: { label: string; value: number }[]; topCountries: { label: string; value: number }[]; trend: { label: string; value: number }[];
};

const time = (value: string) => new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
const shortId = (value: string) => value.slice(0, 8).toUpperCase();

function BarList({ rows, empty }: { rows: { label: string; value: number }[]; empty: string }) {
  const maximum = Math.max(...rows.map(row => row.value), 1);
  return <div className="adminBarList">{rows.length ? rows.map(row => <div className="adminBarRow" key={row.label}><div><span>{row.label}</span><strong>{row.value}</strong></div><i><b style={{ width: `${Math.max(5, row.value / maximum * 100)}%` }} /></i></div>) : <p className="adminEmpty">{empty}</p>}</div>;
}

export function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | ContactStatus>("all");
  const [selected, setSelected] = useState<Contact | null>(null);
  const [activeTab, setActiveTab] = useState("live");
  const [activityPage, setActivityPage] = useState(1);
  const requestNumber = useRef(0);

  const load = useCallback(async (quiet = false) => {
    const request = ++requestNumber.current;
    if (!quiet) setLoading(true);
    try {
      const response = await fetch(`/api/admin/data?activityPage=${activityPage}`, { cache: "no-store" });
      if (request !== requestNumber.current) return;
      if (response.status === 401) { router.refresh(); return; }
      if (!response.ok) throw new Error("Dashboard request failed");
      const result = await response.json();
      if (request !== requestNumber.current) return;
      setData(result); setError("");
    } catch {
      if (request === requestNumber.current) setError("Dashboard data could not be loaded. Please refresh to try again.");
    } finally {
      if (request === requestNumber.current) setLoading(false);
    }
  }, [router, activityPage]);

  useEffect(() => {
    const initial = window.setTimeout(() => load(), 0);
    const timer = window.setInterval(() => load(true), 15000);
    return () => { window.clearTimeout(initial); window.clearInterval(timer); };
  }, [load]);

  const contacts = useMemo(() => (data?.contacts || []).filter(contact => {
    const matchesStatus = status === "all" || contact.status === status;
    const needle = query.toLowerCase();
    return !isPopupContact(contact) && matchesStatus && (!needle || `${contact.name} ${contact.email} ${contact.service} ${contact.message}`.toLowerCase().includes(needle));
  }), [data, query, status]);

  async function changeStatus(contact: Contact, nextStatus: ContactStatus) {
    const response = await fetch("/api/admin/data", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: contact.id, status: nextStatus }) });
    if (response.ok) { setSelected({ ...contact, status: nextStatus }); await load(true); }
  }

  function changeActivityPage(page: number) {
    if (page === activityPage) { void load(); return; }
    requestNumber.current += 1;
    setLoading(true);
    setActivityPage(page);
  }

  async function logout() { await fetch("/api/admin/logout", { method: "POST" }); router.refresh(); }

  if (loading && !data) return <main className="adminLoading"><RefreshCw className="adminSpin" /><p>Preparing your dashboard…</p></main>;
  if (!data) return <main className="adminLoading"><p>{error}</p><button onClick={() => load()}>Try again</button></main>;

  const cards = [
    ["Active now", data.summary.activeNow, Activity, "Seen in the past 2 minutes"],
    ["Visitors today", data.summary.visitorsToday, Users, "Unique browser visitors"],
    ["Page views today", data.summary.pageViewsToday, BarChart3, "All tracked page loads"],
    ["New enquiries", data.summary.newMessages, Mail, `${data.summary.totalMessages} total messages`],
  ] as const;
  const activity = data.recentPageViewsPagination;
  const trendMax = Math.max(...data.trend.map(item => item.value), 1);

  return <main className="adminShell">
    <header className="adminHeader"><div><Image className="adminBrandLogo adminDashboardLogo" src="/images/storybound-house-approved-logo.png" alt="Storybound House" width={1902} height={378} priority /><h1>Admin dashboard</h1><p>Website activity and client enquiries in one place.</p></div><div className="adminHeaderActions"><span><Clock3 size={15} />Updated {new Date(data.generatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span><button onClick={() => load()}><RefreshCw size={16} />Refresh</button><button onClick={logout}><LogOut size={16} />Sign out</button></div></header>

    <section className="adminMetrics" aria-label="Dashboard summary">{cards.map(([label, value, Icon, note]) => <article key={label}><div><span>{label}</span><strong>{value}</strong><small>{note}</small></div><Icon /></article>)}</section>

    {error ? <p className="adminAlert">{error}</p> : null}
    {!data.emailConfigured && <p className="adminAlert">Enquiries are saved, but email notifications are not active. Configure the SMTP sender in the server environment, then retry saved notifications.</p>}
    <div className="adminWorkspace">
      <div className="adminTabContent">
        <div role="tabpanel" id="admin-panel-popup" aria-labelledby="admin-tab-popup" hidden={activeTab !== "popup"} tabIndex={0}>
          <AdminDiscountCustomers contacts={data.contacts} onRefresh={() => load(true)} />
        </div>
        <div role="tabpanel" id="admin-panel-discount85" aria-labelledby="admin-tab-discount85" hidden={activeTab !== "discount85"} tabIndex={0}>
          <AdminDiscountCustomers contacts={data.contacts} onRefresh={() => load(true)} timed />
        </div>
        <div role="tabpanel" id="admin-panel-inbox" aria-labelledby="admin-tab-inbox" hidden={activeTab !== "inbox"} tabIndex={0}>
    <section className="adminPanel adminMessages"><div className="adminPanelHeading adminMessageHeading"><div><p className="adminKicker">Lead inbox</p><h2>Contact enquiries</h2></div><div className="adminMessageTools"><label><Search size={15} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search messages" /></label><select value={status} onChange={event => setStatus(event.target.value as typeof status)}><option value="all">All statuses</option><option value="new">New</option><option value="in-progress">In progress</option><option value="resolved">Resolved</option><option value="archived">Archived</option></select></div></div><div className="adminInboxLayout"><div className="adminMessageList">{contacts.length ? contacts.map(contact => <button className={selected?.id === contact.id ? "selected" : ""} key={contact.id} onClick={() => setSelected(contact)}><span className={`adminStatus adminStatus-${contact.status}`}>{contact.status}</span><strong>{contact.name}</strong><small>{contact.service} · {time(contact.submittedAt)}</small><p>{contact.message}</p></button>) : <p className="adminEmpty">No enquiries match this filter.</p>}</div><aside className="adminMessageDetail">{selected ? <><div className="adminMessageIdentity"><div><span>{selected.name.slice(0, 1).toUpperCase()}</span></div><section><h3>{selected.name}</h3><a href={`mailto:${selected.email}`}>{selected.email}</a><p>{selected.phone || "No phone provided"}</p></section></div><dl><div><dt>Service</dt><dd>{selected.service}</dd></div><div><dt>Country</dt><dd>{selected.country}</dd></div><div><dt>Source page</dt><dd>{selected.sourcePage}</dd></div><div><dt>Received</dt><dd>{time(selected.submittedAt)}</dd></div></dl><AdminEmailNotification contact={data.contacts.find(contact => contact.id === selected.id) || selected} onRefresh={() => load(true)} /><div className="adminFullMessage"><span>Message</span><p>{selected.message}</p></div><label className="adminStatusSelect">Update status<select value={selected.status} onChange={event => changeStatus(selected, event.target.value as ContactStatus)}><option value="new">New</option><option value="in-progress">In progress</option><option value="resolved">Resolved</option><option value="archived">Archived</option></select></label><a className="adminReply" href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: ${selected.service} enquiry`)}`}><Mail size={16} />Reply by email</a></> : <div className="adminSelectPrompt"><Inbox /><h3>Select an enquiry</h3><p>Choose a message to view the full details and update its status.</p></div>}</aside></div></section>

        </div>
        <div role="tabpanel" id="admin-panel-live" aria-labelledby="admin-tab-live" hidden={activeTab !== "live"} tabIndex={0}>
    <section className="adminGrid adminAnalyticsGrid">
      <article className="adminPanel adminTrend"><div className="adminPanelHeading"><div><p className="adminKicker">Last seven days</p><h2>Traffic trend</h2></div><BarChart3 /></div><div className="adminTrendChart">{data.trend.map(item => <div key={item.label}><span>{item.value}</span><i style={{ height: `${Math.max(8, item.value / trendMax * 100)}%` }} /><small>{item.label}</small></div>)}</div></article>
      <article className="adminPanel"><div className="adminPanelHeading"><div><p className="adminKicker">Today</p><h2>Top pages</h2></div><BookOpen /></div><BarList rows={data.topPages} empty="No page views recorded today." /></article>
      <article className="adminPanel"><div className="adminPanelHeading"><div><p className="adminKicker">Today</p><h2>Countries</h2></div><Globe2 /></div><BarList rows={data.topCountries} empty="Country data will appear after public traffic arrives." /></article>
    </section>

    <section className="adminPanel adminLive"><div className="adminPanelHeading"><div><p className="adminKicker">Live activity</p><h2>Visitors currently on the website</h2></div><Activity /></div><div className="adminTableWrap"><table><thead><tr><th>Visitor</th><th>Current page</th><th>Country</th><th>Last IP</th><th>Views</th><th>Last active</th></tr></thead><tbody>{data.activeVisitors.length ? data.activeVisitors.map(visitor => <tr key={visitor.id}><td><strong>#{shortId(visitor.id)}</strong><small>{visitor.userAgent.includes("Mobile") ? "Mobile" : "Desktop / browser"}</small></td><td><span className="adminPath">{visitor.currentPath}</span></td><td><span className="adminCountry"><MapPin size={14} />{[visitor.city, visitor.region, visitor.country].filter(Boolean).join(", ")}</span></td><td>{visitor.lastIp || "Not recorded"}</td><td>{visitor.pageViews}</td><td>{time(visitor.lastSeen)}</td></tr>) : <tr><td colSpan={6} className="adminEmpty">No visitors active in the past two minutes.</td></tr>}</tbody></table></div></section>

    <section className="adminPanel adminRecent" aria-busy={loading}><div className="adminPanelHeading"><div><p className="adminKicker">Latest activity</p><h2>Recent page views</h2></div><Globe2 /></div><div className="adminTableWrap"><table><thead><tr><th>Visitor</th><th>Page</th><th>Country</th><th>Last IP</th><th>Time</th></tr></thead><tbody>{data.recentPageViews.map(view => <tr key={view.id}><td>#{shortId(view.visitorId)}</td><td><span className="adminPath">{view.path}</span></td><td>{view.country === "Unknown" ? "Not recorded" : view.country}</td><td>{view.lastIp || "Not recorded"}</td><td>{time(view.occurredAt)}</td></tr>)}{!data.recentPageViews.length && <tr><td colSpan={5} className="adminEmpty">No page views recorded yet.</td></tr>}</tbody></table></div>
      <div className="adminPagination">
        <p role="status">{loading ? "Loading page views…" : activity.total ? `Showing ${(activity.page - 1) * activity.pageSize + 1}–${Math.min(activity.page * activity.pageSize, activity.total)} of ${activity.total} page views` : "0 page views"}</p>
        <nav aria-label="Recent page views pagination">
          <button type="button" disabled={loading || activity.page === 1} onClick={() => changeActivityPage(1)}>First</button>
          <button type="button" disabled={loading || activity.page === 1} onClick={() => changeActivityPage(activity.page - 1)}>Previous</button>
          <span>Page {activity.page} of {activity.totalPages}</span>
          <button type="button" disabled={loading || activity.page === activity.totalPages} onClick={() => changeActivityPage(activity.page + 1)}>Next</button>
          <button type="button" disabled={loading || activity.page === activity.totalPages} onClick={() => changeActivityPage(activity.totalPages)}>Last</button>
        </nav>
      </div>
    </section>        </div>
      </div>
      <aside className="adminTabSidebar">
        <div role="tablist" aria-label="Admin sections" aria-orientation="vertical" onKeyDown={event => {
          const keys = ["popup", "discount85", "inbox", "live"];
          const current = keys.indexOf(activeTab);
          const next = event.key === "ArrowDown" ? (current + 1) % keys.length : event.key === "ArrowUp" ? (current + keys.length - 1) % keys.length : event.key === "Home" ? 0 : event.key === "End" ? keys.length - 1 : -1;
          if (next < 0) return;
          event.preventDefault(); setActiveTab(keys[next]);
          document.getElementById(`admin-tab-${keys[next]}`)?.focus();
        }}>
          {([["popup", "Popup enquiries", Mail], ["discount85", "85% discount entries", Mail], ["inbox", "Lead inbox", Inbox], ["live", "Live activity", Activity]] as const).map(([id, label, Icon]) => <button key={id as string} type="button" role="tab" id={`admin-tab-${id}`} aria-controls={`admin-panel-${id}`} aria-selected={activeTab === id} tabIndex={activeTab === id ? 0 : -1} onClick={() => setActiveTab(id as string)}><Icon size={18} />{label as string}</button>)}
        </div>
      </aside>
    </div>
  </main>;
}
