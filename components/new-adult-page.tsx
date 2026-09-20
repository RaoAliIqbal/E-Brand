import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const expertise = [
  ["The psychology of independence", "We write flawed, evolving protagonists facing adult decisions, financial pressure, self-reliance, and the lasting effects of their past."],
  ["The relationship matrix", "Romance grows through emotional scars, changing power dynamics, mature intimacy, and believable pacing that moves beyond first-love conventions."],
  ["Adulthood as the setting", "University, the gig economy, a first apartment, or a demanding new career becomes an active pressure on identity and choice."],
];

const stakes = [
  ["Personal stakes", "What happens if the protagonist cannot overcome the fear, habit, or false belief holding them back?"],
  ["Relational stakes", "What can be lost when trust, friendship, family, and romantic commitment collide with independence?"],
  ["Future stakes", "How will one choice change a career, scholarship, home, reputation, or the life they are trying to build?"],
];

const steps = [
  ["Core conflict and trauma mapping", "We isolate the internal conflict beneath the plot and map the formative experiences that still shape the protagonist’s decisions, relationships, and self-image."],
  ["Defining the stakes of independence", "The outline connects personal, relational, and future consequences so every turning point creates pressure on the character’s emerging adult identity."],
  ["Drafting and emotional surge", "A direct, intimate voice balances reflection with forward momentum. Milestone drafts let you review the emotional arc, chemistry, pacing, and major plot turns."],
  ["Psychological and commercial review", "Specialist editing tests emotional honesty, motivation, mature content, genre expectations, and market fit before the manuscript receives its final polish."],
];

const faqs = [
  ["What is the estimated cost range for your new adult fiction writing services?", "Professional new adult fiction writing generally ranges from $25,000 to over $55,000 USD for a standard novel. The final scope reflects word count, psychological depth, romantic or plot-based complexity, revisions, and editorial support."],
  ["How long does it take to hire a new adult novel ghostwriter and receive the final manuscript?", "Most projects take 3 to 5 months from concept development through final editing. A focused word count and efficient milestone reviews can support a faster schedule, while complex plots or extensive revisions may need more time."],
  ["How do you match me with the right new adult romance ghostwriter?", "We first identify the novel’s central relationship, tone, heat level, themes, and emotional arc. Your project is then matched with a writer whose samples and genre experience suit those exact needs."],
  ["Is your affordable new adult ghostwriter tier suitable for first-time authors?", "Yes. It gives first-time authors experienced guidance, a structured process, and professional manuscript development at a more accessible scope, with the deliverables and review points agreed before work begins."],
  ["What is the difference in mature content between new adult and young adult stories?", "New adult fiction usually follows characters aged 18 to 25 and may address adult independence, work, college, finances, intimacy, and recovery with greater candor. The content level is tailored to your audience and story rather than added for effect."],
  ["Does the new adult novel writer provide support for sequels or spin-offs?", "Yes. The same writer can maintain voice, relationship continuity, character development, and world details across a series, companion novel, or spin-off."],
  ["What level of creative control do I retain when working with your agency?", "You retain final creative approval throughout the project. Under the work-for-hire agreement, the completed manuscript and associated rights transfer to you according to the terms of your contract."],
];

export function NewAdultPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero newAdultHero" aria-labelledby="new-adult-title">
        <Image className="historicalRomanceImage" src="/images/new-adult-hero.png" alt="A young adult couple settling into their first city apartment at sunset" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">New adult fiction ghostwriting</p>
          <h1 id="new-adult-title">Expert New Adult Fiction Writers for Bold and Relatable Stories</h1>
          <p>Turn the defining years of early adulthood into an emotionally honest novel about independence, ambition, intimacy, and becoming.</p>
          <Link className="button" href="/contact">Develop your new adult novel <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Authentic adult voice", "Emotionally honest storytelling", "Your vision and ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent newAdultContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="na-intro-title">
          <div><p className="eyebrow">From transition to triumph</p><h2 id="na-intro-title">Ghostwriting services for<br /><em>new adult novels.</em></h2><p className="romanceLead">New adult fiction turns the uncertainty of ages 18 to 25 into intimate, high-stakes personal drama.</p><p>These stories live in the moment between leaving a familiar life and building one of your own. College, a first job, financial pressure, self-discovery, and intense relationships create fertile ground for bold commercial fiction.</p><p>Our writers combine a mature narrative voice with psychological insight and genre fluency, shaping your concept into a manuscript that feels emotionally real and ready to compete.</p><Link className="fictionTextLink" href="/contact">Share the story you want to tell <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft newAdultCraft"><Compass size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The professional voice</p><h3>Flawed, searching,<br />and becoming.</h3>{expertise.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>

        <section className="newAdultStakes romanceWrap" aria-labelledby="na-stakes-title"><div><p className="eyebrow">Where independence becomes story</p><h2 id="na-stakes-title">Every choice carries<br /><em>an adult consequence.</em></h2><p>A new adult plot becomes compelling when internal conflict and external pressure tighten around the same decision.</p></div><div className="newAdultStakesGrid">{stakes.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties newAdultProcess" aria-labelledby="na-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">A unique framework</p><h2 id="na-process-title">The new adult story<br />ghostwriter methodology.</h2><p>The process follows the protagonist’s internal journey and its collision with real-world pressure.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap newAdultInvestment" aria-labelledby="na-investment-title"><div><p className="eyebrow">Investment options</p><h2 id="na-investment-title">Find the professional partner<br /><em>your manuscript needs.</em></h2><p>We scope each project around its psychological depth, genre complexity, timeline, and editorial needs. A transparent proposal defines the complete work before drafting begins.</p><Link className="button" href="/contact">Request a tailored proposal <ArrowRight size={17} /></Link></div><div className="newAdultTierGrid"><article><p className="eyebrow">High-end professional</p><h3>Complex, deeply layered fiction</h3><p>For demanding character psychology, fast timelines, specialized themes, or extensive editorial and series support.</p></article><article><p className="eyebrow">Focused professional</p><h3>A clear, efficient scope</h3><p>For a well-defined concept that needs expert execution and commercial quality within a streamlined production plan.</p></article></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="na-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="na-faq-title">A bold new chapter<br /><em>starts with clarity.</em></h2><p>Answers about cost, timing, writer matching, mature themes, series support, and creative control.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing newAdultClosing"><p className="eyebrow">Ready to tell the story of defining adulthood?</p><h2>Write the choices that shape who we become.</h2><p>Bring us the character, relationship, or turning point that refuses to stay quiet.</p><Link className="button" href="/contact">Begin your new adult novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
