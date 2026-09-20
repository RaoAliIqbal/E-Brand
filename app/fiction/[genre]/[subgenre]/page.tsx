import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { notFound } from "next/navigation";
import { SubservicePage } from "@/components/subservice-page";
import { HistoricalRomanceOverview } from "@/components/historical-romance-overview";
import { ContemporaryRomanceOverview } from "@/components/contemporary-romance-overview";
import { ParanormalRomanceOverview } from "@/components/paranormal-romance-overview";
import { EpicFantasyPage } from "@/components/epic-fantasy-page";
import { UrbanFantasyPage } from "@/components/urban-fantasy-page";
import { DarkFantasyPage } from "@/components/dark-fantasy-page";
import { MagicalRealismPage } from "@/components/magical-realism-page";
import { FictionPageClosing } from "@/components/fiction-page-closing";
import { fantasySubgenres, findBySlug, romanceSubgenres } from "@/lib/service-submenus";

const allSubgenres = [...romanceSubgenres, ...fantasySubgenres];

export function generateStaticParams() {
  return [
    ...romanceSubgenres.map(item => ({ genre: "romance", subgenre: item.slug })),
    ...fantasySubgenres.map(item => ({ genre: "fantasy", subgenre: item.slug })),
  ];
}

export async function generateMetadata({ params }: PageProps<"/fiction/[genre]/[subgenre]">): Promise<Metadata> {
  const { genre, subgenre } = await params;
  const allowed = genre === "romance" ? romanceSubgenres : genre === "fantasy" ? fantasySubgenres : [];
  const item = findBySlug(allowed, subgenre);
  if (!item) return {};
  const title = `${item.label} Ghostwriting Services`;
  const description = `Professional ${item.label.toLowerCase()} writing and ghostwriting support from Storybound House.`;
  return { title, description, alternates: { canonical: `/fiction/${genre}/${subgenre}` } };
}

export default async function FictionSubgenrePage({ params }: PageProps<"/fiction/[genre]/[subgenre]">) {
  const { genre, subgenre } = await params;
  const allowed = genre === "romance" ? romanceSubgenres : genre === "fantasy" ? fantasySubgenres : [];
  const item = findBySlug(allowed, subgenre) ?? findBySlug(allSubgenres, subgenre);
  if (!item || !findBySlug(allowed, subgenre)) notFound();
  let content: ReactNode;
  if (genre === "fantasy" && subgenre === "epic-high-fantasy") content = <EpicFantasyPage />;
  else if (genre === "fantasy" && subgenre === "urban-fantasy") content = <UrbanFantasyPage />;
  else if (genre === "fantasy" && subgenre === "dark-fantasy") content = <DarkFantasyPage />;
  else if (genre === "fantasy" && subgenre === "magical-realism") content = <MagicalRealismPage />;
  else if (genre === "romance") {
    const contemporary = subgenre === "contemporary-romance";
    const paranormal = subgenre === "paranormal-romance";
    content = (
      <main>
        <SiteHeader />
        <section className="innerHero historicalRomanceHero" aria-labelledby="romance-subgenre-title">
          <Image className="historicalRomanceImage" src={paranormal ? "/images/paranormal-romance-hero.png" : contemporary ? "/images/contemporary-romance-hero.png" : "/images/historical-romance-hero.png"} alt="" fill sizes="100vw" preload />
          <div className="historicalRomanceCopy">
            <p className="eyebrow">{paranormal ? "Paranormal" : contemporary ? "Contemporary" : "Historical"} romance ghostwriting</p>
            <h1 id="romance-subgenre-title">{paranormal ? <>Love beyond the ordinary.<br />Magic on every page.</> : contemporary ? <>Modern love.<br />Unforgettable chemistry.</> : <>A love that defies its time.<br />A story that stays with you.</>}</h1>
            <p>{paranormal ? "Bring your supernatural love story to life with Storybound House. We weave immersive worlds, extraordinary characters, and undeniable chemistry into a paranormal romance shaped around your imagination." : contemporary ? "Turn everyday encounters into an extraordinary love story with Storybound House. We bring authentic voices, witty dialogue, and heartfelt connection to a contemporary romance shaped around your vision." : "Bring the passion of the past to life with Storybound House. We weave richly imagined settings, compelling characters, and heartfelt chemistry into a historical romance shaped around your vision."}</p>
            <Link className="button" href="/contact">Bring your story to life <ArrowRight size={18} /></Link>
          </div>
        </section>
        <section className="pagePromise">
          {[paranormal ? "Immersive supernatural worlds" : contemporary ? "Authentic modern storytelling" : "Thoughtful historical research", "Confidential collaboration", "Your voice and vision"].map(item => <p key={item}><Check size={16} />{item}</p>)}
        </section>
        {paranormal ? <ParanormalRomanceOverview /> : contemporary ? <ContemporaryRomanceOverview /> : <HistoricalRomanceOverview />}
      </main>
    );
  } else content = <SubservicePage label={item.label} category={genre === "romance" ? "Romance fiction" : "Fantasy fiction"} />;

  return <>{content}<FictionPageClosing /></>;
}
