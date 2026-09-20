import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubservicePage } from "@/components/subservice-page";
import { ServicePageClosing } from "@/components/service-page-closing";
import { GhostwritingSpecialtyContent } from "@/components/ghostwriting-specialty-content";
import { findBySlug, ghostwritingSpecialties } from "@/lib/service-submenus";

const specialtyHeroConfig: Record<string, { image: string; title: string }> = {
  "medical-writing": { image: "/images/ghostwriting/medical-writing-hero.jpg", title: "Medical writing built for critical healthcare communication" },
  "business-proposals": { image: "/images/ghostwriting/business-proposals-hero.jpg", title: "Business proposal writing designed to win serious consideration" },
  "business-book-writing": { image: "/images/ghostwriting/business-books/bookstore-wide.png", title: "Business book writing that turns experience into lasting authority" },
  "technical-writing": { image: "/images/ghostwriting/technical-writing-hero.jpg", title: "Technical writing that makes complex systems clear and usable" },
  "thought-leadership-writing": { image: "/images/ghostwriting/thought-leadership-writing-hero.jpg", title: "Thought leadership writing that turns expertise into influence" },
  "seo-blog-writing": { image: "/images/ghostwriting/seo-blog-writing-hero.jpg", title: "SEO blog writing that earns attention, trust, and organic visibility" },
  "speech-writing": { image: "/images/ghostwriting/speech-writing-hero.jpg", title: "Professional speechwriting that gives your ideas a memorable voice" },
  songwriting: { image: "/images/ghostwriting/songwriting/hero.jpg", title: "Professional songwriting that turns your story into lyrics listeners remember" },
  "screenplay-ghostwriting": { image: "/images/ghostwriting/screenplay-ghostwriting-hero.jpg", title: "Screenplay writing that turns concepts into production-ready scripts" },
  "social-media-ghostwriting": { image: "/images/ghostwriting/social-media-ghostwriting-hero.jpg", title: "Social media writing that builds consistent authority and engagement" },
  "whitepaper-writing": { image: "/images/ghostwriting/whitepaper-writing-hero.jpg", title: "White paper writing that turns evidence into decision-making value" },
  "ebook-writing": { image: "/images/ghostwriting/ebook-writing-hero.jpg", title: "Ebook writing that transforms expertise into a valuable digital asset" },
  biography: { image: "/images/ghostwriting/biography-hero.jpg", title: "Biography writing that preserves a life with depth and integrity" },
  "informative-writing": { image: "/images/ghostwriting/informative-writing-hero.jpg", title: "Informative writing that gives complex knowledge clarity and purpose" },
  autobiography: { image: "/images/ghostwriting/autobiography-hero.jpg", title: "Autobiography writing for the complete story of your life" },
  "celebrity-biographies-autobiographies": { image: "/images/ghostwriting/celebrity-life-writing/hero.png", title: "Celebrity biographies and autobiographies shaped by research, discretion, and voice" },
  memoir: { image: "/images/ghostwriting/memoir-hero.jpg", title: "Memoir writing that gives a defining experience lasting meaning" },
};

export function generateStaticParams() { return ghostwritingSpecialties.map(item => ({ specialty: item.slug })); }

export async function generateMetadata({ params }: PageProps<"/ghostwriting/[specialty]">): Promise<Metadata> {
  const { specialty } = await params;
  const item = findBySlug(ghostwritingSpecialties, specialty);
  if (!item) return {};
  const title = `${item.label} Services`;
  const description = `Professional ${item.label.toLowerCase()} services from the Storybound House writing team.`;
  return { title, description, alternates: { canonical: `/ghostwriting/${specialty}` } };
}

export default async function GhostwritingSpecialtyPage({ params }: PageProps<"/ghostwriting/[specialty]">) {
  const { specialty } = await params;
  const item = findBySlug(ghostwritingSpecialties, specialty);
  if (!item) notFound();
  const hero = specialtyHeroConfig[item.slug];
  return (
    <>
      <SubservicePage label={item.label} category="Ghostwriting" heroImage={hero?.image} heroTitle={hero?.title}>
        <GhostwritingSpecialtyContent specialty={item.slug} />
      </SubservicePage>
      <ServicePageClosing />
    </>
  );
}
