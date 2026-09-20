"use client";

import { FormProtectionFields, protectedFormFields } from "@/components/form-protection";

import Image from "next/image";
import { useState, type FormEvent } from "react";

export function FooterContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true); setStatus("");
    const form = event.currentTarget; const data = new FormData(form);
    try {
      const protection = await protectedFormFields(form);
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...protection, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), message: data.get("message"), service: "Website consultation", formSource: "footer", sourcePage: window.location.pathname }) });
      const result = await response.json();
      if (!response.ok) { setStatus(result.error || "Unable to send your enquiry."); return; }
      form.reset(); setStatus("Thank you. Your message has been received and our team will be in touch.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your enquiry. Please try again.");
    } finally { setSubmitting(false); }
  }
  return (
    <section className="footerContactFormSection" aria-labelledby="footer-contact-form-title">
      <div className="footerContactDecor" aria-hidden="true">
        <Image className="footerContactCurve" src="/images/footer-contact/side-curve.png" alt="" width={132} height={672} />
        <Image className="footerContactShelf" src="/images/footer-contact/book-shelf.png" alt="" width={578} height={350} />
      </div>

      <div className="footerContactFormWrap">
        <span className="footerContactOrb" aria-hidden="true" />
        <div className="footerContactFormCard">
          <Image className="footerContactScribble" src="/images/footer-contact/scribble.png" alt="" width={288} height={156} />
          <div className="footerContactFormInner">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="footer-contact-form-title">Have a question? Let’s take care of every concern.</h2>
          <p>Share a few details below and our team will get back to you with thoughtful, confidential guidance for your book.</p>
          <form onSubmit={submit}><FormProtectionFields />
            <label><span>Full name</span><input type="text" name="name" placeholder="Full Name*" autoComplete="name" required maxLength={100} /></label>
            <label><span>Email address</span><input type="email" name="email" placeholder="Email*" autoComplete="email" required /></label>
            <label><span>Phone number</span><input type="tel" name="phone" placeholder="Phone Number" autoComplete="tel" /></label>
            <label className="footerContactMessage"><span>Message</span><textarea name="message" placeholder="Message*" rows={4} required maxLength={4000} /></label>
            <button type="submit" disabled={submitting}>{submitting ? "Sending…" : "Submit"}</button>
            <p className="contactFormStatus" role="status">{status}</p>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
