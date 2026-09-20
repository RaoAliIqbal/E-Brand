import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const craft = [
  ["Stylistic mastery and prose excellence", "Sophisticated, evocative language gives every sentence rhythm and purpose while imagery and subtext deepen the experience without heavy exposition."],
  ["Character interiority and psychological depth", "The story traces subtle shifts in consciousness, belief, and self-understanding so emotional conflict becomes as consequential as any external event."],
  ["Structural innovation and thematic cohesion", "Nonlinear time, multiple narrators, fragmented perspectives, and other experimental forms remain coherent because every choice serves the central theme."],
];

const details = [
  ["Lyrical tone", "Rhythm, sound, and figurative language create an aesthetic experience that remains precise and controlled."],
  ["Subtext and ambiguity", "Meaning emerges through implication, contrast, and silence, giving the reader room to participate."],
  ["Narrative distance", "The prose shifts deliberately between intimate interiority and wider observation to shape emotional impact."],
];

const steps = [
  ["Conceptual dialogue and thematic blueprint", "We begin with an intensive conversation about the intellectual and emotional core of the idea, defining its central questions, primary motif, and intended transformation for the reader."],
  ["Narrative design and structural mapping", "A bespoke design document maps viewpoint, chronology, shifts in voice, symbolic moments, and the overall artistic goal before drafting begins."],
  ["Drafting: crafting evocative prose", "A specialist develops sentence-level quality, sensory detail, emotional precision, and philosophical depth. Milestone deliveries let you review voice and artistic choices throughout."],
  ["Literary review and stylistic editing", "Senior editors assess thematic consistency, metaphor, pacing, rhythm, character interiority, and the demands of the literary market before final polish."],
];

const packages = [
  ["Best professional", "A premium engagement for major literary ambitions, rigorous stylistic review, intricate structure, and manuscripts intended for agents or traditional publishers."],
  ["Focused professional", "A carefully defined scope for a clear concept, offering strong craft and an efficient process without compromising the artistic standard of the finished work."],
];

const faqs = [
  ["What is the estimated cost for your literary fiction ghostwriting services?", "A full-length literary novel generally ranges from $40,000 to over $85,000 USD. The final price depends on narrative complexity, research, structure, stylistic demands, manuscript length, and the depth of editorial review."],
  ["What is the typical timeline to hire literary novel ghostwriter services and complete the book?", "Most literary fiction projects take 6 to 10 months. This allows time for conceptual development, structural design, patient drafting, milestone feedback, and a rigorous literary review."],
  ["How do you ensure the narrative remains literary and does not drift into commercial genre fiction?", "The thematic blueprint and narrative design keep character interiority, language, subtext, and philosophical inquiry at the center. A final literary review tests every major choice against those artistic goals."],
  ["Are your literary book ghostwriting packages suitable for experimental structures?", "Yes. Nonlinear, fragmented, braided, cyclical, and multiple-viewpoint forms can be mapped in detail before drafting so innovation remains readable, purposeful, and emotionally coherent."],
  ["What are the qualifications of your professional literary fiction writers?", "Writers are selected for advanced prose craft, close reading, conceptual depth, and long-form narrative skill. Portfolios demonstrate control of voice, form, characterization, and thematic development."],
  ["Who retains the intellectual property rights and ownership of the final novel?", "You retain final creative approval. Under the agreed work-for-hire terms, the completed manuscript and associated rights transfer to you as defined in the contract."],
  ["Can I request a literary fiction ghostwriter who specializes in a specific sub-genre?", "Yes. We match the project to relevant experience, whether it is historical literary fiction, speculative literary fiction, autofiction, family saga, or another hybrid form."],
];

export function LiteraryFictionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero literaryFictionHero" aria-labelledby="literary-fiction-title">
        <Image className="historicalRomanceImage" src="/images/literary-fiction-hero.jpg" alt="A literary writer working in a warm, book-lined study" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Literary fiction ghostwriting</p>
          <h1 id="literary-fiction-title">Best Literary Fiction Ghostwriting Services: Artistry and Depth</h1>
          <p>Transform the complex themes of the human condition into an indelible novel of intellectual and emotional scope.</p>
          <Link className="button" href="/contact">Discuss your literary novel <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Distinctive prose", "Psychological depth", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent literaryFictionContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="literary-intro-title">
          <div><p className="eyebrow">Elevating narrative to art</p><h2 id="literary-intro-title">Literary fiction ghostwriting<br /><em>where meaning shapes form.</em></h2><p className="romanceLead">Literary fiction explores the human condition through layered language, nuanced character, and ideas that continue after the final page.</p><p>Your concept may begin as an intimate character study, a historical exploration, or an experimental structure. Our specialists find the emotional and intellectual center, then build a manuscript whose prose and form are inseparable from its meaning.</p><p>The result honors your vision while meeting the exacting standards of serious readers, agents, editors, and publishers.</p><Link className="fictionTextLink" href="/contact">Share the idea that stays with you <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft literaryCraft"><BookOpen size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The craft of meaning</p><h3>Language with purpose.<br />Structure with soul.</h3>{craft.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>

        <section className="literaryDetails romanceWrap" aria-labelledby="literary-details-title"><div><p className="eyebrow">Sentence-level intention</p><h2 id="literary-details-title">Prose that reveals<br /><em>more than it explains.</em></h2><p>Voice becomes the method through which character, theme, and emotional truth reach the reader.</p></div><div className="literaryDetailsGrid">{details.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties literaryProcess" aria-labelledby="literary-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">Our unique methodology</p><h2 id="literary-process-title">Literary book ghostwriting<br />with artistic coherence.</h2><p>A bespoke collaboration protects the theme, voice, and architecture of the novel from first conversation to final review.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap literaryInvestment" aria-labelledby="literary-packages-title"><div><p className="eyebrow">Selecting the right agency</p><h2 id="literary-packages-title">A professional partnership<br /><em>built around the work.</em></h2><p>Literary fiction demands patience, precision, and shared artistic standards. Your proposal defines research, narrative design, drafting milestones, revisions, and the level of editorial review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="literaryPackageGrid">{packages.map(([title, text]) => <article key={title}><p className="eyebrow">{title}</p><h3>{title === "Best professional" ? "For major literary ambition" : "For a clearly defined vision"}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="literary-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="literary-faq-title">Serious craft deserves<br /><em>a clear process.</em></h2><p>Answers about cost, timing, experimental structure, writer qualifications, specialist matching, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing literaryClosing"><p className="eyebrow">Artistry, clarity, and depth</p><h2>Write the novel only you could imagine.</h2><p>Bring us the question, character, or image that has become impossible to forget.</p><Link className="button" href="/contact">Begin your literary novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
