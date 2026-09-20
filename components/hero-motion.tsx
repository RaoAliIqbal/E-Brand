"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Shared image-only motion for inner pages; publishing and bookcover own their scenes. */
export function HeroMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/" || pathname.startsWith("/adminarea")) return;
    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let teardown = () => {};
    function setup() {
      teardown();
      if (!preference.matches) return;
      const cleanups = Array.from(document.querySelectorAll<HTMLElement>(".innerHero, .editingHero, .ghostHero")).map(hero => {
        const image = hero.querySelector<HTMLImageElement>(":scope > img:not(.ghostHeroLeft):not(.ghostHeroRight)");
        const background = getComputedStyle(hero);
        const hasBackground = background.backgroundImage.includes("url(");
        if (!image && !hasBackground) return () => {};
        hero.classList.add("motionHero");
        image?.classList.add("motionHeroImage");
        // An oversized layer moves without exposing an empty edge of the image.
        const backdrop = !image && hasBackground ? document.createElement("span") : null;
        if (backdrop) {
          backdrop.className = "motionHeroBackdrop";
          backdrop.setAttribute("aria-hidden", "true");
          backdrop.style.background = background.background;
          hero.prepend(backdrop);
        }
        let frame = 0;
        const reset = () => {
          cancelAnimationFrame(frame);
          hero.style.setProperty("--hero-x", "0px");
          hero.style.setProperty("--hero-y", "0px");
        };
        const move = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          const rect = hero.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - .5) * 20;
          const y = ((event.clientY - rect.top) / rect.height - .5) * 14;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            hero.style.setProperty("--hero-x", `${x}px`);
            hero.style.setProperty("--hero-y", `${y}px`);
          });
        };
        hero.addEventListener("pointermove", move);
        hero.addEventListener("pointerleave", reset);
        return () => {
          reset();
          hero.classList.remove("motionHero");
          image?.classList.remove("motionHeroImage");
          backdrop?.remove();
          hero.removeEventListener("pointermove", move);
          hero.removeEventListener("pointerleave", reset);
        };
      });
      teardown = () => cleanups.forEach(cleanup => cleanup());
    }
    setup();
    preference.addEventListener("change", setup);
    return () => { teardown(); preference.removeEventListener("change", setup); };
  }, [pathname]);
  return null;
}
