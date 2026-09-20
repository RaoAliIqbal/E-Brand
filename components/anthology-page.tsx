import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookCopy, Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const principles = [
  ["Distinct stories, shared purpose", "Every piece earns its independence while contributing a new angle, mood, voice, or consequence to the collection’s central idea."],
  ["A deliberate reading journey", "Story order, length, intensity, and contrast shape the reader’s experience across the entire book rather than leaving the sequence to chance."],
  ["Consistency without sameness", "Editorial standards protect tone and quality while allowing each narrator, setting, character, or contributor to retain a recognizable identity."],
];

const forms = [
  ["Single-author collection", "Original short stories can range across characters and settings while remaining connected by theme, place, style, or emotional question."],
  ["Multi-author compilation", "Contributor briefs, word counts, editorial standards, and sequencing bring many voices into one coherent publication."],
  ["Linked or mosaic anthology", "Recurring people, locations, objects, or events allow separate stories to accumulate into a larger narrative experience."],
];

const steps = [
  ["Collection concept and audience", "We define the central subject, reader, tone, length, number of pieces, contributor model, and the promise that holds the book together."],
  ["Story architecture and commissioning", "A collection map assigns purpose, viewpoint, genre, length, and emotional function to each piece while identifying gaps or repetition."],
  ["Drafting and developmental editing", "Stories are written or revised in milestones. Each receives individual attention to character, structure, voice, imagery, and ending."],
  ["Sequencing and collection-level polish", "The final review balances order, variation, recurring themes, opening impact, closing resonance, transitions, and stylistic consistency."],
];

const faqs = [
  ["What kinds of anthology projects can your writers support?", "We work on single-author short-story collections, themed multi-author compilations, linked-story cycles, poetry and prose hybrids, speculative collections, and branded or commemorative anthologies."],
  ["Can you help if I only have a theme and no individual story ideas?", "Yes. We can turn a broad theme into a collection concept, story map, contributor brief, tonal guide, and a balanced list of individual premises before drafting begins."],
  ["Can different stories use different genres, settings, or narrators?", "Yes. Variety often gives an anthology its energy. The collection remains coherent through its central question, editorial standards, sequencing, and carefully managed contrasts."],
  ["Do you edit stories written by multiple contributors?", "Yes. We can provide collection-level developmental editing, individual story editing, contributor guidance, consistency review, and final sequencing while respecting each author’s voice."],
  ["How long does it take to create a complete anthology?", "A typical collection takes 4 to 8 months, depending on the number and length of pieces, whether contributors are involved, the amount of original writing required, and the depth of editorial coordination."],
  ["Who owns the final stories and anthology manuscript?", "Ownership and contributor rights are defined before work begins. For agency-written material, the completed work transfers under the agreed contract, while third-party contributor rights follow their individual agreements."],
];

export function AnthologyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero anthologyHero" aria-labelledby="anthology-title">
        <Image className="historicalRomanceImage" src="/images/anthology-hero.jpg" alt="A reader surrounded by story collections overlooking a distant landscape" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Anthology ghostwriting and editing</p><h1 id="anthology-title">Anthology Ghostwriting for Short Story Collections and Compilations</h1><p>Bring distinct voices, worlds, and ideas together in a collection with a clear identity and a memorable emotional arc.</p><Link className="button" href="/contact">Shape your collection <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Cohesive collection design", "Distinctive individual stories", "Clear rights and ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent anthologyContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="anthology-intro-title"><div><p className="eyebrow">Many stories, one lasting experience</p><h2 id="anthology-intro-title">Anthology writing<br /><em>with a unifying vision.</em></h2><p className="romanceLead">An anthology invites readers to encounter many complete worlds while discovering the thread that connects them.</p><p>The stories may feature different characters, periods, narrators, and genres. What makes the book feel whole is a precise editorial concept: the question it explores, the audience it serves, and the rhythm created by the order of its pieces.</p><p>We can write original stories, develop contributor briefs, revise existing work, or manage the collection as a complete editorial project.</p><Link className="fictionTextLink" href="/contact">Tell us what connects the stories <ArrowRight size={17} /></Link></div><aside className="romanceCraft anthologyCraft"><BookCopy size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The craft of collection</p><h3>Variety, cohesion,<br />and resonance.</h3>{principles.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="anthologyForms romanceWrap" aria-labelledby="anthology-forms-title"><div><p className="eyebrow">Choose the architecture</p><h2 id="anthology-forms-title">A form designed for<br /><em>the stories you want to gather.</em></h2><p>The collection model determines how closely the pieces connect and how readers experience their cumulative meaning.</p></div><div className="anthologyFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties anthologyProcess" aria-labelledby="anthology-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From theme to complete collection</p><h2 id="anthology-process-title">An editorial process that sees<br />each story and the whole.</h2><p>Individual craft and collection-level design move forward together from the first concept through final sequencing.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap anthologyInvestment" aria-labelledby="anthology-value-title"><div><p className="eyebrow">Built for one author or many</p><h2 id="anthology-value-title">The editorial structure<br /><em>that keeps every voice clear.</em></h2><p>Your proposal can cover story development, original writing, contributor coordination, individual edits, collection sequencing, and final polish. Scope and ownership terms are defined before production starts.</p><Link className="button" href="/contact">Request a collection plan <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What the collection plan defines</h3><ul>{["Theme, audience, and editorial promise", "Number, form, and length of pieces", "Voice and contributor guidelines", "Story order and emotional progression", "Rights, credits, and final deliverables"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="anthology-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="anthology-faq-title">Every story is different.<br /><em>The collection stays clear.</em></h2><p>Answers about anthology types, concept development, multiple genres, contributors, schedules, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing anthologyClosing"><p className="eyebrow">A book of many doors</p><h2>Gather the stories readers will want to enter.</h2><p>Bring the theme, the first piece, or the voices you want to place in conversation.</p><Link className="button" href="/contact">Begin your anthology <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
