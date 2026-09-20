import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const principles = [
  ["Age-appropriate precision", "Vocabulary, sentence length, humor, conflict, and emotional complexity are matched to the reader’s developmental stage without talking down to them."],
  ["Wonder with a clear purpose", "Playful characters, charming details, and imaginative worlds support a strong emotional idea that young readers can understand and remember."],
  ["Words designed for the page", "Text length, page turns, illustration opportunities, repetition, and read-aloud rhythm are planned together from the beginning."],
];

const formats = [
  ["Picture books", "Concise language and visual page turns create a complete story that rewards repeated reading and leaves room for the illustrator."],
  ["Early readers and chapter books", "Controlled vocabulary, short chapters, forward motion, and recurring characters support independence and reading confidence."],
  ["Middle-grade fiction", "Layered plots, friendships, family, humor, discovery, and growing independence meet readers ready for deeper emotional stakes."],
];

const steps = [
  ["Reader, message, and concept", "We define the age band, reading context, emotional takeaway, story promise, target length, and the central character young readers will want to follow."],
  ["Page or chapter architecture", "A detailed map places conflict, repetition, reveals, page turns, illustration moments, and the satisfying emotional resolution."],
  ["Drafting with voice and delight", "The writer develops clear, musical language and memorable characters. Milestone review keeps tone, pace, humor, and lesson aligned with your intention."],
  ["Child-centered editorial review", "The manuscript is checked for developmental fit, clarity, read-aloud flow, sensitivity, consistency, visual opportunity, and unnecessary complexity."],
];

const faqs = [
  ["What age groups do your children’s book writers support?", "We work across picture books, early readers, chapter books, and middle-grade fiction. The recommended length, vocabulary, structure, and themes are tailored to the exact developmental audience."],
  ["Can you help if I only have a character or a lesson in mind?", "Yes. We can turn a character, message, family experience, educational idea, or rough premise into a complete concept, outline, and age-appropriate manuscript."],
  ["Do you plan the text around illustrations and page turns?", "Yes. For illustrated formats, the manuscript can include page or spread breaks and concise art notes, allowing the pictures to contribute information rather than merely repeat the words."],
  ["How do you keep an educational children’s book entertaining?", "The story comes first. Information or a positive message is carried by character goals, humor, surprise, pattern, and emotional change so the book feels engaging rather than instructional."],
  ["How long does it take to write a children’s book?", "A picture-book manuscript may take several weeks, while chapter books and middle-grade novels commonly take 3 to 6 months. Timing depends on length, development needs, revisions, and illustration planning."],
  ["Will I own the finished children’s book manuscript?", "Yes. You retain final creative approval, and the completed manuscript and agreed rights transfer to you under the work-for-hire terms in your contract."],
];

export function ChildrenPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero childrenHero" aria-labelledby="children-title">
        <Image className="historicalRomanceImage" src="/images/children-hero.jpg" alt="A children’s author and illustrator creating a colorful storybook world" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Children’s book ghostwriting</p><h1 id="children-title">Professional Children’s Book Writing Services for Young Readers</h1><p>Create a joyful, meaningful book with age-appropriate language, memorable characters, and a story children will ask to hear again.</p><Link className="button" href="/contact">Develop your children’s book <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Age-aware storytelling", "Illustration-ready structure", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent childrenContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="children-intro-title"><div><p className="eyebrow">Simple on the page, precise beneath it</p><h2 id="children-intro-title">Children’s stories that<br /><em>delight and encourage.</em></h2><p className="romanceLead">Writing for children asks every word to carry clarity, charm, rhythm, and respect for a developing mind.</p><p>The best books invite laughter, curiosity, confidence, and empathy. Their language feels effortless because the writer has carefully balanced vocabulary, pacing, repetition, character, and the relationship between text and image.</p><p>Our specialists shape your idea for its intended age group while protecting the warmth, message, and imagination that made you want to tell it.</p><Link className="fictionTextLink" href="/contact">Tell us who the book is for <ArrowRight size={17} /></Link></div><aside className="romanceCraft childrenCraft"><Sparkles size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Writing for young minds</p><h3>Bright, purposeful,<br />and made to be shared.</h3>{principles.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="childrenFormats romanceWrap" aria-labelledby="children-formats-title"><div><p className="eyebrow">A form for every growing reader</p><h2 id="children-formats-title">Meet children at<br /><em>the right reading moment.</em></h2><p>Each format has its own relationship between language, image, pace, independence, and emotional depth.</p></div><div className="childrenFormatGrid">{formats.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties childrenProcess" aria-labelledby="children-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From first idea to favorite book</p><h2 id="children-process-title">A child-centered process<br />for story and language.</h2><p>Audience, emotional purpose, visual pacing, and narrative craft stay connected through every stage.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap childrenInvestment" aria-labelledby="children-value-title"><div><p className="eyebrow">A responsibility and a joy</p><h2 id="children-value-title">A manuscript created<br /><em>with young readers in mind.</em></h2><p>Your proposal defines concept development, target length, page or chapter planning, milestone drafts, revisions, art-note requirements, and editorial review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we consider throughout</h3><ul>{["Reader age and developmental fit", "Read-aloud rhythm and vocabulary", "Page turns and illustration opportunities", "Positive themes without heavy-handed lessons", "Sensitivity, inclusion, and emotional safety"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="children-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="children-faq-title">Big imagination.<br /><em>Clear next steps.</em></h2><p>Answers about age groups, concept development, illustration planning, education, timing, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing childrenClosing"><p className="eyebrow">A young reader is waiting</p><h2>Write the story that becomes part of childhood.</h2><p>Bring the character, lesson, adventure, or bedtime idea you want children to carry with them.</p><Link className="button" href="/contact">Begin your children’s book <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
