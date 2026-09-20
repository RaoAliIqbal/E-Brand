import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const craft = [
  ["Tonal precision and subtlety", "The magic must feel normalized. A character may fly to work without astonishment, while the prose describes the impossible with calm, matter-of-fact confidence."],
  ["Emotional resonance over plot mechanics", "A magical event reflects the inner state of a character, a family history, or the social reality of a community. Feeling and metaphor lead; explanation stays secondary."],
  ["Sensory detail and setting as character", "A specific town, neighborhood, or ancestral home is rendered with tactile and authentic detail, creating a firm foundation for the subtle magic."],
];
const comparison = [
  ["Setting", "Grounded in the real world and cultural history", "Often a highly fragmented dream-logic world"],
  ["Tone", "Objective and matter-of-fact; magic is natural", "Subjective and chaotic; reality itself is questioned"],
  ["Logic", "Magic follows an internal, often emotional metaphor", "The rules are deliberately illogical, non-causal, and purely thematic"],
];
const steps = [
  ["Conceptual alchemy and metaphor mapping", "An intensive consultation defines the real-world setting and, most importantly, what the magic means. A metaphor map connects each magical element to a specific emotion, memory, or social theme."],
  ["Building the authentic anchor", "We develop the environment, culture, and history that ground the novel. The community feels tangible and believable, so the arrival of magic can feel like an accepted part of everyday life."],
  ["Drafting with lyrical precision", "The manuscript uses lyrical yet restrained prose, focusing on sensory detail, emotional introspection, and the seamless integration of magical events without conventional explanation."],
  ["Tonal review and refinement", "Developmental and copy editing concentrate on tonal consistency, ensuring that the magical elements remain subtle and objective while the narrative’s emotional core stays clear and powerful."],
];
const writerSkills = [
  ["Allegory and symbolism", "Rain, birds, colors, seasons, and recurring objects can embody generational trauma, hope, desire, or deep love."],
  ["Complex family sagas", "Multiple generations, ancestral memory, and inherited emotion are shaped into a coherent literary narrative."],
  ["Cultural and historical sensitivity", "Research and context support specific communities and histories without flattening their meaning or turning them into decoration."],
];
const faqs = [
  ["What is the estimated cost for your magical realism ghostwriting services?", "The investment for a high-level magical realism novel typically ranges from $35,000 to over $75,000 USD. The final scope reflects cultural research, metaphorical complexity, manuscript length, and the literary level of prose and editing required."],
  ["What is the timeline to hire ghostwriters for magical realism books and complete a manuscript?", "A polished magical realism novel typically takes 5 to 7 months. This provides time for conceptual alignment, authenticity research, metaphor mapping, drafting, review milestones, and tonal editing."],
  ["How do you ensure magic doesn’t turn the story into traditional fantasy?", "Magic is never explained, questioned, or treated as the central conflict. Instead, it appears naturally and serves a metaphorical or emotional purpose. Tonal review ensures the story remains grounded in recognizable reality."],
  ["Can your surreal fantasy novel ghostwriters handle my unique, experimental concept?", "Yes. During consultation, we determine whether the concept aligns more closely with magical realism’s subtle emotional focus or with surreal fantasy’s fragmented, dream-logic framework, then match the writer and structure accordingly."],
  ["Is your magical realism writing service suitable for cultural or family sagas?", "Yes. Magical realism is especially effective for family sagas and narratives rooted in historical or cultural contexts. Our process gives ancestral memory, cultural mythology, and inherited emotion the care they need."],
  ["Do your ghostwriters have experience with specific cultural settings?", "We prioritize matching the project with a writer whose experience or research background fits the required setting. When specialized knowledge is needed, the scope includes appropriate research and contextual review."],
  ["What sets your magical realism writers apart from other literary ghostwriters?", "They understand the genre’s restraint: lyrical language must serve the story, magic must feel ordinary, and the emotional reality must remain stronger than spectacle. That combination of literary craft and tonal discipline is highly specialized."],
];

export function MagicalRealismPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero magicalRealismHero" aria-labelledby="magical-realism-title">
        <Image className="historicalRomanceImage" src="/images/magical-realism-hero.png" alt="Golden butterflies drifting through an ordinary sunlit courtyard" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy">
          <p className="eyebrow">Magical realism novel writing</p>
          <h1 id="magical-realism-title">Professional Magical Realism Novel Writing Services</h1>
          <p>Give your beautiful, subtle story the literary care it deserves. We help the marvelous enter the everyday with restraint, meaning, and emotional truth.</p>
          <Link className="button" href="/contact">Share your marvelous idea <ArrowRight size={18} /></Link>
        </div>
      </section>
      <section className="pagePromise">{["Lyrical, restrained prose", "Culturally grounded storytelling", "Your voice and ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>
      <div className="romanceContent magicalRealismContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="magical-intro-title">
          <div><p className="eyebrow">Crafting the everyday marvelous</p><h2 id="magical-intro-title">Magical realism ghostwriting<br /><em>with literary distinction.</em></h2><p className="romanceLead">The miraculous enters a real, recognizable world—and is accepted as natural, unquestioned fact.</p><p>Magical realism is a delicate literary form. Unlike traditional fantasy, its magical elements do not become an extraordinary adventure or a separate world. They reveal emotional, cultural, or historical truths within everyday life.</p><p>Our writers balance the tangible and fantastical through stories about a town where rain falls when someone is grieving, a family whose ancestors speak through the scent of cooking spices, or a quiet impossible event that exposes a larger truth.</p><Link className="fictionTextLink" href="/contact">Explore your story with us <ArrowRight size={17} /></Link></div>
          <aside className="romanceCraft magicalCraft"><Sparkles size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The specialization of a magical realism ghostwriter</p><h3>Restraint in the magic.<br />Depth in its meaning.</h3>{craft.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside>
        </section>
        <section className="magicalComparison romanceWrap" aria-labelledby="magical-comparison-title"><div className="romanceSectionHeading"><p className="eyebrow">A precise narrative language</p><h2 id="magical-comparison-title">Magical realism<br /><em>and surreal fantasy.</em></h2><p>Both allow the strange into fiction, but they ask the reader to understand reality in very different ways.</p></div><div className="magicalTable"><div className="magicalTableHead"><span>Feature</span><span>Magical realism</span><span>Surreal fantasy</span></div>{comparison.map(row => <div className="magicalTableRow" key={row[0]}>{row.map((cell, index) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}>{cell}</span>)}</div>)}</div></section>
        <section className="romanceSpecialties magicalProcess" aria-labelledby="magical-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">Our proven process</p><h2 id="magical-process-title">From emotional metaphor<br />to a finished literary novel.</h2><p>The work is collaborative and focused on defining the metaphorical framework before the writing begins.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>
        <section className="romanceProcess romanceWrap" aria-labelledby="magical-writers-title"><div className="romanceSectionHeading"><p className="eyebrow">Finding the right writer for your vision</p><h2 id="magical-writers-title">Literary sensitivity.<br /><em>Cultural understanding.</em></h2><p>Your writer needs the poetic touch and thematic control to handle complex ideas with grace.</p></div><div className="magicalSkillGrid">{writerSkills.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
        <section className="romanceInvestment romanceWrap magicalInvestment" aria-labelledby="magical-investment-title"><div><p className="eyebrow">Investment in literary distinction</p><h2 id="magical-investment-title">A higher level of prose<br /><em>and thematic clarity.</em></h2><p>Magical realism demands craftsmanship beyond ordinary genre work. The time reflects conceptual development, cultural study, metaphorical consistency, and the precise handling of lyrical prose.</p><p>Your fixed proposal defines preliminary concept work, drafting, review stages, and editing, with a writer selected for both literary excellence and an understanding of this form.</p><Link className="button" href="/contact">Discuss your literary novel <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>A foundation for subtle wonder</h3><ul>{["Metaphor map and thematic framework", "Cultural and historical research", "Sensory setting and family memory", "Lyrical, restrained narrative voice", "Tonal review and editorial refinement"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>
        <section className="romanceFaq romanceWrap" aria-labelledby="magical-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="magical-faq-title">Subtle magic.<br /><em>Thoughtful answers.</em></h2><p>Practical guidance for developing a grounded, culturally rich, and emotionally resonant magical realism novel.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
        <section className="romanceClosing magicalClosing"><p className="eyebrow">The marvelous is already here</p><h2>Tell the story hidden inside the everyday.</h2><p>Begin with a family memory, an ordinary place, or one impossible detail that everyone accepts.</p><Link className="button" href="/contact">Begin your novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
