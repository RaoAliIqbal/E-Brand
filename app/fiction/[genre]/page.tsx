import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { RomanceOverview } from "@/components/romance-overview";
import { FantasyOverview } from "@/components/fantasy-overview";
import { MysteryThrillerCrimePage } from "@/components/mystery-thriller-crime-page";
import { HistoricalFictionPage } from "@/components/historical-fiction-page";
import { YoungAdultPage } from "@/components/young-adult-page";
import { NewAdultPage } from "@/components/new-adult-page";
import { LiteraryFictionPage } from "@/components/literary-fiction-page";
import { GraphicNovelsPage } from "@/components/graphic-novels-page";
import { WomensFictionPage } from "@/components/womens-fiction-page";
import { ActionAdventurePage } from "@/components/action-adventure-page";
import { AnthologyPage } from "@/components/anthology-page";
import { ArtFictionPage } from "@/components/art-fiction-page";
import { ChildrenPage } from "@/components/children-page";
import { DramaPage } from "@/components/drama-page";
import { FairyTalePage } from "@/components/fairy-tale-page";
import { HorrorPage } from "@/components/horror-page";
import { SatirePage } from "@/components/satire-page";
import { TravelFictionPage } from "@/components/travel-fiction-page";
import { WesternPage } from "@/components/western-page";
import { FictionPageClosing } from "@/components/fiction-page-closing";
import { fictionGenres, getFictionGenre } from "@/lib/fiction-genres";

export function generateStaticParams() {
  return fictionGenres.map(({ slug }) => ({ genre: slug }));
}

export async function generateMetadata({ params }: PageProps<"/fiction/[genre]">): Promise<Metadata> {
  const { genre: slug } = await params;
  const genre = getFictionGenre(slug);
  if (!genre) return {};
  const title = `${genre.label} Ghostwriting Services`;
  const description = `Professional ${genre.label.toLowerCase()} ghostwriting focused on ${genre.focus}.`;
  return {
    title,
    description,
    alternates: { canonical: `/fiction/${genre.slug}` },
    openGraph: { title, description, url: `/fiction/${genre.slug}`, type: "website" },
  };
}

export default async function FictionGenrePage({ params }: PageProps<"/fiction/[genre]">) {
  const { genre: slug } = await params;
  const genre = getFictionGenre(slug);
  if (!genre) notFound();
  let content: ReactNode;
  if (slug === "mystery-thriller-crime") content = <MysteryThrillerCrimePage />;
  else if (slug === "historical-fiction") content = <HistoricalFictionPage />;
  else if (slug === "young-adult") content = <YoungAdultPage />;
  else if (slug === "new-adult") content = <NewAdultPage />;
  else if (slug === "literary-fiction") content = <LiteraryFictionPage />;
  else if (slug === "graphic-novels") content = <GraphicNovelsPage />;
  else if (slug === "womens-fiction") content = <WomensFictionPage />;
  else if (slug === "action-adventure") content = <ActionAdventurePage />;
  else if (slug === "anthology") content = <AnthologyPage />;
  else if (slug === "art-fiction") content = <ArtFictionPage />;
  else if (slug === "children") content = <ChildrenPage />;
  else if (slug === "drama") content = <DramaPage />;
  else if (slug === "fairy-tale") content = <FairyTalePage />;
  else if (slug === "horror") content = <HorrorPage />;
  else if (slug === "satire") content = <SatirePage />;
  else if (slug === "travel-fiction") content = <TravelFictionPage />;
  else if (slug === "western") content = <WesternPage />;
  else content = (
    <main>
      <SiteHeader />
      <section className={`innerHero${slug === "fantasy" ? " fantasyMainHero" : slug === "romance" ? " romanceHero" : ""}`}>
        {slug === "fantasy" ? <Image className="fantasyMainHeroImage" src="/images/fantasy-hero.png" alt="" fill sizes="100vw" preload /> : null}
        <div>
          <p className="eyebrow">Fiction · {genre.label}</p>
          <h1>{slug === "fantasy" ? <>Imagine beyond the ordinary.<br />Write something extraordinary.</> : slug === "romance" ? "Write a love story readers fall for." : <>Write a remarkable {genre.label.toLowerCase()} story readers remember.</>}</h1>
          <p>{slug === "fantasy" ? "Bring your world to life with Storybound House. We turn intricate lore, powerful magic, and unforgettable characters into a fantasy novel shaped around your imagination." : slug === "romance" ? "Bring your love story to life with romance ghostwriters who understand chemistry, emotional tension, and unforgettable characters. From the first spark to a satisfying ending, we shape your ideas into a novel that stays true to your voice and vision." : <>Collaborate with a genre-aware fiction specialist who understands {genre.focus}. We help develop the concept, characters, structure, and prose while preserving the voice and vision that make the story yours.</>}</p>
          <Link className="button" href="/contact">Discuss your story <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">
        {["Genre-aware storytelling", "Confidential collaboration", "Complete manuscript ownership"].map(item => <p key={item}><Check size={16} />{item}</p>)}
      </section>
      {slug === "romance" ? <RomanceOverview /> : null}
      {slug === "fantasy" ? <FantasyOverview /> : null}
    </main>
  );

  return <>{content}<FictionPageClosing /></>;
}
