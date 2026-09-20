import { verifyFormProtection } from "@/lib/form-protection";
import { readJson, rateLimit, RequestError, requestFailure } from "@/lib/request-security";
import { addContact, getCountry } from "@/lib/admin-store";
import { DISCOUNT_CAMPAIGN, TIMED_DISCOUNT_CAMPAIGN } from "@/lib/contact-campaign";
import { notifyEnquiry } from "@/lib/enquiry-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await readJson(request, 24576);
    rateLimit(request, "contact", 3, 10 * 60 * 1000);
    await verifyFormProtection(body, "enquiry");
    const clean = (value: unknown, maximum: number) => {
      if (value !== undefined && (typeof value !== "string" || value.length > maximum)) throw new RequestError("A form field is invalid or too long.");
      return typeof value === "string" ? value.normalize("NFC").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim() : "";
    };
    const name = clean(body.name, 100); const email = clean(body.email, 200); const message = clean(body.message, 4000);
    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    const { country } = getCountry(request);
    const campaign = body.campaign === DISCOUNT_CAMPAIGN || body.campaign === TIMED_DISCOUNT_CAMPAIGN ? body.campaign : undefined;
    const formSource = campaign === TIMED_DISCOUNT_CAMPAIGN ? "popup-85" : campaign === DISCOUNT_CAMPAIGN ? "popup-70" : body.formSource === "footer" ? "footer" : body.formSource === "quote-popup" ? "quote-popup" : "contact-page";
    const contact = await addContact({ name, email, message, phone: clean(body.phone, 60), service: clean(body.service, 100) || "General enquiry", sourcePage: clean(body.sourcePage, 500) || "/", country, formSource, emailNotification: { status: "pending", attempts: 0, acceptedRecipients: [] }, ...(campaign ? { campaign } : {}) });
    try { await notifyEnquiry(contact.id); }
    catch { console.error("Enquiry saved, but its email notification could not be completed."); }
    return Response.json({ ok: true, id: contact.id }, { status: 201 });
  } catch (error) { return requestFailure(error); }
}
