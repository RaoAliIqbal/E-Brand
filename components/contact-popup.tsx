"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { ContactEnquiryForm } from "@/components/contact-section";
import styles from "./contact-popup.module.css";

export function QuotePopupButton() {
  return <button type="button" aria-haspopup="dialog" onClick={() => window.dispatchEvent(new Event("storybound:open-quote"))}>Get a free quote</button>;
}

export function QuotePopupTrigger({ children, className }: { children: ReactNode; className?: string }) {
  return <a href="#quote-popup" className={className} aria-haspopup="dialog" onClick={(event) => { event.preventDefault(); window.dispatchEvent(new Event("storybound:open-quote")); }}>{children}</a>;
}

export function ContactPopup() {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const element = dialog.current;
    function open() {
      if (!element || document.querySelector("dialog[open]")) return;
      previousFocus.current = document.activeElement as HTMLElement;
      element.showModal();
    }
    window.addEventListener("storybound:open-quote", open);
    return () => { window.removeEventListener("storybound:open-quote", open); element?.close(); };
  }, []);
  return <dialog id="quote-popup" ref={dialog} className={styles.dialog} aria-labelledby="quote-popup-title" onClose={() => previousFocus.current?.isConnected && previousFocus.current.focus()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    <div className={styles.card}>
      <button type="button" className={styles.close} aria-label="Close contact form" onClick={() => dialog.current?.close()}><X size={24} /></button>
      <ContactEnquiryForm source="quote-popup" headingId="quote-popup-title" />
    </div>
  </dialog>;
}
