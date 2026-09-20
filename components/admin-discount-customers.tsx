"use client";

import { useState } from "react";
import { Search, Tag } from "lucide-react";
import type { ContactSubmission, ContactStatus } from "@/lib/admin-store";
import { isDiscountContact, isTimedDiscountContact } from "@/lib/contact-campaign";
import { AdminEmailNotification } from "@/components/admin-email-notification";

export function AdminDiscountCustomers({ contacts, onRefresh, timed = false }: { contacts: ContactSubmission[]; onRefresh: () => Promise<void>; timed?: boolean }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [saving, setSaving] = useState<string | null>(null);
  const [error, setError] = useState("");
  const customers = contacts.filter(timed ? isTimedDiscountContact : isDiscountContact);
  const filtered = customers.filter(contact => (status === "all" || status === contact.status) && `${contact.name} ${contact.email} ${contact.phone} ${contact.message}`.toLowerCase().includes(query.toLowerCase()));

  async function changeStatus(id: string, nextStatus: ContactStatus) {
    setSaving(id); setError("");
    try {
      const response = await fetch("/api/admin/data", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status: nextStatus }) });
      if (!response.ok) throw new Error("Could not update status");
      await onRefresh();
    } catch { setError("The status could not be updated. Please try again."); }
    finally { setSaving(null); }
  }

  return <section className="adminPanel adminDiscountCustomers" aria-labelledby={timed ? "timed-discount-title" : "discount-customers-title"}>
    <div className="adminPanelHeading adminMessageHeading"><div><p className="adminKicker"><Tag size={14} /> Popup enquiries · {customers.length} customers</p><h2 id={timed ? "timed-discount-title" : "discount-customers-title"}>{timed ? "85% discount entries" : "70% discount customers"}</h2></div><div className="adminMessageTools"><label><Search size={15} /><input aria-label="Search discount customers" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search discount customers" /></label><select aria-label="Filter discount customer status" value={status} onChange={event => setStatus(event.target.value)}><option value="all">All statuses</option><option value="new">New</option><option value="in-progress">In progress</option><option value="resolved">Resolved</option><option value="archived">Archived</option></select></div></div>
    {error && <p className="adminAlert" role="alert">{error}</p>}
    <div className="adminDiscountList">{filtered.length ? filtered.map(contact => <article key={contact.id} className="adminDiscountCard">
      <div className="adminDiscountIdentity"><div><h3>{contact.name}</h3><a href={`mailto:${contact.email}`}>{contact.email}</a>{contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}</div><span className={`adminStatus adminStatus-${contact.status}`}>{contact.status}</span></div>
      <p className="adminDiscountMessage">{contact.message}</p>
      <AdminEmailNotification contact={contact} onRefresh={onRefresh} />
      <dl><div><dt>Source page</dt><dd>{contact.sourcePage}</dd></div><div><dt>Country</dt><dd>{contact.country}</dd></div><div><dt>Received</dt><dd>{new Date(contact.submittedAt).toLocaleString()}</dd></div></dl>
      <label className="adminStatusSelect">Update status<select aria-label={`Status for ${contact.name}`} value={contact.status} disabled={saving === contact.id} onChange={event => changeStatus(contact.id, event.target.value as ContactStatus)}><option value="new">New</option><option value="in-progress">In progress</option><option value="resolved">Resolved</option><option value="archived">Archived</option></select></label>
    </article>) : <p className="adminEmpty">{customers.length ? "No discount customers match this filter." : (timed ? "Enquiries from the 15-second popup will appear here." : "Enquiries from the 70% off popup will appear here.")}</p>}</div>
  </section>;
}
