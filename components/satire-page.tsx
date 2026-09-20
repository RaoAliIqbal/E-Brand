import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, Scale } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["A precise object of criticism", "The story knows which belief, institution, behavior, or contradiction it is examining, allowing every comic choice to sharpen the same argument."],
  ["Humor with narrative purpose", "Irony, exaggeration, parody, absurdity, and understatement entertain while exposing a gap between what people claim and what they do."],
  ["Characters beyond punchlines", "Even ridiculous people possess recognizable desires and self-justifications, giving the comedy emotional truth and preventing the novel from becoming a lecture."],
];

const forms = [
  ["Social and political satire", "Institutions, status, ideology, bureaucracy, media, and public performance are dramatized through consequence rather than direct argument alone."],
  ["Comic and absurdist fiction", "An impossible rule or escalating absurdity reveals the logic already hidden inside ordinary life."],
  ["Parody and genre satire", "A familiar form is imitated with precision, then bent to expose its conventions, assumptions, and cultural baggage."],
];

const steps = [
  ["Target, thesis, and reader", "We define what the novel challenges, the contradiction beneath it, the audience, the desired comic temperature, and the ideas the story should leave unresolved."],
  ["Comic system and plot design", "The outline maps rules, status reversals, misunderstandings, escalation, recurring motifs, set pieces, and consequences that make the argument through action."],
  ["Drafting with tonal discipline", "The writer calibrates voice, timing, dialogue, irony, and character sympathy. Milestone reviews ensure jokes and plot continue to serve the same satirical purpose."],
  ["Clarity, sensitivity, and durability review", "Editing tests who or what the joke targets, whether context is legible, where humor punches down, and which topical references may date the manuscript too quickly."],
];

const faqs = [
  ["What subjects can a satire novel address?", "Satire can examine politics, business, technology, education, media, class, culture, consumerism, relationships, publishing, or almost any system where stated values conflict with actual behavior."],
  ["How do you keep satire from becoming preachy?", "The argument emerges through character, consequence, irony, and plot. Readers are invited to recognize the contradiction rather than being told what conclusion they must reach."],
  ["Can satire be funny without offending the wrong audience?", "No comedy is universally risk-free, but careful target definition, point of view, context, sensitivity review, and attention to power can make the intended criticism much clearer."],
  ["Can you write satire that blends with fantasy, science fiction, or mystery?", "Yes. Speculative and genre frameworks can create useful distance from real institutions while giving the satirical system concrete rules and dramatic consequences."],
  ["How long does it take to complete a satirical novel?", "Most full-length projects take 4 to 7 months, depending on word count, research, structural complexity, topical sensitivity, milestone feedback, and editorial scope."],
  ["Will I retain creative control and ownership of the finished manuscript?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function SatirePage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero satireHero" aria-labelledby="satire-title">
        <Image className="historicalRomanceImage" src="/images/satire-hero.jpg" alt="A satirical writer reading in a surreal library overlooking an impossible city" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Satire fiction ghostwriting</p><h1 id="satire-title">Satire Ghostwriting Services by Professional Satirical Writers</h1><p>Turn contradiction, hypocrisy, and absurdity into a sharp, entertaining novel that makes readers laugh—and then reconsider what they accepted as normal.</p><Link className="button" href="/contact">Develop your satire <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Purposeful comic voice", "Clear satirical target", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent satireContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="satire-intro-title"><div><p className="eyebrow">Humor with an argument inside it</p><h2 id="satire-intro-title">Satire that cuts cleanly<br /><em>and stays entertaining.</em></h2><p className="romanceLead">Satire makes an observation impossible to ignore by carrying it to a logical, comic, or horrifying extreme.</p><p>Its power comes from selection. The writer must know what is being criticized, whose perspective shapes the joke, and how character and consequence will make the argument without flattening the story into a speech.</p><p>Our specialists combine irreverence with structural control, building a novel that remains funny, readable, and precise about the system it exposes.</p><Link className="fictionTextLink" href="/contact">Tell us what deserves a closer look <ArrowRight size={17} /></Link></div><aside className="romanceCraft satireCraft"><Scale size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The satirist’s discipline</p><h3>Sharp point.<br />Human story.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="satireForms romanceWrap" aria-labelledby="satire-forms-title"><div><p className="eyebrow">Choose the comic instrument</p><h2 id="satire-forms-title">Different forms for<br /><em>different absurdities.</em></h2><p>The right form determines how close the story sits to reality and how directly the reader feels its criticism.</p></div><div className="satireFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties satireProcess" aria-labelledby="satire-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From observation to comic consequence</p><h2 id="satire-process-title">A rigorous process<br />behind the apparent chaos.</h2><p>Target, character, plot, tone, and context remain aligned so the humor lands where it is intended.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap satireInvestment" aria-labelledby="satire-value-title"><div><p className="eyebrow">Bold without becoming careless</p><h2 id="satire-value-title">A comic voice with<br /><em>control, context, and purpose.</em></h2><p>Your proposal defines research, audience, topical scope, concept development, structural design, milestone drafting, revisions, and editorial or sensitivity review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we test throughout</h3><ul>{["The intended target of every major joke", "A consistent narrative and comic voice", "Escalation that affects the plot", "Character humanity beyond the premise", "Topical references that will age well"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="satire-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="satire-faq-title">The subject can be risky.<br /><em>The process stays thoughtful.</em></h2><p>Answers about topics, tone, offense, genre hybrids, schedules, creative control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing satireClosing"><p className="eyebrow">The truth sometimes arrives laughing</p><h2>Write the joke readers will still be thinking about tomorrow.</h2><p>Bring the contradiction, institution, behavior, or impossible rule your novel needs to expose.</p><Link className="button" href="/contact">Begin your satirical novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
