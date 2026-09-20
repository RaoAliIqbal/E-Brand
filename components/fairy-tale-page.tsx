import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plus, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["A simple, powerful desire", "The protagonist wants something elemental—freedom, belonging, safety, love, justice, or home—giving the most magical events an immediate human meaning."],
  ["Magic with a moral logic", "Wishes, bargains, curses, transformations, and gifts follow clear consequences so wonder feels mysterious while the story remains satisfying."],
  ["Hope earned through courage", "A joyful ending carries weight because the hero has faced fear, recognized truth, shown kindness, or changed in a way the reader can believe."],
];

const forms = [
  ["Original fairy tales", "New kingdoms, creatures, enchantments, and heroes use timeless story logic without borrowing an existing plot."],
  ["Retellings and reversals", "A familiar tale is transformed through a different viewpoint, culture, setting, genre, or question about who deserves the happy ending."],
  ["Dark and literary fairy tales", "Older readers can explore ambiguity, sacrifice, desire, danger, and transformation through symbolic, atmospheric storytelling."],
];

const steps = [
  ["Story seed and intended reader", "We define the audience, central wish or fear, emotional lesson, tone, target length, and the image or transformation at the heart of the tale."],
  ["Wonder map and rule of three", "The outline shapes trials, helpers, magical objects, bargains, repetition, reversals, and the cause-and-effect logic behind every enchantment."],
  ["Drafting with oral-story rhythm", "The writer develops vivid, economical language, memorable patterns, and images that invite reading aloud while leaving room for the reader’s imagination."],
  ["Mythic and audience review", "Editing checks clarity, symbolism, age fit, sensitivity, rhythm, narrative justice, and whether the ending delivers a meaningful sense of wonder."],
];

const faqs = [
  ["Can your writers create a completely original fairy tale?", "Yes. We can invent the world, magical rules, characters, conflict, symbols, and ending around your message or initial idea while avoiding dependence on an existing story."],
  ["Can you write a modern retelling of a traditional tale?", "Yes. We can reinterpret public-domain tales through a new culture, setting, point of view, genre, or moral question while giving the finished work its own identity."],
  ["Do fairy tales always need a moral or happy ending?", "They need meaningful consequences, but the tone can range from cheerful and reassuring to dark, bittersweet, or literary. The intended reader and purpose determine how hope and justice appear."],
  ["Can the story be planned for illustrations or a picture-book format?", "Yes. For illustrated projects, we can structure spreads, page turns, visual reveals, repetition, and concise art notes so text and images share the storytelling."],
  ["How long does it take to write a fairy tale?", "A short illustrated tale may take several weeks, while a longer chapter book, collection, or literary retelling can take 3 to 6 months depending on scope, revisions, and editorial needs."],
  ["Will I own the completed fairy-tale manuscript?", "Yes. You retain final creative approval, and the completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function FairyTalePage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero fairyTaleHero" aria-labelledby="fairy-tale-title">
        <Image className="historicalRomanceImage" src="/images/fairy-tale-hero.jpg" alt="A reader surrounded by enchanted books, castles, and starlight" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Fairy-tale ghostwriting</p><h1 id="fairy-tale-title">Magical Fairy Tale Writing Services to Bring Enchanting Stories to Life</h1><p>Create a timeless tale of wonder, danger, transformation, and hope for young readers or grown-up dreamers.</p><Link className="button" href="/contact">Begin your fairy tale <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Original magical worlds", "Age-aware storytelling", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent fairyTaleContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="fairy-intro-title"><div><p className="eyebrow">Where wonder carries meaning</p><h2 id="fairy-intro-title">Fairy tales that feel<br /><em>both timeless and new.</em></h2><p className="romanceLead">A fairy tale invites the impossible, then uses it to illuminate a wish, fear, virtue, or truth the reader already understands.</p><p>Faraway kingdoms, enchanted forests, impossible bargains, and mysterious helpers remain compelling because the story beneath them is precise and human. Each magical element changes what the hero must choose.</p><p>Our writers combine imaginative invention with archetypal structure, audience awareness, and a distinctive voice to create a tale that feels inevitable only after it has surprised you.</p><Link className="fictionTextLink" href="/contact">Tell us the wish at the center <ArrowRight size={17} /></Link></div><aside className="romanceCraft fairyTaleCraft"><Sparkles size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">The logic of enchantment</p><h3>Wonder, consequence,<br />and hope.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="fairyTaleForms romanceWrap" aria-labelledby="fairy-forms-title"><div><p className="eyebrow">Old patterns, new possibilities</p><h2 id="fairy-forms-title">Choose the kind of magic<br /><em>your story needs.</em></h2><p>A tale can comfort, caution, delight, unsettle, or transform depending on its audience and purpose.</p></div><div className="fairyTaleFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties fairyTaleProcess" aria-labelledby="fairy-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From once upon a time to ever after</p><h2 id="fairy-process-title">A disciplined process<br />for effortless enchantment.</h2><p>Audience, archetype, magical logic, imagery, and emotional purpose stay connected at every stage.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap fairyTaleInvestment" aria-labelledby="fairy-value-title"><div><p className="eyebrow">A world where every object can matter</p><h2 id="fairy-value-title">Magic designed around<br /><em>the heart of the tale.</em></h2><p>Your proposal defines concept development, audience, target length, structural planning, illustration notes when needed, milestone drafts, revisions, and editorial review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What holds the magic together</h3><ul>{["A clear emotional wish or fear", "Consistent bargains, curses, and consequences", "Memorable patterns and symbolic imagery", "Language suited to the intended reader", "An ending that fulfills the story’s promise"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="fairy-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="fairy-faq-title">The story can be magical.<br /><em>The process stays clear.</em></h2><p>Answers about original tales, retellings, morals, illustration planning, timelines, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing fairyTaleClosing"><p className="eyebrow">Every kingdom begins with one impossible thing</p><h2>Write the tale readers will carry into the dark.</h2><p>Bring the wish, the curse, the creature, or the doorway into another world.</p><Link className="button" href="/contact">Create your fairy tale <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
