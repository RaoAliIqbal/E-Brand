"use client";

import { BrandMotion } from "@/components/brand-motion";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { AnalyticsTracker } from "@/components/analytics-tracker";
import { SiteWideFooter } from "@/components/faq-footer";
import { StickyConsultation } from "@/components/sticky-consultation";
import { OfferPopup } from "@/components/offer-popup";
import { HeroMotion } from "@/components/hero-motion";
import { TimedOfferPopup } from "@/components/timed-offer-popup";
import { ContactPopup } from "@/components/contact-popup";
import { SubmenuPopupBindings } from "@/components/submenu-popup-bindings";

export function PublicSiteChrome() {
  const pathname = usePathname();
  if (pathname.startsWith("/adminarea")) return null;
  return <><BrandMotion /><HeroMotion /><SubmenuPopupBindings /><SiteWideFooter /><StickyConsultation /><OfferPopup /><TimedOfferPopup key={pathname} /><ContactPopup key={`quote-${pathname}`} /><Suspense fallback={null}><AnalyticsTracker /></Suspense></>;
}
