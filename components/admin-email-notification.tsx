"use client";

import { useState } from "react";
import type { ContactSubmission } from "@/lib/admin-store";

export function AdminEmailNotification({ contact, onRefresh }: { contact: ContactSubmission; onRefresh: () => Promise<void> }) {
  const [retrying, setRetrying] = useState(false);
  const [error, setError] = useState("");
  const notification = contact.emailNotification;
  const labels = { pending: "Email pending", sending: "Sending email…", sent: "Email accepted by mail server", partial: "Email partially sent", failed: "Email needs attention", "not-configured": "SMTP not configured" };
  const canRetry = notification && notification.status !== "sent";
  async function retry() {
    setRetrying(true); setError("");
    try {
      const response = await fetch("/api/admin/notifications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: contact.id }) });
      if (!response.ok) throw new Error("Unable to retry");
      await onRefresh();
    } catch { setError("Could not retry the email. Please try again."); }
    finally { setRetrying(false); }
  }
  if (!notification) return <p className="adminEmailNotification">Email status not recorded for this older enquiry.</p>;
  return <div className="adminEmailNotification" role="status">
    <strong>{labels[notification.status]}</strong>
    <span>{notification.acceptedRecipients.length} of 5 recipients accepted</span>
    {notification.error && <p>{notification.error}</p>}
    {canRetry && <button type="button" disabled={retrying} onClick={retry}>{retrying ? "Retrying…" : "Retry email notification"}</button>}
    {error && <p role="alert">{error}</p>}
  </div>;
}
