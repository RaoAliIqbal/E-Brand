import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mountain, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["Landscape as pressure", "Distance, weather, water, terrain, settlement, and isolation determine what characters can risk and what survival demands."],
  ["Justice beyond easy answers", "Law, loyalty, revenge, property, freedom, and community collide in choices where every version of justice carries a cost."],
  ["Action grounded in consequence", "Rides, pursuits, standoffs, crossings, and violence remain clear and purposeful because they change relationships, power, or the future of a place."],
];

const forms = [
  ["Historical frontier Western", "Research-driven stories recreate a specific territory, migration, conflict, industry, or settlement without reducing the past to scenery."],
  ["Revisionist and literary Western", "Familiar myths are questioned through complex viewpoints, moral ambiguity, environmental cost, and lives omitted from older versions of the frontier."],
  ["Contemporary and genre Western", "The Western’s landscapes, codes, and conflicts can power modern crime, romance, mystery, adventure, or speculative stories."],
];

const steps = [
  ["Territory, period, and conflict brief", "We define the location, time, central dispute, community, protagonist, historical boundaries, and the version of the West your novel will examine."],
  ["Research and frontier story map", "The outline integrates routes, settlements, work, law, technology, culture, environmental limits, character arcs, and escalating moral choices."],
  ["Milestone drafting with cinematic clarity", "The writer balances atmospheric landscape, distinctive dialogue, intimate character, and readable action. Reviews keep history, pace, and voice aligned."],
  ["Historical and continuity review", "Editing checks chronology, geography, travel time, material culture, community representation, action logic, motivation, and the emotional payoff of the final choice."],
];

const faqs = [
  ["What kinds of Western fiction can your writers develop?", "We support historical frontier novels, cattle and trail stories, outlaw and lawman narratives, homestead fiction, revisionist and literary Westerns, Western romance, contemporary neo-Westerns, and genre hybrids."],
  ["How do you research a specific territory or historical period?", "The research plan can cover maps, newspapers, archives, material culture, Indigenous and local histories, transportation, work, weapons, law, language, and the environmental realities of the chosen place."],
  ["Can you write a Western that avoids stereotypes and outdated myths?", "Yes. A revisionist approach examines whose story is being told, uses specific historical sources, and develops Indigenous, Mexican, Black, immigrant, and women characters as full participants in the world."],
  ["How do you make gunfights and action scenes feel realistic?", "Action is built around geography, visibility, distance, available technology, character skill, fear, and consequence. Clear cause and effect matters more than exaggerated spectacle."],
  ["How long does it take to complete a Western novel?", "Most full-length Westerns take 5 to 8 months, depending on historical research, word count, number of locations, structural complexity, revisions, and specialist review."],
  ["Will I retain creative control and ownership of the final manuscript?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function WesternPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero westernHero" aria-labelledby="western-title">
        <Image className="historicalRomanceImage" src="/images/western-hero.jpg" alt="A frontier writing desk overlooking a river canyon and Western town" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Western fiction ghostwriting</p><h1 id="western-title">Best Western Fiction Story Writers</h1><p>Write a novel of vast landscapes, hard choices, frontier communities, and characters forced to decide what justice means when the law is far away.</p><Link className="button" href="/contact">Develop your Western <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Research-grounded frontier worlds", "Cinematic action and moral stakes", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent westernContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="western-intro-title"><div><p className="eyebrow">Qualified Western book writers</p><h2 id="western-intro-title">Western fiction shaped by<br /><em>place, pressure, and choice.</em></h2><p className="romanceLead">The West is more than a backdrop. It is distance, scarcity, opportunity, contested history, and the question of who gets to define the future.</p><p>A compelling Western balances research with narrative force. The characters must belong to a specific territory and time, while their conflicts over survival, loyalty, land, freedom, and justice remain immediately human.</p><p>Our writers build your concept into an immersive manuscript with vivid landscape, purposeful action, credible detail, and characters who stand beyond familiar archetypes.</p><Link className="fictionTextLink" href="/contact">Tell us where the trail begins <ArrowRight size={17} /></Link></div><aside className="romanceCraft westernCraft"><Mountain size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The exceptional Western</p><h3>Wide horizon.<br />Narrow choices.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="westernForms romanceWrap" aria-labelledby="western-forms-title"><div><p className="eyebrow">Beyond one frontier myth</p><h2 id="western-forms-title">Choose the West<br /><em>your story needs.</em></h2><p>The genre can celebrate adventure, interrogate history, follow intimate communities, or carry its moral codes into the present.</p></div><div className="westernFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties westernProcess" aria-labelledby="western-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From territory to final manuscript</p><h2 id="western-process-title">A researched process<br />for a vivid frontier novel.</h2><p>Landscape, history, material detail, character, action, and moral consequence develop together.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap westernInvestment" aria-labelledby="western-value-title"><div><p className="eyebrow">A frontier readers can believe</p><h2 id="western-value-title">Historical depth without<br /><em>losing narrative momentum.</em></h2><p>Your proposal defines research, locations, period, concept development, structural planning, milestone drafts, revisions, and historical or cultural review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we research and track</h3><ul>{["Territory, route, distance, and climate", "Work, trade, transport, law, and technology", "Community, culture, and contested history", "Weapons, horses, and physical action", "How landscape shapes the final moral choice"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="western-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="western-faq-title">The territory is vast.<br /><em>The process stays focused.</em></h2><p>Answers about Western forms, historical research, representation, action, schedules, creative control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing westernClosing"><p className="eyebrow">Every trail ends with a reckoning</p><h2>Write the West in all its danger and possibility.</h2><p>Bring the territory, conflict, community, or hard choice at the heart of your novel.</p><Link className="button" href="/contact">Begin your Western novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
