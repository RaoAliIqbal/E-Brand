import Link from "next/link";
import { FictionBooks } from "@/components/fiction-books";
import { ArrowRight, Heart, Feather, BookOpen, Check, Plus } from "lucide-react";

const steps = [
  { title: "Find your voice", text: "We start with your idea, your characters, and the feeling you want readers to carry with them. Writing samples and thoughtful conversations help us understand your tone, from witty and playful to intimate and sweeping." },
  { title: "Map the emotional journey", text: "Together, we outline the attraction, the obstacles, the turning points, and the ending. This emotional blueprint gives the relationship room to grow and makes every important moment feel earned." },
  { title: "Build chemistry on the page", text: "Your manuscript takes shape in stages, with opportunities to review the dialogue, pacing, and character dynamics. Your feedback guides the writing as we bring the romantic and external conflicts together." },
  { title: "Refine every chapter", text: "We strengthen the story through revision, checking character consistency, emotional payoff, and the flow of the prose. Editorial support is agreed as part of your project scope and publishing plans." },
];

const questions = [
  { question: "How much does romance ghostwriting cost?", answer: "Every story has a different scope. Word count, research, the condition of your existing material, and the editorial support you need all influence the cost. Contact Storybound House for a proposal tailored to your manuscript, with the deliverables and payment terms clearly outlined." },
  { question: "How long will my romance novel take?", answer: "Your schedule depends on manuscript length, research, revisions, and the time available for your feedback. We establish a project timeline with you before work begins. Historical settings, intricate world-building, and interconnected series may require additional development." },
  { question: "How will you capture my voice?", answer: "We explore your preferred tone, point of view, character backstories, and any writing samples you have. Reviewing the manuscript in stages gives you an opportunity to shape the voice and chemistry early, then refine them as the story develops." },
  { question: "Can you help plan a romance series?", answer: "Yes. We can help map the larger series arc alongside each book’s central relationship. Planning character histories, recurring settings, and unresolved threads helps keep the world consistent while giving every couple a satisfying story of their own." },
  { question: "Will the book be published under my name?", answer: "The manuscript is developed for you to publish under your name. Ownership, confidentiality, and the handover of materials are set out in your project agreement, so you can review the terms before the collaboration begins." },
  { question: "Can I start with just an idea or a partial draft?", answer: "Absolutely. Bring us a premise, a character pairing, an outline, or an unfinished manuscript. We will review what you have and recommend the next steps, whether that means developing the concept, completing the draft, or revising the story." },
];

export function RomanceOverview() {
  return (
    <div className="romanceContent">
      <section className="romanceIntro romanceWrap" aria-labelledby="romance-intro-title">
        <div>
          <p className="eyebrow">Romance, thoughtfully written</p>
          <h2 id="romance-intro-title">From the first spark.<br /><em>To the last page.</em></h2>
          <p className="romanceLead">A memorable meet-cute draws readers in. A believable emotional journey makes them stay.</p>
          <p>At Storybound House, we help turn your ideas into love stories with authentic chemistry, layered characters, and an ending that feels earned. Whether your vision is tender, playful, passionate, or sweeping, our collaboration begins with the story you want to tell.</p>
          <p>We balance romantic tension with purposeful plotting, giving your characters both a reason to fall in love and something meaningful to overcome. Throughout the process, your voice and creative direction remain at the heart of the manuscript.</p>
          <Link className="fictionTextLink" href="/contact">Let’s talk about your love story <ArrowRight size={17} /></Link>
        </div>
        <aside className="romanceCraft" aria-label="The heart of a compelling romance">
          <Heart size={30} strokeWidth={1.3} aria-hidden="true" />
          <p className="eyebrow">The heart of the story</p>
          <h3>More than attraction.<br />A connection readers believe.</h3>
          {[
            ["Characters with depth", "Desires, vulnerabilities, and distinct voices that make each lead feel real."],
            ["Tension with purpose", "Inner struggles and external obstacles that move the relationship forward."],
            ["An ending that delivers", "A happily-ever-after or happy-for-now resolution that rewards the journey."],
          ].map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} aria-hidden="true" /><div><h4>{title}</h4><p>{text}</p></div></div>)}
        </aside>
      </section>

      <section className="romanceSpecialties" aria-labelledby="romance-specialties-title">
        <div className="romanceWrap">
          <div className="romanceSectionHeading"><p className="eyebrow">Your world. Your kind of love.</p><h2 id="romance-specialties-title">Every love story has its own setting.</h2><p>We shape the voice, relationship arc, and pacing around your chosen corner of romance.</p></div>
          <div className="romanceGenreGrid">
            {[
              { slug: "contemporary-romance", title: "Contemporary romance", text: "Modern lives, relatable complications, and connections that feel close to home.", Icon: Heart },
              { slug: "historical-romance", title: "Historical romance", text: "Love shaped by another era, with considered research and a vivid sense of place.", Icon: Feather },
              { slug: "paranormal-romance", title: "Paranormal romance", text: "Extraordinary worlds and supernatural stakes, grounded in a believable emotional bond.", Icon: BookOpen },
            ].map(({ slug, title, text, Icon }) => <Link className="romanceGenreCard" href={`/fiction/romance/${slug}`} key={slug}><Icon size={27} strokeWidth={1.4} aria-hidden="true" /><h3>{title}</h3><p>{text}</p><span>Explore this genre <ArrowRight size={16} aria-hidden="true" /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="romanceProcess romanceWrap" aria-labelledby="romance-process-title">
        <div className="romanceSectionHeading"><p className="eyebrow">A creative partnership</p><h2 id="romance-process-title">Your story, chapter by chapter.</h2><p>A clear, collaborative process gives your ideas space to develop—and keeps you involved at every stage.</p></div>
        <ol className="romanceSteps">{steps.map((step, index) => <li key={step.title}><span className="romanceStepNumber" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>

      <section className="romanceInvestment romanceWrap" aria-labelledby="romance-investment-title">
        <div><p className="eyebrow">A proposal built around your book</p><h2 id="romance-investment-title">Thoughtful craft.<br /><em>Clearly defined scope.</em></h2><p>Your story’s length, setting, complexity, and starting point shape the work involved. We’ll discuss these details with you and prepare a tailored proposal so you understand the support, deliverables, and schedule.</p><Link className="button" href="/contact">Discuss your project <ArrowRight size={17} /></Link></div>
        <div className="romanceScope"><h3>What we’ll explore together</h3><ul>{["Your target word count and manuscript stage", "Research, setting, and world-building needs", "Character arcs and standalone or series plans", "Draft reviews, revisions, and editorial support", "Timeline, confidentiality, and ownership terms"].map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul></div>
      </section>

      <section className="romanceFaq romanceWrap" aria-labelledby="romance-faq-title">
        <div><p className="eyebrow">Before we begin</p><h2 id="romance-faq-title">A little clarity for<br /><em>your next chapter.</em></h2><p>Questions about working with a romance ghostwriter? Start here.</p></div>
        <div className="romanceQuestions">{questions.map(({ question, answer }) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="romanceClosing"><p className="eyebrow">Let’s write something worth falling for</p><h2>Your love story starts with a conversation.</h2><p>Bring the spark. We’ll help you find the words.</p><Link className="button" href="/contact">Tell us about your story <ArrowRight size={17} /></Link></section>
      <FictionBooks books={[
        { src: "/images/romance-books/forty-rules-of-love.png", title: "The Forty Rules of Love", author: "Elif Shafak" },
        { src: "/images/romance-books/john-dee.png", title: "John Dee’s Actions with Spirits", author: "Christopher Whitby" },
        { src: "/images/romance-books/off-the-rebound.png", title: "Off the Rebound", author: "J.D. Nero" },
        { src: "/images/romance-books/robinson-crusoe.png", title: "Robinson Crusoe", author: "Daniel Defoe" },
      ]} />
    </div>
  );
}
