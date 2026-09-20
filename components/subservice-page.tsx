import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export function SubservicePage({ label, category, children, heroImage, heroTitle }: { label: string; category: string; children?: ReactNode; heroImage?: string; heroTitle?: string }) {
  return (
    <main>
      <SiteHeader />
      <section className={`innerHero serviceSubmenuHero${heroImage ? " serviceSubmenuHeroWithImage" : ""}`}>
        {heroImage ? <Image className="serviceSubmenuHeroImage" src={heroImage} alt="" fill sizes="100vw" preload /> : null}
        <div>
          <p className="eyebrow">{category} · {label}</p>
          <h1>{heroTitle ?? `Professional ${label.toLowerCase()} shaped around your goals.`}</h1>
          <p>Work with a specialist who understands the conventions, audience expectations, and creative demands of {label.toLowerCase()}. Storybound House brings research, structure, writing, and careful editorial guidance together in one confidential process.</p>
          <Link className="button" href="/contact">Request a consultation <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">
        {["Specialist-led support", "Confidential collaboration", "Complete ownership"].map(item => <p key={item}><Check size={16} />{item}</p>)}
      </section>
      {children}
    </main>
  );
}
