import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Fingerprint, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const specialties = [
  { title: "The thriller specialists", subtitle: "Pacing and high stakes", text: "Relentless pacing and an urgent clock carry the reader from the first page to the final twist.", items: [["Action thrillers", "The protagonist faces physical jeopardy, often involving espionage, politics, or military themes."], ["Legal and medical thrillers", "Specialized domains create dramatic conflicts within credible professional settings."], ["High-concept thrillers", "A unique, world-changing premise drives mounting danger and difficult choices."]] },
  { title: "The mystery architects", subtitle: "Clues, reveals, and the whodunit", text: "Every clue matters. The truth emerges through carefully controlled discovery, suspicion, and revelation.", items: [["Cozy mystery", "A contained community, an amateur sleuth, and lower on-page violence with a fair-play puzzle."], ["Noir mystery", "A morally complex investigation shaped by corruption, hard choices, and a gritty urban setting."], ["Murder mystery", "The puzzle, suspects, motives, and final reveal are engineered as one coherent structure."]] },
  { title: "Crime and suspense virtuosos", subtitle: "Darkness and psychological depth", text: "Character and emotion take center stage where the line between danger and obsession begins to disappear.", items: [["Crime novel", "A procedural, heist, or criminal perspective grounded in motive and credible consequence."], ["Psychological thriller", "The protagonist’s mind becomes the arena, creating unreliable narration and emotional tension."], ["Suspense", "The reader knows the threat is coming while the character struggles to understand or escape it."]] },
];
const steps = [
  ["Strategy and outline", "We discuss the core concept, target audience, thematic elements, and your preferred voice. A detailed chapter-by-chapter outline defines the stakes, reversals, clues, and character arcs before drafting begins."],
  ["Voice capture and material study", "Your writer studies notes, short stories, previous work, or recorded ideas to capture your rhythm and diction. The final manuscript should read as though it came naturally from you."],
  ["Draft and review", "The manuscript is written in agreed milestones. After each section, you review the work and request revisions, keeping the investigation, pacing, plot, and crucial reveals aligned with your vision."],
  ["Polish and final delivery", "Developmental and copy editing resolve plot gaps, strengthen continuity, and refine the prose. The final manuscript is professionally formatted and prepared for its next publishing stage."],
];
const valuePoints = [
  ["Market readability", "Genre expectations and current reader demand guide the pacing, stakes, and narrative promise."],
  ["Zero plot holes", "A detailed outline and structural review protect complex clues, timelines, motives, and reveals."],
  ["Time and opportunity", "You can focus on your career, audience, or next concept while a professional handles the manuscript."],
];
const faqs = [
  ["How does Storybound House ensure my confidentiality and ownership rights?", "Confidentiality is established before consultation through a service agreement and non-disclosure protections. Once the project is completed and paid, you own the work, copyright, publishing rights, and royalties according to the agreement."],
  ["I have a great premise but no outline. Can your team help with the structure of a complex novel?", "Yes. The process begins with your core concept, then develops a comprehensive blueprint with scene objectives, clues, reversals, red herrings, motive logic, pacing, and a controlled final reveal."],
  ["What genres do your thriller ghostwriters specialize in? Can you handle a psychological thriller?", "Yes. Specialist support spans psychological thrillers, detective novels, legal and medical thrillers, action and espionage stories, crime fiction, noir, cozy mystery, murder mystery, and domestic suspense."],
  ["What is the typical timeline for ghostwriting a full-length mystery or thriller novel?", "A standard 70,000–90,000-word mystery or thriller generally takes 4 to 6 months from initial outline approval to final delivery. Length, research, complexity, and revision timing can affect the schedule."],
  ["What happens if I want significant changes to a draft you deliver?", "Revisions are a normal part of the process. The agreement defines review milestones and included revision rounds, while larger changes that alter the approved outline are scoped transparently before further work begins."],
  ["Can you write in specific niche subgenres, such as cozy mystery or noir?", "Yes. Your project is matched with a writer who understands the chosen subgenre’s conventions, reader expectations, character tone, and appropriate level of violence, darkness, or humor."],
  ["Do you offer assistance after the manuscript is finished, such as book proposals or blurbs?", "Yes. Optional complementary support may include synopsis development, query letters, book proposals, jacket copy, and publishing guidance. These deliverables are defined separately in the project scope."],
  ["What are the pricing details for your confidential mystery and thriller ghostwriting services?", "A full-length mystery, thriller, or crime manuscript typically ranges from $35,000 to over $80,000 USD. The final fixed fee depends on manuscript length, structural complexity, specialist research, timeline, and the writer’s experience."],
];

export function MysteryThrillerCrimePage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero mysteryHero" aria-labelledby="mystery-title">
        <Image className="historicalRomanceImage" src="/images/mystery-thriller-crime-hero.png" alt="A rain-lit investigator's study filled with concealed clues" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Mystery, thriller, and crime ghostwriting</p>
          <h1 id="mystery-title">Master the Art of Suspense: Elite Mystery &amp; Thriller Ghostwriting Services</h1>
          <p>Grip readers from the first page and never let go. We bring disciplined pacing, convincing clues, and memorable reveals to your most ambitious suspense story.</p>
          <Link className="button" href="/contact">Uncover your story <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Meticulous plot architecture", "Confidential collaboration", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent mysteryContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="mystery-intro-title">
          <div><p className="eyebrow">Your vision, our expertise</p><h2 id="mystery-intro-title">Partner with a professional<br /><em>ghostwriter for suspense.</em></h2><p className="romanceLead">When the stakes are high, every scene must tighten the grip and every reveal must feel earned.</p><p>Mystery, thriller, and suspense are fiercely competitive. Readers demand intricate plots, relentless pacing, and characters they cannot forget. Our specialists understand how to control information, conceal the truth, and build toward a satisfying ending.</p><p>Whether your story needs a hard-boiled voice, procedural precision, or the complex psychology of modern suspense, we combine genre expertise with your idea and your voice.</p><Link className="fictionTextLink" href="/contact">Tell us what happens next <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft mysteryCraft"><Fingerprint size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Defining the dark side</p><h3>A puzzle with purpose.<br />Suspense with a pulse.</h3>{[["Fair-play revelations", "Clues and red herrings are placed so the ending surprises without feeling arbitrary."], ["Pressure that keeps rising", "Scene-level stakes, deadlines, and reversals sustain momentum across the manuscript."], ["A credible human motive", "The mystery matters because the people inside it have something real to lose."]].map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="romanceSpecialties mysterySpecialties" aria-labelledby="mystery-specialties-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">The keywords are varied because the craft is varied</p><h2 id="mystery-specialties-title">Specialized ghostwriting expertise<br />for every kind of suspense.</h2><p>The right writer understands the subtle distinctions between thriller, mystery, crime, and suspense.</p></div><div className="mysterySpecialtyGrid">{specialties.map(section => <article key={section.title}><p className="mysteryNumber">0{specialties.indexOf(section) + 1}</p><h3>{section.title}</h3><h4>{section.subtitle}</h4><p>{section.text}</p><ul>{section.items.map(([title, text]) => <li key={title}><strong>{title}</strong><span>{text}</span></li>)}</ul></article>)}</div></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="mystery-process-title"><div className="romanceSectionHeading"><p className="eyebrow">Our proven process</p><h2 id="mystery-process-title">The framework for<br /><em>a bestselling manuscript.</em></h2><p>Professional ghostwriting is a disciplined partnership that channels your voice and vision through a controlled structure.</p></div><ol className="romanceSteps">{steps.map(([title, text], index) => <li key={title}><span className="romanceStepNumber">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>
        <section className="romanceInvestment romanceWrap mysteryInvestment" aria-labelledby="mystery-value-title"><div><p className="eyebrow">Investment and value</p><h2 id="mystery-value-title">Serious expertise for<br /><em>serious authors.</em></h2><p>Thriller ghostwriting reflects the specialist work behind airtight plots, credible research, character development, and high word counts. A detailed proposal gives you clarity on milestones, revisions, and the fixed investment.</p><Link className="button" href="/contact">Scope your manuscript <ArrowRight size={17} /></Link></div><div className="mysteryValueList">{valuePoints.map(([title, text]) => <article key={title}><Check size={18} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
        <section className="mysteryReady romanceWrap"><p className="eyebrow">Ready to unleash your next bestseller?</p><h2>A brilliant premise is only an idea<br /><em>until the story is expertly told.</em></h2><p>Start with a confidential conversation about your mystery, thriller, crime, or suspense novel.</p><Link className="fictionTextLink" href="/contact">Start the investigation <ArrowRight size={17} /></Link></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="mystery-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="mystery-faq-title">Every detail matters.<br /><em>Here are the answers.</em></h2><p>What serious authors need to know before engaging a mystery or thriller ghostwriter.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing mysteryClosing"><p className="eyebrow">The first clue starts here</p><h2>Create the book readers cannot put down.</h2><p>Bring the premise. We’ll help engineer the tension, clues, and final reveal.</p><Link className="button" href="/contact">Begin your manuscript <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
