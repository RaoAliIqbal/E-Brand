import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Palette, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["Observation into narrative", "Visual details, materials, gesture, light, and space become precise story elements rather than decorative description."],
  ["Art as human experience", "The work of making, viewing, collecting, protecting, or losing art reveals identity, desire, power, memory, and belief."],
  ["Research with dramatic purpose", "Historical and technical knowledge creates credibility while remaining subordinate to character, conflict, and emotional movement."],
];

const forms = [
  ["The artist’s novel", "A creator’s process, ambition, obsession, and private cost become the engine of a psychologically rich character story."],
  ["Art mystery and recovery", "Provenance, forgery, theft, conservation, and contested ownership support suspense while raising questions about value and truth."],
  ["Historical art fiction", "A studio, movement, patron, museum, or masterpiece becomes an entry into a specific era and the people shaped by it."],
];

const steps = [
  ["Artistic premise and research brief", "We define the central artwork, practice, period, institution, or mystery and identify the expertise needed to make the story credible."],
  ["Character, theme, and visual motif map", "The outline connects the protagonist’s inner journey to recurring colors, objects, spaces, techniques, and questions about art."],
  ["Drafting with sensory precision", "The writer balances evocative prose with narrative momentum, translating visual experience into language without turning the novel into a lecture."],
  ["Technical and literary review", "Specialist checks address terminology, chronology, provenance, process, and institutional detail while editors refine voice, pacing, and theme."],
];

const faqs = [
  ["What kinds of art fiction can your writers develop?", "We support novels about artists, collectors, museums, restorers, galleries, art schools, historical movements, forgery, theft, restitution, provenance, and fictional works of art."],
  ["Can you research a specific artist, movement, medium, or museum setting?", "Yes. The project scope can include targeted research into period context, materials, studio practice, conservation, markets, institutions, and the ethical issues surrounding ownership and display."],
  ["How do you explain art without slowing the story?", "Art knowledge enters through character goals, conflict, sensory observation, and discovery. Technical detail is selected for dramatic relevance so the reader learns while the narrative continues to move."],
  ["Can the novel blend art fiction with mystery, romance, or historical fiction?", "Yes. Art fiction often works best as a hybrid. We match the project with a writer who can balance the art-world premise with the conventions and reader expectations of its companion genre."],
  ["How long does an art fiction manuscript take to complete?", "Most full-length projects take 5 to 8 months, depending on research depth, historical scope, structural complexity, milestone feedback, revisions, and specialist review."],
  ["Will I retain creative control and ownership of the final novel?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms set out in your contract."],
];

export function ArtFictionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero artFictionHero" aria-labelledby="art-fiction-title">
        <Image className="historicalRomanceImage" src="/images/art-fiction-hero.jpg" alt="An art researcher studying historic paintings in a modern laboratory" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Art fiction ghostwriting</p><h1 id="art-fiction-title">Best Art Writing Services by Professional Writers</h1><p>Transform visual culture, creative obsession, and the mysteries behind great works into a vivid, emotionally resonant novel.</p><Link className="button" href="/contact">Develop your art novel <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Art-informed storytelling", "Research-backed detail", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent artFictionContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="art-intro-title"><div><p className="eyebrow">Writing through the artist’s eye</p><h2 id="art-intro-title">Art fiction that turns<br /><em>observation into meaning.</em></h2><p className="romanceLead">Art offers a way to grasp the world—and fiction reveals the human lives behind what is created, preserved, coveted, or destroyed.</p><p>Your novel may explore an artist’s private struggle, a disputed masterpiece, a museum’s hidden history, or the recovery of work scattered across borders. Each premise needs careful observation, technical credibility, and a compelling human conflict.</p><p>Our writers translate visual experience into precise language while keeping character and narrative movement at the center of every page.</p><Link className="fictionTextLink" href="/contact">Tell us about the work at its center <ArrowRight size={17} /></Link></div><aside className="romanceCraft artFictionCraft"><Palette size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The craft behind the canvas</p><h3>Image, idea,<br />and human consequence.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="artFictionForms romanceWrap" aria-labelledby="art-forms-title"><div><p className="eyebrow">Stories within the art world</p><h2 id="art-forms-title">A canvas for<br /><em>many kinds of fiction.</em></h2><p>Art can provide the protagonist, the mystery, the historical portal, or the object around which an entire cast revolves.</p></div><div className="artFictionFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties artFictionProcess" aria-labelledby="art-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From visual idea to finished manuscript</p><h2 id="art-process-title">A rigorous process for<br />an evocative art novel.</h2><p>Research and literary craft develop together so the finished story feels informed, immersive, and emotionally alive.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap artFictionInvestment" aria-labelledby="art-value-title"><div><p className="eyebrow">Precision without losing wonder</p><h2 id="art-value-title">The expertise to make<br /><em>the art world believable.</em></h2><p>Your proposal can include primary and secondary research, period detail, specialist consultation, narrative design, milestone drafting, revisions, and technical review. Every deliverable is defined before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>Details we can investigate</h3><ul>{["Materials, methods, and studio practice", "Provenance, restoration, and authentication", "Museums, galleries, markets, and collectors", "Historical movements and cultural context", "Ownership, restitution, and artistic ethics"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="art-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="art-faq-title">Art invites questions.<br /><em>Your process gets answers.</em></h2><p>Answers about subject matter, research, exposition, hybrid genres, schedules, creative control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing artFictionClosing"><p className="eyebrow">Every work carries a hidden life</p><h2>Write the story waiting behind the image.</h2><p>Bring the artist, object, mystery, or moment in art history that refuses to let you go.</p><Link className="button" href="/contact">Begin your art novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
