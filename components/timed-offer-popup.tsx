"use client";

import { FormProtectionFields, protectedFormFields } from "@/components/form-protection";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, X } from "lucide-react";
import { TIMED_DISCOUNT_CAMPAIGN } from "@/lib/contact-campaign";
import styles from "./timed-offer-popup.module.css";

export function openTimedOfferPopup() {
  window.dispatchEvent(new Event("storybound:open-timed-offer"));
}

export function TimedOfferPopup() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const submitted = useRef(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    let due = false;
    let timer = 0;
    let dismissals = 0;
    function schedule(delay: number) {
      window.clearTimeout(timer);
      due = false;
      timer = window.setTimeout(() => { due = true; tryOpen(); }, delay);
    }
    function tryOpen() {
      if (!due || !element || document.visibilityState !== "visible" || document.querySelector("dialog[open]")) return;
      previousFocus.current = document.activeElement as HTMLElement;
      due = false;
      element.showModal();
    }
    function openManually() {
      if (element?.open) return;
      window.clearTimeout(timer);
      due = true;
      tryOpen();
    }
    function closed() {
      if (!submitted.current) {
        dismissals += 1;
        schedule(dismissals * 30000);
      }
    }
    schedule(15000);
    const observer = new MutationObserver(tryOpen);
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["open"] });
    document.addEventListener("visibilitychange", tryOpen);
    window.addEventListener("storybound:open-timed-offer", openManually);
    element.addEventListener("close", closed);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      document.removeEventListener("visibilitychange", tryOpen);
      window.removeEventListener("storybound:open-timed-offer", openManually);
      element.removeEventListener("close", closed);
      element.close();
    };
  }, [pathname]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const protection = await protectedFormFields(form);
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...protection, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), message: "Please contact me about the 85% discount coupon.", service: "Ghostwriting — 85% coupon", campaign: TIMED_DISCOUNT_CAMPAIGN, sourcePage: pathname }),
      });
      if (!response.ok) throw new Error((await response.json()).error || "Unable to save enquiry");
      submitted.current = true;
      form.reset(); setStatus("success");
    } catch (error) { setError(error instanceof Error ? error.message : "Please try again or email info@storyboundhouse.com."); setStatus("error"); }
  }

  return <dialog ref={dialog} className={styles.dialog} aria-labelledby="timed-offer-title" onClose={() => previousFocus.current?.isConnected && previousFocus.current.focus()}>
    <button className={styles.close} type="button" aria-label="Close discount offer" onClick={() => dialog.current?.close()}><X size={30} /></button>
    <div className={styles.content}>
      <h2 id="timed-offer-title">Don’t Leave Yet, <em>Wait!</em></h2>
      <p className={styles.offer}>Save Further <strong>85% off</strong> Coupon, Use Anytime</p>
      {status === "success" ? <div className={styles.success} role="status"><CheckCircle2 size={36} /><h3>Your discount request is saved.</h3><p>Our team will be in touch about your offer.</p><button type="button" onClick={() => dialog.current?.close()}>Continue browsing</button></div> : <>
        <p className={styles.intro}>Enter your details to save your offer request and let our team get in touch.</p>
        <form className={styles.form} onSubmit={submit}><FormProtectionFields />
          <label><span>Full name *</span><input name="name" autoComplete="name" placeholder="Full Name *" maxLength={100} required /></label>
          <label><span>Email address *</span><input name="email" type="email" autoComplete="email" placeholder="Email Address *" maxLength={200} required /></label>
          <label><span>Phone number</span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone No." maxLength={60} /></label>
          <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Saving…" : "Get Discount"}</button>
          {status === "error" && <p className={styles.error} role="alert">{error}</p>}
        </form>
      </>}
    </div>
  </dialog>;
}
