"use client";

import { FormProtectionFields, protectedFormFields } from "@/components/form-protection";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, ShieldCheck, MessageCircle, Check } from "lucide-react";

const services = ["Ghostwriting", "Editing", "Publishing", "Cover design", "Marketing", "Not sure yet"];

export function ContactSection() {
  return (
    <section className="contactConnect" id="contact-enquiry" aria-labelledby="contact-connect-title">
      <div className="contactConnectInner">
        <div className="contactConnectCopy">
          <p className="eyebrow">Your next chapter starts here</p>
          <h2 id="contact-connect-title">Get connected with<br />our amazing team.</h2>
          <p>Have a story in mind, a manuscript in progress, or a question about publishing? Tell us where you are and where you want to go. We’ll help you find the right support for your book.</p>
          <div className="contactEmailCard"><Mail aria-hidden="true" /><div><span>Let’s start a conversation</span><a href="mailto:contact@storyboundhouse.com">contact@storyboundhouse.com</a></div></div>
          <div className="contactNextSteps">
            <h3>What happens next?</h3>
            <p><span>01</span>Share your idea and the support you need.</p>
            <p><span>02</span>Discuss your goals with a book specialist.</p>
            <p><span>03</span>Explore a proposal shaped around your project.</p>
          </div>
          <p className="contactPrivacy"><ShieldCheck size={20} />A confidential conversation. Your story stays yours.</p>
        </div>

        <ContactEnquiryForm />
      </div>
    </section>
  );
}

export function ContactEnquiryForm({ source = "contact-page", headingId }: { source?: "contact-page" | "quote-popup"; headingId?: string }) {
  const [service, setService] = useState("Ghostwriting");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [submitting, setSubmitting] = useState(false);

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true); setStatus("");
    const form = event.currentTarget; const data = new FormData(form);
    try {
      const protection = await protectedFormFields(form);
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...protection, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), service, message, formSource: source, sourcePage: window.location.pathname }) });
      const result = await response.json();
      if (!response.ok) { setStatus(result.error || "Unable to send your enquiry."); return; }
      form.reset(); setMessage(""); setStatus("Thank you. Your enquiry has been received and our team will be in touch.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send your enquiry. Please try again.");
    } finally { setSubmitting(false); }
  }

  return (
        <div className="contactEnquiryCard">
          <div className="contactCardIcon"><MessageCircle aria-hidden="true" /></div>
          <h2 id={headingId}>Talk to a book expert</h2>
          <p>A few details will help us understand your project.</p>
          <form onSubmit={submitEnquiry}><FormProtectionFields />
            <fieldset><legend>What can we help with?</legend><div className="contactServiceChoices">{services.map((item) => <button type="button" key={item} aria-pressed={service === item} onClick={() => setService(item)}>{service === item && <Check size={14} />}{item}</button>)}</div></fieldset>
            <div className="contactFieldGrid">
              <label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} /></label>
              <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" maxLength={200} placeholder="you@example.com" required /></label>
            </div>
            <label>Phone number <small>(optional)</small><input name="phone" type="tel" autoComplete="tel" maxLength={60} placeholder="Include your country code" /></label>
            <label>Tell us about your book <span>*</span><textarea name="message" rows={5} placeholder="Your idea, current stage, and what you would like help with…" required maxLength={2000} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
            <div className="contactCharacterCount">{message.length}/2000</div>
            <button className="contactSend" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send my enquiry"} <ArrowRight size={18} /></button>
            <p className="contactFormNote">Your enquiry is sent securely to the Storybound House team.</p>
            <p className="contactFormStatus" role="status">{status}</p>
          </form>
        </div>
  );
}
