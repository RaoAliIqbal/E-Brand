import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  { title: "The realm of the setting", text: "The city is a character in itself. We draw on real locations, landmarks, culture, and atmosphere so the supernatural feels grounded in a recognizable world." },
  { title: "Pacing and intensity", text: "Urban fantasy is fast-paced. Strong openings, sharp dialogue, and compelling mystery or thriller elements pull readers into the hidden city and keep the pages turning." },
  { title: "The modern character archetype", text: "From gritty detectives and cynical mercenaries to reluctant heroes, the protagonist lives on the fringes and must confront the secret conflict beneath ordinary life." },
];
const steps = [
  ["The urban-magic blueprint", "Before drafting, we define the story’s core: the city and its atmosphere, the line between ordinary and magical life, the supernatural hierarchy, and the rules that keep every power consistent."],
  ["High-velocity outlining", "We map the major twists, the protagonist’s internal arc, and the pace of each set piece—from tense investigations to action-heavy climaxes. This produces a clear roadmap with room for discovery."],
  ["Drafting with grit and voice", "Your ghostwriter develops the manuscript in the protagonist’s voice, whether it is snarky, street-smart, world-weary, or intensely focused. Sensory city detail makes each scene feel immediate."],
  ["Consistency and polish", "Developmental editing sharpens plot holes, motivation, pacing, and the magic system. Professional prose editing then prepares a polished manuscript suited to the genre’s expectations."],
];
const specialties = [
  ["Paranormal romance", "Relationships unfold amid vampires, shifters, secret societies, and other supernatural conflict."],
  ["Grimdark urban fantasy", "Morally ambiguous antiheroes, darker themes, and dangerous consequences beneath the city lights."],
  ["Mystery-focused urban fantasy", "A supernatural crime, investigation, or conspiracy drives the plot and reveals the hidden world."],
  ["Young adult urban fantasy", "Coming-of-age stakes, magical discovery, and an accessible contemporary voice for younger readers."],
];
const faqs = [
  ["What is the typical cost for urban fantasy novel writing services?", "The investment for a full-length urban fantasy manuscript generally falls between $35,000 and $80,000 USD. The final scope depends on manuscript length, series planning, world-building, research, and editorial support. Your proposal defines the deliverables and payment schedule before work begins."],
  ["How long does it take to hire a ghostwriter and receive the final book?", "A polished urban fantasy novel typically takes 4 to 6 months, including concept validation, outlining, drafting, review milestones, and professional editing. The exact schedule reflects the book’s length and complexity."],
  ["How do you ensure my supernatural system remains consistent throughout the series?", "We create a Supernatural Codex that records rules, limitations, costs, hierarchies, species, key locations, and important historical events. The team uses this shared reference throughout drafting and future series planning."],
  ["Can I use your urban fantasy ghostwriting services to write a multi-book series?", "Yes. We can plan the larger conflict, recurring characters, escalating stakes, and natural cliffhangers across multiple volumes while giving each book its own satisfying arc."],
  ["Will the urban fantasy ghostwriter capture the specific tone I want?", "We match your project with a writer experienced in the tone you want, from gritty noir and dark humor to romance-led adventure. Early samples and chapter reviews give you clear opportunities to refine the voice."],
  ["I already have a partial manuscript or detailed outline. Will that reduce the project cost?", "Potentially. We first assess the strength and completeness of your existing material. A usable outline or manuscript may reduce discovery and development work, while material that needs restructuring will be reflected in the agreed scope."],
  ["What sets your urban fantasy ghostwriting services apart from general ghostwriting freelancers?", "Urban fantasy needs specialist knowledge of genre conventions, reader expectations, series structure, and the balance between magical rules and recognizable city life. Our process combines that genre fluency with structured development and professional editing."],
];

export function UrbanFantasyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero urbanFantasyHero" aria-labelledby="urban-fantasy-title">
        <Image className="historicalRomanceImage" src="/images/urban-fantasy-hero.png" alt="A rain-lit city where subtle magic glows beneath ordinary streets" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Urban fantasy ghostwriting</p>
          <h1 id="urban-fantasy-title">Top-Notch Urban Fantasy Ghostwriting Services</h1>
          <p>Ready to write a fresh story set in a hidden city world? Build a dark, dazzling novel where recognizable streets conceal impossible magic.</p>
          <Link className="button" href="/contact">Enter the hidden city <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["A city alive with secrets", "Genre-specialist writers", "Your rights and royalties"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="urban-intro-title">
          <div><p className="eyebrow">Where magic meets the everyday</p><h2 id="urban-intro-title">Seamlessly blending magic and mundane:<br /><em>the art of urban fantasy.</em></h2><p className="romanceLead">The moon-lit city street, the subway back alley, and the bustling station become gateways to the impossible.</p><p>Urban fantasy is one of fiction’s most dynamic subgenres. It brings the scale and wonder of fantasy into a modern, recognizable setting, where magic is hidden in plain sight.</p><p>We combine grounded realism with imaginative flair, shaping a narrative that feels rooted in contemporary life while a complex supernatural world operates just beneath the city’s surface.</p><Link className="fictionTextLink" href="/contact">Share your hidden world <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft"><Building2 size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Why specialist support matters</p><h3>The familiar city.<br />An unfamiliar danger.</h3>{foundations.map(({ title, text }) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="romanceSpecialties" aria-labelledby="urban-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">Clarity, pace, and market-ready precision</p><h2 id="urban-process-title">Our strategic approach to<br />ghostwriting urban fantasy fiction.</h2><p>We architect compelling, multi-book narratives that resonate with dedicated genre readers.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="urban-specialist-title"><div className="romanceSectionHeading"><p className="eyebrow">The professional urban fantasy ghostwriter for hire</p><h2 id="urban-specialist-title">A specialist for every<br /><em>street, shadow, and secret.</em></h2><p>Your writer is matched to the voice and conventions of your particular urban fantasy story.</p></div><div className="urbanSpecialtyGrid">{specialties.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceInvestment romanceWrap" aria-labelledby="urban-publishing-title"><div><p className="eyebrow">A strategic advantage in self-publishing</p><h2 id="urban-publishing-title">Build a series readers<br /><em>want to follow.</em></h2><p>Urban fantasy works especially well in digital-first publishing, where consistent releases can grow a loyal audience. A scalable plan helps you build continuity of voice, plot threads, and world elements across each volume.</p><p>We help plan and execute a multi-book series with consistent quality, a clear release-ready structure, and a manuscript professionally reviewed for the genre.</p><Link className="button" href="/contact">Plan your urban fantasy <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>Built for a continuing world</h3><ul>{["Supernatural Codex and city lore", "Series arcs and natural cliffhangers", "Consistent character voice", "Fast, controlled narrative pacing", "Developmental and prose editing"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="urban-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="urban-faq-title">Your hidden world.<br /><em>Practical answers.</em></h2><p>What to know before engaging an urban fantasy ghostwriter.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing"><p className="eyebrow">Magic is closer than it appears</p><h2>Bring your hidden city to life.</h2><p>Start with a character, a secret, or one impossible event on an ordinary street.</p><Link className="button" href="/contact">Start your story <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
