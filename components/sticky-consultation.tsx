"use client";

import { useEffect, useState } from "react";
import { openOfferPopup } from "@/components/offer-popup";
import { openTimedOfferPopup } from "@/components/timed-offer-popup";

export function StickyConsultation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const pageScrollTop = () => Math.max(
      window.scrollY || window.pageYOffset || 0,
      document.scrollingElement?.scrollTop || 0,
      document.documentElement.scrollTop || 0,
      document.body.scrollTop || 0,
    );
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => setVisible(pageScrollTop() > 24));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("pageshow", update);
    window.addEventListener("resize", update, { passive: true });
    const scrollObserver = window.setInterval(update, 350);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(scrollObserver);
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
      window.removeEventListener("pageshow", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside
      className={`stickyConsultation${visible ? " isVisible" : ""}`}
      aria-label="Ghostwriting offer"
      aria-hidden={!visible}
    >
      <div className="stickyMessage">
        <strong><span>Hire top ghostwriters at <em>70% off</em></span><span>to create your timeless work</span></strong>
      </div>
      <div className="stickyActions">
        <button className="stickyPrimary" type="button" aria-haspopup="dialog" onClick={openTimedOfferPopup}>Activate your coupon now!</button>
        <button className="stickySecondary" type="button" aria-haspopup="dialog" onClick={openOfferPopup}>View 70% off pricing</button>
      </div>
    </aside>
  );
}
