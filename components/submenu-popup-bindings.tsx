"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function isSubmenuPath(pathname: string) {
  return /^(?:\/fiction\/[^/]+(?:\/[^/]+)?|\/non-fiction\/[^/]+|\/ghostwriting\/[^/]+)$/.test(pathname);
}

export function SubmenuPopupBindings() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isSubmenuPath(pathname)) return;

    const liveChats = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href="/contact"]')).filter((anchor) => /live\s+chat/i.test(anchor.textContent || ""));
    liveChats.forEach((anchor) => { anchor.href = "#"; });

    function openPopup(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href="/contact"]') : null;
      if (!target) return;

      event.preventDefault();
      const label = (target.textContent || "").replace(/\s+/g, " ").trim();
      const discount = /\bget\s+started\b|\bstart\s+today\b|\bbegin\b/i.test(label);
      window.dispatchEvent(new Event(discount ? "storybound:open-offer" : "storybound:open-quote"));
    }

    // Capture runs before Next.js processes its <Link> navigation handler.
    document.addEventListener("click", openPopup, true);
    return () => {
      document.removeEventListener("click", openPopup, true);
      liveChats.forEach((anchor) => { anchor.href = "/contact"; });
    };
  }, [pathname]);

  return null;
}
