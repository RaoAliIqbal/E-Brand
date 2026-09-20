"use client";

import { FormProtectionFields, protectedFormFields } from "@/components/form-protection";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, LockKeyhole, Mail, MessageSquare, Phone, UserRound, X } from "lucide-react";
import styles from "./offer-popup.module.css";
import { DISCOUNT_CAMPAIGN } from "@/lib/contact-campaign";

/** Call from a chosen CTA when the trigger buttons have been approved. */
export function openOfferPopup() {
  window.dispatchEvent(new Event("storybound:open-offer"));
}

export function OfferPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const previousFocus = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef<string | null>(null);

  function restorePage() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
    previousFocus.current?.focus();
  }

  useEffect(() => {
    const element = dialog.current;
    function open() {
      if (!element || element.open) return;
      previousFocus.current = document.activeElement as HTMLElement;
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      element.showModal();
    }
    function preview() {
      if (window.location.hash === "#offer-preview") open();
    }
    window.addEventListener("storybound:open-offer", open);
    window.addEventListener("hashchange", preview);
    preview();
    return () => {
      window.removeEventListener("storybound:open-offer", open);
      window.removeEventListener("hashchange", preview);
      element?.close();
      restorePage();
    };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setError("");
    try {
      const protection = await protectedFormFields(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...protection, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), message: data.get("message"), service: "Ghostwriting — 70% offer", campaign: DISCOUNT_CAMPAIGN, sourcePage: window.location.pathname }),
      });
      if (!response.ok) throw new Error((await response.json()).error || "Unable to submit your enquiry. Please try again.");
      form.reset();
      setSuccess(true);
    } catch {
      setError("We couldn’t send your enquiry. Please try again or email us below.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <dialog id="discount-popup" ref={dialog} className={styles.dialog} aria-labelledby="offer-title" onClose={restorePage} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.card}>
        <Image className={styles.artwork} src="/images/offer/popup-artwork.png" alt="" fill sizes="(max-width: 700px) 100vw, 1060px" />
        <Image className={styles.saleTag} src="/images/offer/sale-tag.png" alt="70% off" width={90} height={180} />
        <button className={styles.close} type="button" aria-label="Close offer popup" onClick={() => dialog.current?.close()}><X size={23} /></button>
        <section className={styles.content}>
          <p className={styles.eyebrow}>YOUR STORY STARTS HERE</p>
          <h2 id="offer-title">Don’t be late,<br />the offer won’t wait.</h2>
          <div className={styles.offer}><strong>70<span>% OFF</span></strong><p>On all <b>Ghostwriting Services</b></p></div>
          {success ? <div className={styles.success} role="status"><CheckCircle2 size={42} /><h3>Thank you for reaching out!</h3><p>Your enquiry has been received. Our team will be in touch to discuss your book.</p><button type="button" onClick={() => dialog.current?.close()}>Back to the website <ArrowRight size={18} /></button></div> : <form className={styles.form} onSubmit={submit}><FormProtectionFields />
            <label><span>Full name <i>*</i></span><div className={styles.field}><UserRound size={18} /><input name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} /></div></label>
            <label><span>Email address <i>*</i></span><div className={styles.field}><Mail size={18} /><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200} /></div></label>
            <label><span>Phone number <small>(optional)</small></span><div className={styles.field}><Phone size={18} /><input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" maxLength={60} /></div></label>
            <label><span>Tell us about your book <i>*</i></span><div className={`${styles.field} ${styles.message}`}><MessageSquare size={18} /><textarea name="message" placeholder="An idea, a draft, or a story waiting to be told…" rows={2} required maxLength={4000} /></div></label>
            {error && <p className={styles.error} role="alert">{error}</p>}
            <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? <><LoaderCircle className={styles.spinner} size={19} /> Sending…</> : <>Claim my 70% off <ArrowRight size={19} /></>}</button>
            <p className={styles.privacy}><LockKeyhole size={12} /> Your details stay private and confidential.</p>
          </form>}
          <a className={styles.email} href="mailto:info@storyboundhouse.com"><Mail size={16} />info@storyboundhouse.com</a>
        </section>
      </div>
    </dialog>
  );
}
