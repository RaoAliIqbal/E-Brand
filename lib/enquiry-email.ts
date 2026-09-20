import nodemailer from "nodemailer";
import { claimEnquiryEmail, updateEnquiryEmail, type ContactSubmission, type EnquiryEmailNotification } from "@/lib/admin-store";
import { ENQUIRY_RECIPIENTS, isEnquiryEmailConfigured } from "@/lib/enquiry-email-config";

const escapeHtml = (text: string) => text.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);

export function enquiryEmailContent(contact: ContactSubmission) {
  const source = contact.formSource === "popup-85" ? "85% discount popup" : contact.formSource === "popup-70" ? "70% discount popup" : contact.formSource === "footer" ? "Footer form" : contact.formSource === "quote-popup" ? "Free quote popup" : "Contact page";
  const details = [
    ["Form", source], ["Name", contact.name], ["Email", contact.email],
    ["Phone", contact.phone || "Not provided"], ["Service", contact.service],
    ["Page", contact.sourcePage], ["Country", contact.country],
    ["Received", contact.submittedAt], ["Enquiry ID", contact.id], ["Message", contact.message],
  ];
  return {
    subject: `[Storybound House] ${source} — ${contact.name.replace(/[\r\n]/g, " ")}`,
    text: details.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
    html: `<h2>New Storybound House enquiry</h2><table cellpadding="10" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${details.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table><p>Reply to this email to contact the visitor.</p>`,
  };
}

/** All forms use this server-only path. Saving the lead is independent of SMTP. */
export async function notifyEnquiry(id: string) {
  const contact = await claimEnquiryEmail(id);
  if (!contact) return;
  const notification = contact.emailNotification!;
  if (!isEnquiryEmailConfigured()) {
    await updateEnquiryEmail(id, { ...notification, status: "not-configured", error: "SMTP is not configured. The enquiry is saved; configure SMTP and retry." });
    return;
  }
  const recipients = ENQUIRY_RECIPIENTS.filter(email => !notification.acceptedRecipients.includes(email));
  if (!recipients.length) {
    await updateEnquiryEmail(id, { ...notification, status: "sent", sentAt: new Date().toISOString() });
    return;
  }
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port,
    secure: port === 465, requireTLS: port !== 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
    disableFileAccess: true, disableUrlAccess: true,
  });
  let outcome: EnquiryEmailNotification;
  try {
    const result = await transport.sendMail({
      from: { name: "Storybound House", address: process.env.SMTP_FROM! },
      to: recipients, replyTo: contact.email,
      messageId: `<enquiry-${contact.id}@storyboundhouse.com>`,
      ...enquiryEmailContent(contact),
    });
    const accepted = result.accepted;
    const acceptedRecipients = [...new Set([...notification.acceptedRecipients, ...accepted.filter(value => ENQUIRY_RECIPIENTS.some(email => email === value))])];
    const complete = ENQUIRY_RECIPIENTS.every(email => acceptedRecipients.includes(email));
    outcome = { ...notification, acceptedRecipients, status: complete ? "sent" : "partial", ...(complete ? { sentAt: new Date().toISOString() } : { error: "Some recipients were not accepted by the mail server. Retry to notify the remaining addresses." }) };
  } catch {
    outcome = { ...notification, status: notification.acceptedRecipients.length ? "partial" : "failed", error: "The mail server could not confirm the notification. Check SMTP settings and retry; if the connection timed out, a recipient may already have received it." };
  } finally { transport.close(); }
  await updateEnquiryEmail(id, outcome);
}
