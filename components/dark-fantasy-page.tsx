import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Moon, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const specializations = [
  ["Moral ambiguity and antiheroes", "Protagonists rarely wear white hats. Their internal conflicts can be as brutal as their external foes, forcing readers to question whether survival has made the hero worse than the monster."],
  ["Hostile world-building", "Hope is scarce and every victory carries a cost. We develop oppressive societies, corrupted kingdoms, ruined landscapes, and cultures shaped by fear, scarcity, or decay."],
  ["Epic scale with psychological focus", "Large-scale conflict is paired with the creeping dread of psychological fiction, keeping the character’s inner descent as compelling as the battles beyond them."],
];
const distinctions = [
  ["Magic system", "Corrupting, parasitic, or psychologically costly", "Establishes the price of power and prevents easy solutions"],
  ["Protagonist", "Antihero driven by necessity, obsession, or revenge", "Creates tension, realism, and difficult choices"],
  ["Antagonist", "Often sympathetic, systemic, or an existential threat", "Keeps the conflict morally weighted beyond simple good and evil"],
  ["Tone", "Fatalistic, gritty, melancholic, and visceral", "Maintains the necessary sense of dread and consequence"],
];
const steps = [
  ["The theme of torment and moral core", "We define the central moral and thematic questions. What is evil in this world? What must the protagonist cross, and what is the irreversible consequence? This establishes the story’s emotional logic."],
  ["The brutal world and lore codex", "A Grim Lore Codex and Corrupt Cosmology capture the bleak history, terrifying magic, and nature of the malevolent forces. This shared foundation protects continuity throughout the manuscript."],
  ["Consequences and narrative architecture", "The outline tracks the protagonist’s psychological and moral descent beside the external plot. Victories, losses, revelations, and turning points are designed to carry a lasting cost."],
  ["Visceral voice and emotional resonance", "The draft uses an immersive, atmospheric voice suited to your vision—from gritty and unflinching to gothic and evocative—while preserving character depth beneath the horror."],
  ["Editorial scrutiny and polishing", "Developmental review tests thematic consistency, character motivation, and sustained tension. Prose editing then strengthens language, pacing, and the manuscript’s market-ready finish."],
];
const genres = [
  ["Grimdark fantasy", "Flawed authority, political corruption, military realism, and societal decay in a world without comfortable answers."],
  ["Supernatural fantasy", "Ancient malevolence, cursed objects, and existential threats grounded in a coherent world structure."],
  ["Sword and sorcery", "Fast, dangerous adventures led by pragmatic heroes whose survival often carries a moral price."],
];
const faqs = [
  ["What is the estimated cost of your dark fantasy fiction ghostwriting service?", "Dark fantasy ghostwriting is a premium investment because it combines complex character psychology, bleak world-building, and intensive editorial work. Full-length projects generally range from $40,000 to over $90,000 USD. Your proposal reflects the manuscript length, lore development, and planned series scope."],
  ["How long does the ghostwriting process take for a dark fantasy novel?", "A complete professional manuscript typically takes 5 to 8 months. This allows time to build the atmosphere and moral framework, execute the intricate plot, review the character arc, and complete specialist editing."],
  ["How do you ensure the tone remains consistently grim and visceral?", "We establish thematic goals and plot consequences in the earliest planning stages, then record the world’s logic, moral stakes, and emotional language in shared project references. Every milestone is reviewed against these foundations."],
  ["Can I hire a ghostwriter for dark fantasy novels that are part of a grim series?", "Yes. Series architecture can establish long-term character arcs, escalating corruption, recurring consequences, and the definitive fate of the world across multiple books while keeping each volume narratively satisfying."],
  ["What is the main difference between dark fantasy and epic fantasy in your services?", "Epic fantasy often centers a clearer conflict between good and evil and the promise of hope. Dark fantasy focuses on moral ambiguity, flawed protagonists, and a world defined by suffering. The approach prioritizes psychological realism and traditional heroic certainty is often absent."],
  ["Who owns the finished dark fantasy novel and all associated rights?", "You retain 100% of the intellectual property, copyright, and publishing rights after final payment, as defined in your agreement. The ghostwriter receives no continuing claim to the manuscript or its royalties."],
  ["What is the role of the antihero in your dark fantasy storytelling?", "The antihero is central. Our work focuses on characters who are deeply flawed and make morally questionable choices through necessity, self-interest, obsession, or survival. Their arc often descends toward a costly or Pyrrhic victory."],
];

export function DarkFantasyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero darkFantasyHero" aria-labelledby="dark-fantasy-title">
        <Image className="historicalRomanceImage" src="/images/dark-fantasy-hero.png" alt="A lone antihero overlooking a ruined dark kingdom beneath a red moon" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Dark fantasy fiction ghostwriting</p>
          <h1 id="dark-fantasy-title">Premier Dark Fantasy Fiction Ghostwriting Services</h1>
          <p>Need a sinister, immersive world brought to life? Shape an unforgettable story where power has a price and every victory leaves a scar.</p>
          <Link className="button" href="/contact">Enter the shadows <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Morally complex characters", "Uncompromising atmosphere", "Your story. Your rights."].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent darkFantasyContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="dark-intro-title">
          <div><p className="eyebrow">Embracing the shadows</p><h2 id="dark-intro-title">Ghostwriting for dark fantasy novels:<br /><em>where consequence is everything.</em></h2><p className="romanceLead">Dark fantasy is where the moral compass shatters, heroism carries a fatal flaw, and survival can demand a terrible choice.</p><p>This genre needs more than conflict and tragedy. It demands an understanding of human depravity, narrative fatalism, and the intricate structure of psychological torment alongside grand-scale fantasy.</p><p>We pair genre-specialist writers with a clear collaborative process, capturing grim aesthetics, moral complexity, and relentless emotional pressure without losing the story’s purpose or the author’s vision.</p><Link className="fictionTextLink" href="/contact">Tell us what haunts your world <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft darkFantasyCraft"><Moon size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The specialization of dark fantasy storytellers</p><h3>Worlds without mercy.<br />Characters without easy answers.</h3>{specializations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="darkDistinctions romanceWrap" aria-labelledby="dark-elements-title"><div className="romanceSectionHeading"><p className="eyebrow">The anatomy of the genre</p><h2 id="dark-elements-title">The elements that make<br /><em>dark fantasy distinct.</em></h2></div><div className="darkTable"><div className="darkTableHead"><span>Key element</span><span>Dark fantasy focus</span><span>Why it matters</span></div>{distinctions.map(row => <div className="darkTableRow" key={row[0]}>{row.map((cell, index) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}>{cell}</span>)}</div>)}</div></section>
        <section className="romanceSpecialties" aria-labelledby="dark-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">A rigorous, tailored process</p><h2 id="dark-process-title">Dark fantasy storytelling<br />from moral core to final polish.</h2><p>The methodology preserves narrative intensity and psychological depth while maintaining clear structure and a coherent world.</p></div><ol className="darkProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="dark-expertise-title"><div className="romanceSectionHeading"><p className="eyebrow">Specialist expertise for bleak fantasy novels</p><h2 id="dark-expertise-title">An authentic voice for<br /><em>the darkness you imagine.</em></h2><p>Different branches of dark fantasy call for different rhythms, dangers, and shades of moral uncertainty.</p></div><div className="darkGenreGrid">{genres.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceInvestment romanceWrap darkInvestment" aria-labelledby="dark-investment-title"><div><p className="eyebrow">Investment in unflinching storytelling</p><h2 id="dark-investment-title">Depth, consistency,<br /><em>and sustained tension.</em></h2><p>Dark fantasy requires specialized psychological labor, intricate structural demands, and a high-level narrative voice that generalist writers may not reliably provide.</p><p>After an initial consultation, your proposal defines the world-building, outlining, drafting, and editorial scope in clear terms, including the milestones and fixed project fee.</p><Link className="button" href="/contact">Discuss your dark fantasy <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What the scope can include</h3><ul>{["Grim Lore Codex and corrupted cosmology", "Moral and psychological character arcs", "Sustained atmospheric tension", "Series planning and consequence mapping", "Developmental and prose editing"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="dark-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="dark-faq-title">Hard choices.<br /><em>Clear answers.</em></h2><p>Practical details about commissioning a dark fantasy novel and protecting the integrity of your vision.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing darkClosing"><p className="eyebrow">Your shadows have a story</p><h2>Bring your darkest world to the page.</h2><p>Start with the antihero, the cost of power, or the choice that cannot be undone.</p><Link className="button" href="/contact">Begin the descent <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
