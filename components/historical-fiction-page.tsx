import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Landmark, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const advantages = [
  ["Rigorous historical authentication", "Specialists conduct deep, targeted research beyond simple facts, studying the social mentality of the era and consulting primary and secondary sources."],
  ["Seamless integration of fiction and fact", "Real events and figures heighten the drama of fictional lives without turning the manuscript into a textbook or losing the immediacy of the story."],
  ["Pacing and narrative scope", "Long-form historical narratives balance necessary exposition with dynamic action and dialogue, keeping readers inside the period without slowing the plot."],
];
const researchDetails = [
  ["Period dialogue", "Vocabulary and cadence feel authentic without becoming archaic or inaccessible."],
  ["Cultural context", "Politics, class structures, gender roles, social customs, and daily routines shape character choices."],
  ["Technological accuracy", "Clothing, transport, communication, weaponry, and military hardware fit the established timeline."],
];
const perspectives = [
  ["Historically grounded women’s stories", "Domestic life, social constraint, resistance, and quiet rebellion are treated as historically consequential rather than peripheral."],
  ["Historically grounded men’s stories", "War, political power, exploration, ambition, and public-facing challenges are balanced with emotional and private experience."],
  ["The right voice for the period", "The writer is matched to your era, specific factual focus, point of view, and the emotional register of the novel."],
];
const steps = [
  ["Historical vetting and research mandate", "We define the core concept and relevant historical period, then establish a Historical Mandate Document: the factual boundaries, cultural details, and required research that keep the story authentic."],
  ["Structural outlining and character mapping", "A comprehensive outline places fictional turning points against verified events. Character arcs and emotional development are synchronized with the era’s social, political, and technological realities."],
  ["Drafting the past", "The selected writer develops immersive prose, authentic dialogue, and period-specific sensory detail. Drafts arrive in milestones so voice, tone, pace, and accuracy can be reviewed as the manuscript develops."],
  ["Accuracy review and editorial polish", "A specialist Historical Accuracy Check accompanies developmental and copy editing. Clothing, dialogue, dates, and customs are reviewed before the final polished manuscript is delivered."],
];
const benefits = [
  ["Mitigates risk", "Early research and specialist review reduce factual errors that can damage reader trust."],
  ["Guarantees authenticity", "A manuscript grounded in knowledge satisfies attentive readers and critics."],
  ["Accelerates production", "Research and drafting move together within one coordinated professional process."],
];
const faqs = [
  ["What is the estimated cost for your professional historical novel writing services?", "A full-length historical novel typically ranges from $45,000 to over $95,000 USD. The final fee depends on manuscript length, period obscurity, research depth, specialist review, and the complexity of the plot."],
  ["What is the typical timeline to complete a historical novel through your service?", "Most professional historical novels take 6 to 9 months from research planning to final delivery. A less documented period or a story involving several locations and timelines may require additional time."],
  ["How do you ensure historical accuracy in the ghostwriting services historical fiction process?", "Accuracy is managed through a Historical Mandate Document, targeted source research, timeline checks, and a final Historical Accuracy Review. Every period detail is checked against authoritative sources or clearly documented creative decisions."],
  ["Can I specifically request historical fiction writers male or historical fiction writers female?", "Yes. We discuss the perspective, lived experience, subject matter, and tone most important to your novel, then match the project with a writer whose strengths and research background fit those needs."],
  ["What is the difference between your historical fiction agency and a generalist service?", "Historical fiction combines narrative craft with period knowledge, source evaluation, and cultural context. Our process gives research, authenticity, and specialist review the same importance as plot, character, and prose."],
  ["I have extensive research notes and a detailed timeline already. Will this reduce the cost?", "It may. We review your material during discovery and identify what can be verified and used. Well-organized, relevant research can reduce preliminary work, while gaps or conflicting sources may still require specialist investigation."],
  ["Will the ghostwriter use real historical figures in the story?", "Yes, when appropriate. Real figures can be integrated into the narrative while their documented words and actions remain plausible and respectful of the historical record. Any creative interpretation is handled carefully."],
];

export function HistoricalFictionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero historicalFictionHero" aria-labelledby="historical-fiction-title">
        <Image className="historicalRomanceImage" src="/images/historical-fiction-hero.png" alt="A woman holding a letter beside a steam train on a 1940s railway platform" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Historical fiction ghostwriting</p>
          <h1 id="historical-fiction-title">Best Historical Fiction Ghostwriting Services</h1>
          <p>Transport readers to another era with a novel grounded in meticulous research, authentic detail, and an unforgettable human story.</p>
          <Link className="button" href="/contact">Bring the past to life <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Period-authentic research", "Compelling narrative craft", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent historicalFictionContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="history-intro-title">
          <div><p className="eyebrow">Crafting authentic past worlds</p><h2 id="history-intro-title">Historical fiction ghostwriting<br /><em>where fact becomes lived experience.</em></h2><p className="romanceLead">A powerful historical novel needs the rigor of a scholar and the emotional instinct of a storyteller.</p><p>Historical fiction is a challenging and rewarding form. Success depends on a writer’s ability to blend documented fact with fictional characters, authentic dialogue, immersive settings, and an engaging narrative.</p><p>We combine professional research with your vision, whether the story spans two world wars, follows the private lives behind a revolution, or explores a family shaped by social change.</p><Link className="fictionTextLink" href="/contact">Tell us which era calls to you <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft historicalFictionCraft"><Landmark size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The professional advantage</p><h3>Accuracy alongside artistry.</h3>{advantages.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="historicalResearch romanceWrap" aria-labelledby="history-research-title"><div><p className="eyebrow">Research that readers can feel</p><h2 id="history-research-title">A world built from<br /><em>credible detail.</em></h2><p>The smallest details often determine whether readers believe in the larger world.</p></div><div className="historicalResearchGrid">{researchDetails.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceSpecialties historicalPerspectives" aria-labelledby="history-perspectives-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">Diversity in talent and perspective</p><h2 id="history-perspectives-title">The right historical fiction writer<br />for the story you need to tell.</h2><p>Historical narrative carries emotional truths shaped by gender, class, culture, and social standing.</p></div><div className="historicalPerspectiveGrid">{perspectives.map(([title, text], index) => <article key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="history-process-title"><div className="romanceSectionHeading"><p className="eyebrow">The collaborative process</p><h2 id="history-process-title">Working with<br /><em>historical fiction writers.</em></h2><p>A systematic process protects accuracy and authenticity at every stage.</p></div><ol className="romanceSteps">{steps.map(([title, text], index) => <li key={title}><span className="romanceStepNumber">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
        <section className="romanceInvestment romanceWrap historicalInvestment" aria-labelledby="history-value-title"><div><p className="eyebrow">Why hire historical novel specialists?</p><h2 id="history-value-title">A verified process for<br /><em>an authentic manuscript.</em></h2><p>Errors in chronology, dialogue, or the mindset of an era can undermine the finished novel. Specialist research, structured drafting, and an accuracy review protect both the story and reader trust.</p><Link className="button" href="/contact">Discuss your historical novel <ArrowRight size={17} /></Link></div><div className="mysteryValueList">{benefits.map(([title, text]) => <article key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="history-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="history-faq-title">The past is complex.<br /><em>The process can be clear.</em></h2><p>Answers about research, accuracy, timelines, writer matching, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing historicalFictionClosing"><p className="eyebrow">Every era holds a human story</p><h2>Write the past so readers can live inside it.</h2><p>Bring the period, the people, or the moment in history that refuses to let you go.</p><Link className="button" href="/contact">Start your historical novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
