import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PanelsTopLeft, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const scripting = [
  ["Visual economy and pacing", "Panel turns, page reveals, concise dialogue, and silent beats work together to control rhythm, suspense, and emotional impact."],
  ["Detailed script formatting", "Panel-by-panel descriptions communicate action, expression, environment, lettering notes, transitions, and visual priorities clearly to the artist."],
  ["Graphic novel story development", "Character, theme, world, structure, and visual motifs are shaped into a production-ready foundation before full scripting begins."],
];

const formats = [
  ["Visual novel script writing", "Branching routes, player decisions, dialogue priorities, emotional rewards, and scene logic create a coherent interactive narrative."],
  ["Illustrated novel ghostwriting", "Prose and illustration are planned together so selected visual moments deepen the story without repeating what the text already says."],
  ["Custom graphic novel scripting", "Sequential art structure, page composition, dialogue, captions, and scene transitions are written for a clean handoff to artists and letterers."],
];

const pipeline = [
  ["Script as a production tool", "A graphic script is written as a practical blueprint for the artist, reducing ambiguity, back-and-forth, and costly visual revisions."],
  ["Streamlined visual story development", "Visual logic, character staging, world continuity, and major page turns are solved before production begins."],
  ["Guaranteed visual pacing and flow", "Page and panel counts are balanced so action, quieter emotional beats, and reveals land with clarity and force."],
  ["Agency support for creative teams", "We can serve as the narrative link between author, artist, letterer, editor, and production team throughout the project."],
];

const benefits = [
  ["Production-ready", "Industry-aware formatting makes the finished script easier for an artist and editor to interpret."],
  ["Visually engaging", "Every sequence is designed around what the page can show, with dialogue serving rather than crowding the artwork."],
  ["Narratively concise", "Panel and page turns create a fast, purposeful reading experience without sacrificing emotional depth."],
];

const faqs = [
  ["What is the estimated cost of graphic novel ghostwriting services?", "The fee depends on script length, page count, panel density, development needs, and whether the project requires a complete story or an adapted script. Full graphic novel scripting commonly starts around $15,000 USD, while shorter work can be scoped separately."],
  ["How long does it take to write graphic novel scripts for a full book?", "A professional full-length graphic novel script typically takes 3 to 5 months, including concept development, outline, page breakdowns, scripting, milestone reviews, and final formatting."],
  ["Do your services cover both custom graphic novel writing and visual novel projects?", "Yes. We support sequential-art scripts, illustrated novels, and interactive visual novels. Each format receives a structure and workflow tailored to how readers experience the story."],
  ["I only have a vague concept. Can you provide full graphic novel story development?", "Yes. We can develop plot, character arcs, visual language, world rules, themes, and a full beat sheet before scripting so the project begins with a strong production foundation."],
  ["Can I hire a graphic novel writer if I am also the artist?", "Yes. We can act as your specialist narrative partner, providing a structured script that leaves you free to focus on visual execution while retaining creative control."],
  ["Who retains the rights when I hire a graphic novel writer from your agency?", "You retain final creative approval. Under the agreed work-for-hire terms, the completed script and associated intellectual property rights transfer to you as defined in the contract."],
  ["What is the primary difference between a ghostwriter for illustrated novels and a graphic novel ghostwriter?", "A graphic novel script carries most of its story through panels, images, and concise dialogue. An illustrated novel remains prose-led, with selected artwork supporting key moments rather than replacing the primary narration."],
];

export function GraphicNovelsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero graphicNovelHero" aria-labelledby="graphic-novel-title">
        <Image className="historicalRomanceImage" src="/images/graphic-novels-hero.jpg" alt="A graphic novel writer planning illustrated pages in a book-lined studio" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Graphic novel and visual novel writing</p>
          <h1 id="graphic-novel-title">Premier Graphic Novel and Visual Novel Script Writing Service</h1>
          <p>Turn a high-concept idea into a production-ready script with visual pacing, precise panel direction, memorable dialogue, and a clear path for artists.</p>
          <Link className="button" href="/contact">Develop your visual story <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Production-ready scripts", "Visual pacing expertise", "Your creative ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent graphicNovelContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="graphic-intro-title">
          <div><p className="eyebrow">From concept to panel</p><h2 id="graphic-intro-title">Custom graphic novel writing<br /><em>built for the page.</em></h2><p className="romanceLead">Visual storytelling asks every word, image, panel, and page turn to carry its share of the narrative.</p><p>Our graphic novel writers combine dramatic structure with the practical language of sequential art. The script preserves your concept while giving artists, letterers, and editors the clarity they need to execute it.</p><p>Whether you arrive with a rough premise or a detailed world, we develop a visually deliberate manuscript ready for production, pitching, or publication.</p><Link className="fictionTextLink" href="/contact">Show us the story you can see <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft graphicNovelCraft"><PanelsTopLeft size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The art of visual scripting</p><h3>Every panel earns<br />its place.</h3>{scripting.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>

        <section className="graphicFormats romanceWrap" aria-labelledby="graphic-formats-title"><div><p className="eyebrow">Related visual forms</p><h2 id="graphic-formats-title">The right script for<br /><em>the way readers engage.</em></h2><p>Each format needs its own balance of prose, dialogue, image, choice, and pacing.</p></div><div className="graphicFormatGrid">{formats.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties graphicPipeline" aria-labelledby="graphic-pipeline-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">The author–artist collaboration</p><h2 id="graphic-pipeline-title">A clear production pipeline<br />from words to images.</h2><p>The script is both a story and a working document, designed to keep the creative team aligned from thumbnail sketches to final lettering.</p></div><ol className="urbanProcessGrid">{pipeline.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap graphicInvestment" aria-labelledby="graphic-value-title"><div><p className="eyebrow">Why hire a specialist?</p><h2 id="graphic-value-title">Visual expertise that protects<br /><em>the story and the budget.</em></h2><p>A conventional manuscript can become expensive to translate into sequential art. A specialist resolves pacing, composition priorities, and page logic in the script before production begins.</p><Link className="button" href="/contact">Scope your graphic novel <ArrowRight size={17} /></Link></div><div className="graphicBenefitGrid">{benefits.map(([title, text]) => <article key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="graphic-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="graphic-faq-title">A complex medium.<br /><em>A practical process.</em></h2><p>Answers about cost, timing, development, visual novel formats, artist collaboration, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing graphicClosing"><p className="eyebrow">Your story, ready to draw</p><h2>Build the world one unforgettable panel at a time.</h2><p>Bring the premise, the character, or the scene you have always wanted to see on the page.</p><Link className="button" href="/contact">Begin your graphic novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
