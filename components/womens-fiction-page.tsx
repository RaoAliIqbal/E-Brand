import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, HeartHandshake, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const specialties = [
  ["Mastering the emotional arc", "The plot grows from the protagonist’s emotional journey: honest interiority, relatable conflict, and a transformation earned through difficult choices."],
  ["The nuance of relationships", "Friendships, sisters, mothers, daughters, colleagues, and romantic partners become layered forces that challenge identity and support change."],
  ["A female protagonist perspective", "The narrative recognizes contemporary pressures, societal expectations, ambition, care, desire, and the emotional labor carried by modern women."],
];

const relationshipDetails = [
  ["Female bonds", "Authentic friendships can provide safety, friction, loyalty, betrayal, and a powerful source of personal change."],
  ["Family complexity", "Generational dynamics, inherited expectations, and changing roles shape the protagonist’s sense of self."],
  ["Mature romance", "When present, romance complements the heroine’s growth rather than replacing or defining it."],
];

const steps = [
  ["Emotional mapping and character crisis", "We define the protagonist’s inner conflict, the story she tells herself, and the emotional goal she must reach, anchoring the novel in a credible personal journey."],
  ["Structural design for introspection", "The outline balances external events with space for memory, reflection, relationships, and the smaller moments that reveal lasting change."],
  ["Drafting with empathy and voice", "A warm, intelligent, immersive voice draws readers deep into the protagonist’s experience. Milestone drafts let you review emotional truth, pacing, and character chemistry."],
  ["Relationship and emotional consistency review", "Specialist editing tests relationship authenticity, emotional continuity, motivation, and whether the final resolution feels truly earned."],
];

const tiers = [
  ["Best professional tier", "For major commercial ambitions, award-minded work, accelerated schedules, or complex emotional and thematic demands."],
  ["Focused professional tier", "For a clearly defined concept that needs experienced storytelling, strong editorial support, and an efficient production plan."],
];

const faqs = [
  ["What is the typical cost to ghostwrite women’s fiction?", "A standard women’s fiction novel generally ranges from $35,000 to over $70,000 USD. The final scope depends on manuscript length, emotional complexity, number of viewpoint characters, research needs, revisions, and editorial support."],
  ["How long do your women’s fiction writing services take to complete a novel?", "Most professionally developed women’s fiction novels take 4 to 6 months, including emotional mapping, structural development, milestone drafting, revisions, and specialist editing."],
  ["How do you ensure contemporary women’s fiction captures a modern, authentic voice?", "We select writers with strong awareness of current social, cultural, and relationship dynamics. Early samples and milestone reviews ensure the voice remains specific, credible, empathetic, and true to your intended audience."],
  ["Can I request a female protagonist fiction ghostwriter for a specific age group?", "Yes. Writer matching considers the protagonist’s age, life stage, themes, cultural context, and emotional perspective, whether the story centers on her thirties, midlife, later life, or a multigenerational cast."],
  ["What distinguishes women’s fiction from romance in your services?", "Women’s fiction centers the protagonist’s personal growth and transformation. Romance may be part of the story, but the resolution depends on her broader emotional journey rather than a romantic ending alone."],
  ["Who are the best women fiction ghostwriters for hire in your agency, and who owns the rights?", "Your project is matched with a vetted specialist whose portfolio fits its voice and themes. You retain final creative approval, and the completed manuscript and agreed rights transfer to you under the work-for-hire contract."],
  ["Can your women fiction book writing service integrate complex social issues or history?", "Yes. The story can incorporate reproductive rights, mental health, social justice, historical context, cultural identity, and other issues through careful research and character-driven storytelling."],
];

export function WomensFictionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero womensFictionHero" aria-labelledby="womens-fiction-title">
        <Image className="historicalRomanceImage" src="/images/womens-fiction-hero.jpg" alt="A mature woman writing among books in a warm library" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Women’s fiction ghostwriting</p><h1 id="womens-fiction-title">Top Women’s Fiction Ghostwriting Company for Aspiring Authors</h1><p>Create an emotionally resonant novel about relationships, resilience, identity, and the choices that shape a woman’s life.</p><Link className="button" href="/contact">Develop your story <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Authentic female perspective", "Emotionally layered storytelling", "Your vision and ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent womensFictionContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="women-intro-title"><div><p className="eyebrow">The art of emotional depth</p><h2 id="women-intro-title">Women’s fiction ghostwriting<br /><em>with heart and truth.</em></h2><p className="romanceLead">The most memorable women’s fiction turns intimate emotional change into a story with universal power.</p><p>These novels explore growth, family, friendship, work, love, loss, reinvention, and the identities women build across a lifetime. Every external event matters because of what it asks the protagonist to confront within herself.</p><p>Our specialists combine deep character insight with commercial storytelling, creating a manuscript that feels personal, relevant, and impossible to dismiss.</p><Link className="fictionTextLink" href="/contact">Tell us about your protagonist <ArrowRight size={17} /></Link></div><aside className="romanceCraft womensCraft"><HeartHandshake size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Voice and vulnerability</p><h3>Honest, relatable,<br />and deeply felt.</h3>{specialties.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="womensRelationships romanceWrap" aria-labelledby="women-relationships-title"><div><p className="eyebrow">The people who shape us</p><h2 id="women-relationships-title">Relationships with<br /><em>history and consequence.</em></h2><p>Emotional truth lives in the shifting space between independence and connection.</p></div><div className="womensRelationshipGrid">{relationshipDetails.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties womensProcess" aria-labelledby="women-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">Our unique methodology</p><h2 id="women-process-title">A strong narrative structure<br />built around emotional truth.</h2><p>The process protects the balance between high emotionality, believable relationships, and forward narrative movement.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap womensInvestment" aria-labelledby="women-value-title"><div><p className="eyebrow">Best women fiction ghostwriters for hire</p><h2 id="women-value-title">The right partner for<br /><em>the story only you can tell.</em></h2><p>Your project is matched by voice, emotional range, themes, and audience. A transparent proposal defines concept work, drafting, milestones, revisions, and editorial review before the engagement begins.</p><Link className="button" href="/contact">Request your proposal <ArrowRight size={17} /></Link></div><div className="womensTierGrid">{tiers.map(([title, text]) => <article key={title}><p className="eyebrow">{title}</p><h3>{title.startsWith("Best") ? "Expansive, premium support" : "A clear and efficient scope"}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="women-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="women-faq-title">Personal stories need<br /><em>a trusted process.</em></h2><p>Answers about cost, timing, authentic voice, age-specific perspective, romance, ownership, and complex themes.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing womensClosing"><p className="eyebrow">A story of strength, change, and connection</p><h2>Write the journey readers will recognize as their own.</h2><p>Bring the woman, the turning point, or the relationship at the heart of your novel.</p><Link className="button" href="/contact">Begin your women’s fiction novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
