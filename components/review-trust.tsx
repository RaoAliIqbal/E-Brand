"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const reviewMarks = [
  { src: "/images/reviews/capterra.png", alt: "Capterra", width: 1138, height: 394, className: "reviewLogoWide" },
  { src: "/images/reviews/trustpilot.png", alt: "Trustpilot", width: 127, height: 53, className: "reviewLogoTrustpilot" },
  { src: "/images/reviews/google-reviews.png", alt: "Google Reviews", width: 172, height: 53, className: "reviewLogoGoogle" },
  { src: "/images/reviews/reviews-io.png", alt: "Reviews.io", width: 158, height: 55, className: "" },
  { src: "/images/reviews/writing-review-mark.svg", alt: "Writing services recognition", width: 120, height: 120, className: "reviewLogoBadge" },
];

export function ReviewTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const direction = useRef<"down" | "up">("down");

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let wasInView = false;

    const updateAnimation = () => {
      const nextY = window.scrollY;
      if (Math.abs(nextY - lastScrollY.current) > 3) direction.current = nextY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = nextY;

      const section = sectionRef.current;
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      const isInView = bounds.top < window.innerHeight * .8 && bounds.bottom > window.innerHeight * .18;

      if (isInView && !wasInView) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          wasInView = true;
          return;
        }
        const startY = direction.current === "down" ? 56 : -56;
        logosRef.current?.querySelectorAll<HTMLElement>(".reviewLogo").forEach((logo, index) => {
          logo.getAnimations().forEach(animation => animation.cancel());
          logo.animate(
            [
              { opacity: 0, transform: `translateY(${startY}px)` },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 760, delay: index * 95, easing: "cubic-bezier(.22,1,.36,1)", fill: "both" },
          );
        });
      }
      wasInView = isInView;
    };

    window.addEventListener("scroll", updateAnimation, { passive: true });
    window.addEventListener("resize", updateAnimation);
    updateAnimation();
    return () => {
      window.removeEventListener("scroll", updateAnimation);
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);

  return (
    <section ref={sectionRef} className="reviewTrust" aria-labelledby="review-trust-title">
      <div className="reviewTrustHeading">
        <p>Trusted review platforms</p>
        <h2 id="review-trust-title">Reputation you can research.</h2>
      </div>
      <div ref={logosRef} className="reviewLogos" aria-label="Independent review and recognition platforms">
        {reviewMarks.map(mark => (
          <div className={`reviewLogo ${mark.className}`} key={mark.alt}>
            <Image src={mark.src} alt={mark.alt} width={mark.width} height={mark.height} />
          </div>
        ))}
      </div>
    </section>
  );
}
