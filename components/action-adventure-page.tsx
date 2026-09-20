import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const essentials = [
  ["Momentum with purpose", "Action accelerates the story because every chase, escape, confrontation, and discovery changes the hero’s choices or raises the cost of failure."],
  ["Suspense and anticipation", "Clear objectives, controlled reveals, limited time, and escalating obstacles keep readers forecasting what might happen while fearing what comes next."],
  ["A world worth exploring", "Landscapes, hidden places, cultures, technology, and history create more than scenery—they shape the dangers and rewards of the journey."],
];

const storyEngine = [
  ["The mission", "A concrete goal gives the journey direction, whether it involves rescue, discovery, survival, escape, recovery, or justice."],
  ["The obstacle chain", "Each setback demands a new decision and reveals character while preventing the middle of the novel from losing momentum."],
  ["The human stakes", "Loyalty, grief, ambition, courage, and sacrifice give physical danger an emotional consequence readers can feel."],
];

const steps = [
  ["Adventure brief and research", "We define the premise, period, locations, specialist knowledge, central threat, and the promise the journey makes to the reader."],
  ["Route, stakes, and sequence design", "A detailed outline maps destinations, discoveries, reversals, set pieces, character decisions, and the escalation toward the final confrontation."],
  ["Cinematic milestone drafting", "The writer balances vivid setting, concise action, sharp dialogue, and controlled tension. Milestone reviews keep pace, voice, and logistics aligned."],
  ["Continuity and intensity review", "Editing checks geography, timing, cause and effect, physical plausibility, character motivation, and whether every major sequence lands with maximum clarity."],
];

const faqs = [
  ["What kinds of action and adventure stories can your writers develop?", "We support contemporary expeditions, historical adventures, survival stories, treasure hunts, military and espionage plots, archaeological mysteries, maritime journeys, and genre hybrids with thriller, fantasy, or science-fiction elements."],
  ["How do you keep a fast-paced adventure novel from feeling repetitive?", "Each sequence has a different dramatic purpose. Obstacles alter the plan, reveal character, introduce information, or create a new cost, so action produces meaningful change rather than spectacle alone."],
  ["Can you research specialist locations, weapons, vehicles, or survival techniques?", "Yes. The project scope can include targeted research and expert-source review for geography, technology, history, combat, transport, navigation, and survival details."],
  ["How long does it take to complete an action-adventure manuscript?", "A full-length novel commonly takes 4 to 7 months, depending on word count, research, world complexity, number of locations, revisions, and the technical demands of its action sequences."],
  ["Can you adapt my real expedition or experience into fiction?", "Yes. We can preserve the emotional truth and distinctive knowledge of your experience while reshaping events, characters, and chronology into a satisfying fictional narrative."],
  ["Will I retain creative control and ownership of the final novel?", "Yes. You review the outline and milestone drafts and retain final creative approval. Ownership transfers under the agreed work-for-hire terms described in your contract."],
];

export function ActionAdventurePage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero actionAdventureHero" aria-labelledby="action-adventure-title">
        <Image className="historicalRomanceImage" src="/images/action-adventure-hero.jpg" alt="An explorer holding a map above a lost mountain city" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Action and adventure ghostwriting</p><h1 id="action-adventure-title">Modern Adventure Fiction Story Writers</h1><p>Lead readers into danger, discovery, and the unknown with a novel driven by vivid worlds, escalating stakes, and relentless narrative momentum.</p><Link className="button" href="/contact">Plan your adventure <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["High-stakes plotting", "Immersive settings", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent actionAdventureContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="adventure-intro-title"><div><p className="eyebrow">Indulge in the fascination</p><h2 id="adventure-intro-title">Adventure novel writing<br /><em>that keeps pages turning.</em></h2><p className="romanceLead">The best adventure fiction combines danger and wonder with a character whose choices matter at every turn.</p><p>Our writers build suspense through a chain of meaningful obstacles, discoveries, and reversals. Action remains clear and exciting, while vivid locations and emotional stakes give every set piece a reason to exist.</p><p>From a lost-city expedition to a modern survival mission, your concept becomes a confident, immersive journey shaped around the experience you want readers to have.</p><Link className="fictionTextLink" href="/contact">Tell us where the journey begins <ArrowRight size={17} /></Link></div><aside className="romanceCraft actionAdventureCraft"><Compass size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Exceptional story writing</p><h3>Danger, discovery,<br />and forward motion.</h3>{essentials.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="adventureEngine romanceWrap" aria-labelledby="adventure-engine-title"><div><p className="eyebrow">The engine of adventure</p><h2 id="adventure-engine-title">Every mile changes<br /><em>the mission.</em></h2><p>Strong structure turns travel and action into a sequence of decisions with mounting consequences.</p></div><div className="adventureEngineGrid">{storyEngine.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties adventureProcess" aria-labelledby="adventure-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From premise to pursuit</p><h2 id="adventure-process-title">A disciplined process for<br />a breathless reading experience.</h2><p>Research, route design, escalating action, and continuity checks keep the journey convincing from departure to final discovery.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap adventureInvestment" aria-labelledby="adventure-value-title"><div><p className="eyebrow">Top adventure book writers</p><h2 id="adventure-value-title">A specialist who understands<br /><em>how excitement works.</em></h2><p>Your proposal is shaped around research, word count, locations, technical complexity, and editorial needs. Before drafting, you will know the complete scope, milestones, review points, and delivery plan.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we protect throughout</h3><ul>{["Clear geography and physical action", "Escalating danger without repetition", "Character decisions with consequences", "Research-backed specialist detail", "A satisfying final confrontation"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="adventure-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="adventure-faq-title">The unknown is thrilling.<br /><em>The process can be clear.</em></h2><p>Answers about subgenres, pace, research, timelines, adaptation, creative control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing adventureClosing"><p className="eyebrow">The horizon is only the beginning</p><h2>Write the adventure readers cannot leave behind.</h2><p>Bring the map, the mission, or the danger waiting beyond the next ridge.</p><Link className="button" href="/contact">Begin your adventure novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
