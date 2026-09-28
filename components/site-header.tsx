"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { fictionGenres } from "@/lib/fiction-genres";
import { fantasySubgenres, ghostwritingSpecialties, nonFictionTopics, romanceSubgenres } from "@/lib/service-submenus";

export const navigation = [
  { label: "Fiction", href: "/fiction" },
  { label: "Non-Fiction", href: "/non-fiction" },
  { label: "Ghostwriting", href: "/ghostwriting" },
  { label: "Editing", href: "/editing" },
  { label: "Publishing", href: "/publishing" },
  { label: "Bookcover", href: "/bookcover" },
  { label: "Marketing", href: "/marketing" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 70);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <p><span>Complimentary manuscript consultation</span><i />Confidentiality guaranteed</p>
      </div>
      <header className={`siteHeader${scrolled ? " siteHeaderScrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="Storybound House home">
          <Image
            className="approvedLogo"
            src="/images/storybound-house-approved-logo.png"
            alt="Storybound House — Your story. Your voice. Beautifully written."
            width={1902}
            height={378}
            unoptimized
          />
        </Link>

        <nav aria-label="Main navigation">
          {navigation.map((item) => item.href === "/fiction" ? (
            <div className="navDropdown" key={item.href}>
              <Link className="navDropdownTrigger" href={item.href}>{item.label}<ChevronDown size={13} /></Link>
              <div className="fictionMenu" aria-label="Fiction genres">
                {fictionGenres.map(genre => {
                  const children = genre.slug === "romance" ? romanceSubgenres : genre.slug === "fantasy" ? fantasySubgenres : null;
                  return (
                    <div className="menuItemWithFlyout" key={genre.slug}>
                      <Link href={`/fiction/${genre.slug}`}>{genre.label}{children ? <ChevronRight size={13} /> : null}</Link>
                      {children ? <div className="genreFlyout">{children.map(child => <Link href={`/fiction/${genre.slug}/${child.slug}`} key={child.slug}>{child.label}</Link>)}</div> : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : item.href === "/non-fiction" ? (
            <div className="navDropdown" key={item.href}>
              <Link className="navDropdownTrigger" href={item.href}>{item.label}<ChevronDown size={13} /></Link>
              <div className="fictionMenu serviceMegaMenu" aria-label="Non-fiction topics">
                {nonFictionTopics.map(topic => <Link href={`/non-fiction/${topic.slug}`} key={topic.slug}>{topic.label}</Link>)}
              </div>
            </div>
          ) : item.href === "/ghostwriting" ? (
            <div className="navDropdown" key={item.href}>
              <Link className="navDropdownTrigger" href={item.href}>{item.label}<ChevronDown size={13} /></Link>
              <div className="fictionMenu serviceMegaMenu" aria-label="Ghostwriting specialties">
                {ghostwritingSpecialties.map(specialty => <Link href={`/ghostwriting/${specialty.slug}`} key={specialty.slug}>{specialty.label}</Link>)}
              </div>
            </div>
          ) : <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>

        <button
          className="menuButton"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobileNavigation${menuOpen ? " isOpen" : ""}`}
          aria-label="Mobile navigation"
          data-lenis-prevent=""
          onWheel={event => event.stopPropagation()}
          onTouchMove={event => event.stopPropagation()}
        >
          <details>
            <summary>Fiction <ChevronDown size={16} aria-hidden="true" /></summary>
            <div className="mobileNavSubmenu">
              <Link href="/fiction" onClick={closeMenu}>All Fiction</Link>
              {fictionGenres.map(genre => {
                const children = genre.slug === "romance" ? romanceSubgenres : genre.slug === "fantasy" ? fantasySubgenres : null;
                return children ? (
                  <details key={genre.slug}>
                    <summary>{genre.label}<ChevronDown size={15} aria-hidden="true" /></summary>
                    <div className="mobileNavSubmenu mobileNavNested">
                      <Link href={`/fiction/${genre.slug}`} onClick={closeMenu}>Explore {genre.label}</Link>
                      {children.map(child => <Link href={`/fiction/${genre.slug}/${child.slug}`} key={child.slug} onClick={closeMenu}>{child.label}</Link>)}
                    </div>
                  </details>
                ) : <Link href={`/fiction/${genre.slug}`} key={genre.slug} onClick={closeMenu}>{genre.label}</Link>;
              })}
            </div>
          </details>
          <details>
            <summary>Non-Fiction <ChevronDown size={16} aria-hidden="true" /></summary>
            <div className="mobileNavSubmenu">
              <Link href="/non-fiction" onClick={closeMenu}>All Non-Fiction</Link>
              {nonFictionTopics.map(topic => <Link href={`/non-fiction/${topic.slug}`} key={topic.slug} onClick={closeMenu}>{topic.label}</Link>)}
            </div>
          </details>
          <details>
            <summary>Ghostwriting <ChevronDown size={16} aria-hidden="true" /></summary>
            <div className="mobileNavSubmenu">
              <Link href="/ghostwriting" onClick={closeMenu}>All Ghostwriting</Link>
              {ghostwritingSpecialties.map(specialty => <Link href={`/ghostwriting/${specialty.slug}`} key={specialty.slug} onClick={closeMenu}>{specialty.label}</Link>)}
            </div>
          </details>
          {navigation.slice(3).map(item => <Link href={item.href} key={item.href} onClick={closeMenu}>{item.label}</Link>)}
        </nav>
      </header>
    </>
  );
}
