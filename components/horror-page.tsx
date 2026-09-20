import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Ghost, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["Dread before revelation", "Uncertainty, anticipation, and incomplete information make the reader imagine possibilities more disturbing than an immediate explanation."],
  ["Fear attached to character", "The threat becomes personal because it targets a wound, belief, relationship, place, or guilt the protagonist cannot simply leave behind."],
  ["Escalation with consequence", "Each encounter changes the rules, removes safety, or demands a worse choice, carrying the story toward an irreversible confrontation."],
];

const forms = [
  ["Supernatural and gothic horror", "Hauntings, curses, forbidden places, inherited secrets, and decaying institutions turn atmosphere and history into active threats."],
  ["Psychological horror", "Perception, obsession, isolation, and uncertainty trap the reader inside a mind that may be threatened, unreliable, or transforming."],
  ["Cosmic, folk, and creature horror", "Ancient belief, unknowable forces, hostile landscapes, rituals, and monsters challenge what characters think reality allows."],
];

const steps = [
  ["Core fear and horror contract", "We define the emotional fear beneath the premise, the threat, the intended intensity, the reader’s expected experience, and the boundaries of what will be shown."],
  ["Rule, clue, and escalation map", "The outline tracks manifestations, evidence, false safety, failed explanations, discoveries, reversals, and the cost of learning what is really happening."],
  ["Atmospheric milestone drafting", "Sensory precision, controlled pacing, character vulnerability, and strategic concealment create sustained dread. Reviews keep the threat and tone consistent."],
  ["Fear, continuity, and payoff review", "Editing tests logic, clues, intensity, repetition, motivation, reveal timing, and whether the climax fulfills the specific promise made by the opening."],
];

const faqs = [
  ["What types of horror fiction can your writers develop?", "We support supernatural, gothic, psychological, folk, cosmic, occult, creature, body, survival, and literary horror, as well as hybrids with mystery, historical fiction, or dark fantasy."],
  ["How do you make a horror story frightening without relying on gore?", "Fear can come from anticipation, atmosphere, implication, vulnerability, moral conflict, isolation, and the gradual collapse of what the character believes is safe or real."],
  ["Can I choose the level of violence and intensity?", "Yes. The project brief defines tone, audience, on-page violence, disturbing themes, and content boundaries so the finished manuscript matches your intended experience."],
  ["How do you keep the monster or mystery from becoming less frightening after the reveal?", "The reveal is paced in stages and tied to character consequence. Learning more changes the threat, expands its meaning, or exposes a cost rather than simply explaining it away."],
  ["How long does it take to complete a horror novel?", "Most full-length horror projects take 4 to 7 months, depending on word count, research, structural complexity, revisions, intensity review, and editorial scope."],
  ["Will I retain creative control and ownership of the final manuscript?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function HorrorPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero horrorHero" aria-labelledby="horror-title">
        <Image className="historicalRomanceImage" src="/images/horror-hero.jpg" alt="A reader confronting an eldritch presence in a storm-darkened library" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Horror fiction ghostwriting</p><h1 id="horror-title">Enthralling Horror Fiction Story Writing</h1><p>Create a novel of accumulating dread, unforgettable imagery, and a threat that reaches far beyond the final page.</p><Link className="button" href="/contact">Develop your horror novel <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Sustained narrative dread", "Consistent threat logic", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent horrorContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="horror-intro-title"><div><p className="eyebrow">Best horror book writers</p><h2 id="horror-intro-title">Horror fiction that makes<br /><em>safety feel impossible.</em></h2><p className="romanceLead">Effective horror does more than shock. It teaches readers to distrust the familiar, then gives that unease a shape they cannot forget.</p><p>Fear grows through the relationship between character, place, and threat. A strange sound becomes evidence; a refuge becomes a trap; a private guilt becomes the door through which something terrible enters.</p><p>Our specialists control atmosphere, revelation, violence, and pace to create the precise reading experience your concept promises.</p><Link className="fictionTextLink" href="/contact">Tell us what waits in the dark <ArrowRight size={17} /></Link></div><aside className="romanceCraft horrorCraft"><Ghost size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The architecture of fear</p><h3>Unease, escalation,<br />and consequence.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="horrorForms romanceWrap" aria-labelledby="horror-forms-title"><div><p className="eyebrow">Choose the source of terror</p><h2 id="horror-forms-title">Different nightmares.<br /><em>The same need to know.</em></h2><p>The form of horror determines what remains hidden, what can be resisted, and what the protagonist must sacrifice to survive.</p></div><div className="horrorFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties horrorProcess" aria-labelledby="horror-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From first omen to final confrontation</p><h2 id="horror-process-title">A controlled process<br />for escalating dread.</h2><p>Threat rules, character vulnerability, clues, atmosphere, and payoff are designed as one continuous experience.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap horrorInvestment" aria-labelledby="horror-value-title"><div><p className="eyebrow">A threat the reader believes</p><h2 id="horror-value-title">Every clue, silence, and shadow<br /><em>serves the fear.</em></h2><p>Your proposal defines concept development, research, intensity boundaries, structural design, milestone drafting, revisions, and specialist editing before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we track throughout</h3><ul>{["Threat rules and supernatural logic", "Clue placement and reveal timing", "Escalation without repetitive scares", "Character vulnerability and moral cost", "A climax that fulfills the horror promise"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="horror-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="horror-faq-title">Fear thrives on uncertainty.<br /><em>The collaboration does not.</em></h2><p>Answers about horror forms, gore, intensity, reveals, schedules, creative control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing horrorClosing"><p className="eyebrow">The door is already open</p><h2>Write the nightmare readers willingly enter.</h2><p>Bring the place, presence, secret, or impossible fear that refuses to stay buried.</p><Link className="button" href="/contact">Begin your horror novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
