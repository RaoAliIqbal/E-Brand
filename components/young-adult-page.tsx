import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const voiceSkills = [
  ["Authenticity of voice", "A successful YA narrator sounds like a contemporary teenager thinks, speaks, and feels—with emotional intensity, relevant dialogue, captured internal monologue, and no condescension."],
  ["Pacing and structure", "A strong hook introduces action or an emotional dilemma early. Escalating conflict intensifies with every chapter and leads to an emotionally meaningful resolution."],
  ["Genre-specific expertise", "YA fantasy, romance, contemporary, mystery, and science fiction each require distinct conventions, world-building choices, and audience expectations."],
];
const voiceDetails = [
  ["Emotional intensity", "Every challenge feels immediate and consequential, from personal identity to world-changing stakes."],
  ["Relevant dialogue", "Current speech patterns and idioms remain natural, specific, and free from forced trend-chasing."],
  ["Internal monologue", "The narration captures humor, uncertainty, longing, and self-discovery with clarity and respect."],
];
const steps = [
  ["Trend vetting and concept refinement", "We discuss current market context, familiar tropes, character archetypes, and audience expectations, then refine the concept so it feels timely without chasing a short-lived trend."],
  ["Structural blueprint", "A chapter-by-chapter outline maps the hook, escalating conflict, relationship arcs, internal transformation, and emotional climax. This roadmap protects pacing while leaving room for discovery."],
  ["Drafting with intensity", "The writer develops a voice that is immediate, honest, and emotionally raw. Regular milestones give you opportunities to review the prose and keep character, tone, and story aligned."],
  ["Market-focused editorial review", "Specialist editing tests voice authenticity and pacing. Dated phrases, cultural references, and weak emotional stakes are revised so the finished novel connects with today’s readers."],
];
const support = [
  ["YA fantasy ghostwriter and world-building", "Magic, dystopian rules, and speculative worlds are developed with enough clarity for teen readers without burying the story beneath exposition."],
  ["YA romance ghostwriter and emotional depth", "Relationships are shaped through authentic tension, vulnerability, and satisfying emotional progression in contemporary, historical, or paranormal settings."],
  ["A consistent writer for a complete series", "Long-term character continuity, voice, world rules, and evolving arcs are tracked across multiple books for scalable series development."],
];
const faqs = [
  ["What is the typical cost for YA novel ghostwriting services?", "Professional YA novel ghostwriting generally ranges from $30,000 to over $65,000 USD. The final scope depends on word count, fantasy or science-fiction world-building, contemporary research, emotional complexity, and editorial support."],
  ["How long does it take to hire young adult fiction ghostwriter services and complete the book?", "A high-quality YA novel typically takes 4 to 6 months, including concept refinement, structural planning, drafting, milestone reviews, and professional editing. Some contemporary projects may finish sooner than complex fantasy or historical stories."],
  ["How do you ensure the young adult ghostwriter captures a modern, authentic teenage voice?", "Writers are selected for their fluency with current YA expectations and their ability to write with emotional immediacy. Early samples, milestone feedback, and a tonal review guard against language that feels dated or inauthentic."],
  ["Can I hire a YA fantasy ghostwriter or YA romance ghostwriter specifically?", "Yes. Your project is matched to a specialist in its primary genre. Hybrid stories are paired with writers who understand how to balance world-building or mystery with personal, character-driven YA stakes."],
  ["Is your service suitable for writing a trilogy or series?", "Yes. A consistent writer and series reference can track voice, character arcs, future conflicts, and world rules across multiple volumes while ensuring each book has a satisfying structure of its own."],
  ["Do your ghostwriters for teenage novels help with sensitive or contemporary social issues?", "Yes. Specialists can address identity, mental health, social justice, relationships, and other contemporary themes with research, empathy, age-appropriate framing, and respect for the intended audience."],
  ["What is the ideal word count for a young adult book?", "Most YA novels fall between 70,000 and 90,000 words. Fantasy or science fiction can occasionally extend further, but the final target should support the story’s pace, complexity, genre, and audience rather than length for its own sake."],
];

export function YoungAdultPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero youngAdultHero" aria-labelledby="young-adult-title">
        <Image className="historicalRomanceImage" src="/images/young-adult-hero.png" alt="A group of older teenagers sharing a rooftop evening above a modern city" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Young adult novel ghostwriting</p>
          <h1 id="young-adult-title">Young Adult Novel Ghostwriting Services for Modern Storytellers</h1>
          <p>Capture the voice, energy, and emotional truth of the next generation with a story that feels immediate, relevant, and impossible to put down.</p>
          <Link className="button" href="/contact">Shape your YA story <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Authentic teenage voice", "Market-aware storytelling", "Your vision and ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent youngAdultContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="ya-intro-title">
          <div><p className="eyebrow">Tomorrow’s bestseller starts with a true voice</p><h2 id="ya-intro-title">Expert young adult ghostwriting<br /><em>for modern readers.</em></h2><p className="romanceLead">The YA market demands an intimate understanding of teenage concerns, fast-moving storytelling, and emotionally honest characters.</p><p>A successful young adult novel explores self-discovery, first love, friendship, family, and the dream of navigating a rapidly changing world without speaking down to its readers.</p><p>Our specialists combine genre knowledge and market awareness with your unique concept, whether it is a gripping dystopian story, heartwarming romance, or high-concept contemporary novel.</p><Link className="fictionTextLink" href="/contact">Tell us about your readers <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft youngAdultCraft"><MessageCircle size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Mastering the teenage voice</p><h3>Immediate, honest,<br />and emotionally alive.</h3>{voiceSkills.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="yaVoice romanceWrap" aria-labelledby="ya-voice-title"><div><p className="eyebrow">The voice readers believe</p><h2 id="ya-voice-title">Respect the audience.<br /><em>Earn their attention.</em></h2><p>Authenticity comes from understanding the emotional stakes behind the language.</p></div><div className="yaVoiceGrid">{voiceDetails.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceSpecialties yaProcess" aria-labelledby="ya-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">A professional young adult book company process</p><h2 id="ya-process-title">From a timely concept<br />to a confident final manuscript.</h2><p>The process is designed for collaboration, market relevance, speed, and a voice that stays true from beginning to end.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="ya-support-title"><div className="romanceSectionHeading"><p className="eyebrow">Beyond the manuscript</p><h2 id="ya-support-title">Specialist services for<br /><em>the story and the series.</em></h2><p>Genre-specific support helps your book connect with its audience and remain consistent across a larger publishing plan.</p></div><div className="yaSupportGrid">{support.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceInvestment romanceWrap yaInvestment" aria-labelledby="ya-value-title"><div><p className="eyebrow">A timely, unforgettable, deeply resonant novel</p><h2 id="ya-value-title">Your concept.<br /><em>Their emotional world.</em></h2><p>Strong YA fiction balances a high-concept premise with clear character growth. Your fixed proposal defines concept development, outline, writing milestones, revisions, and specialist editing before work begins.</p><Link className="button" href="/contact">Discuss your YA manuscript <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we protect throughout</h3><ul>{["A credible, contemporary narrative voice", "Fast hooks and escalating stakes", "Character growth and emotional payoff", "Age-appropriate handling of sensitive themes", "Series continuity and market fit"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="ya-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="ya-faq-title">Young readers know<br /><em>when a story is real.</em></h2><p>Answers about voice, cost, timing, genre specialists, series planning, and sensitive themes.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing yaClosing"><p className="eyebrow">The next generation is ready</p><h2>Write the story they will carry with them.</h2><p>Bring the idea, the character, or the moment that changes everything.</p><Link className="button" href="/contact">Begin your YA novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
