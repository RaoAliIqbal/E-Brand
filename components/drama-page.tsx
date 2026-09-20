import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Drama as DramaIcon, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["Characters under pressure", "Every central character wants something specific, fears a meaningful loss, and makes choices that reveal who they are when the situation tightens."],
  ["Conflict with consequence", "Secrets, loyalties, desires, and competing values create reversals that change relationships instead of manufacturing surprise for its own sake."],
  ["Emotion earned through action", "Readers feel the story because emotion emerges from behavior, subtext, silence, and difficult decisions rather than explanation alone."],
];

const forms = [
  ["Family and relationship drama", "History, obligation, betrayal, inheritance, and love place intimate relationships under pressure across generations."],
  ["Social and workplace drama", "Institutions, ambition, status, injustice, and public expectation collide with private values and personal cost."],
  ["Tragedy and psychological drama", "A defining flaw, impossible choice, or hidden wound drives the protagonist toward recognition, transformation, or irreversible loss."],
];

const steps = [
  ["Emotional premise and character web", "We define the story’s central wound, desire, relationships, secrets, power dynamics, and the question each major character forces the protagonist to face."],
  ["Conflict and reversal architecture", "The outline maps pressure, revelations, decisions, scene objectives, turning points, and the consequences that keep the plot emotionally alive."],
  ["Scene-driven milestone drafting", "Dialogue, subtext, physical behavior, interiority, and setting work together in focused scenes. Milestone reviews protect voice and emotional progression."],
  ["Performance and continuity review", "Editing tests motivation, dialogue, tension, scene purpose, pacing, payoff, and whether the climax resolves the central emotional conflict honestly."],
];

const faqs = [
  ["What kinds of drama fiction can your ghostwriters develop?", "We support family drama, relationship drama, domestic fiction, social drama, workplace stories, tragedy, psychological drama, historical drama, and genre hybrids with romance, mystery, or suspense."],
  ["How do you create emotional drama without making it melodramatic?", "The story grounds emotion in specific character goals, credible behavior, earned consequences, restraint, and subtext. Moments feel powerful because the reader understands what each choice costs."],
  ["Can you help develop an ensemble cast with several viewpoints?", "Yes. We can map each character’s desire, conflict, arc, relationships, and narrative function, then balance viewpoints so every perspective advances the same central dramatic question."],
  ["Can a stage play or screenplay idea become a drama novel?", "Yes. We can preserve the strongest scenes and dialogue while adding interiority, narrative voice, transitions, setting, and prose structure suited to a novel."],
  ["How long does it take to complete a drama novel?", "Most full-length projects take 4 to 7 months, depending on word count, number of viewpoints, structural complexity, milestone feedback, revisions, and editorial depth."],
  ["Will I retain creative control and ownership of the final manuscript?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function DramaPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero dramaHero" aria-labelledby="drama-title">
        <Image className="historicalRomanceImage" src="/images/drama-hero.jpg" alt="A reader studying tragic stories and plays beside a theatre at night" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Drama fiction ghostwriting</p><h1 id="drama-title">Drama Ghostwriter for Fiction and Novel Writing Services</h1><p>Build a compelling novel from powerful characters, difficult choices, sharp dialogue, and emotions readers experience as their own.</p><Link className="button" href="/contact">Develop your dramatic novel <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Character-led storytelling", "Emotionally credible conflict", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent dramaContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="drama-intro-title"><div><p className="eyebrow">Hire incredible drama ghostwriters</p><h2 id="drama-intro-title">Drama fiction that makes<br /><em>every choice matter.</em></h2><p className="romanceLead">The strongest drama turns ordinary human wants into conflicts that expose character, transform relationships, and leave no one unchanged.</p><p>From the protagonist’s private fear to the setting that confines or challenges them, every element serves the emotional movement of the whole. Plot twists work because they alter what characters believe and what they are willing to risk.</p><p>Our writers shape your premise into an engrossing novel with controlled tension, purposeful scenes, vivid personality, and an ending that earns its impact.</p><Link className="fictionTextLink" href="/contact">Tell us what is at stake <ArrowRight size={17} /></Link></div><aside className="romanceCraft dramaCraft"><DramaIcon size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The unique aspects of drama</p><h3>Pressure, revelation,<br />and change.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="dramaForms romanceWrap" aria-labelledby="drama-forms-title"><div><p className="eyebrow">Many stages for human conflict</p><h2 id="drama-forms-title">Find the form that<br /><em>fits the emotional truth.</em></h2><p>Drama can unfold around a dinner table, inside an institution, across a lifetime, or in one irreversible night.</p></div><div className="dramaFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties dramaProcess" aria-labelledby="drama-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From tension to transformation</p><h2 id="drama-process-title">A scene-driven process<br />for emotional momentum.</h2><p>Character psychology and plot architecture develop together so each revelation and reversal feels inevitable in retrospect.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap dramaInvestment" aria-labelledby="drama-value-title"><div><p className="eyebrow">A manuscript shaped around the characters</p><h2 id="drama-value-title">The discipline behind<br /><em>a story that feels alive.</em></h2><p>Your proposal defines concept work, character mapping, structural design, milestone drafting, revisions, and editorial review. Scope and ownership are clear before the first scene is written.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we test in every scene</h3><ul>{["A clear objective and source of resistance", "Dialogue shaped by desire and subtext", "Emotional movement or new information", "Consequences that affect later choices", "A distinct voice for every major character"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="drama-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="drama-faq-title">Complex characters.<br /><em>A clear collaboration.</em></h2><p>Answers about dramatic forms, emotional restraint, ensemble casts, adaptation, schedules, control, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing dramaClosing"><p className="eyebrow">Every silence carries a choice</p><h2>Write the conflict readers will feel in their bones.</h2><p>Bring the character, relationship, secret, or impossible decision at the heart of your novel.</p><Link className="button" href="/contact">Begin your drama novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
