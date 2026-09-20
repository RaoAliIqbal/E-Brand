import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Map, Plus } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

const foundations = [
  ["Place as a living character", "Landscape, architecture, climate, distance, and local rhythms create pressure, possibility, and change rather than serving as a decorative backdrop."],
  ["Sensory and cultural specificity", "Sound, scent, food, language, customs, and everyday detail immerse readers while resisting the generic shortcuts of postcard description."],
  ["An inner and outer journey", "Movement across a map matters because it changes what the traveler understands, fears, wants, or is finally willing to leave behind."],
];

const forms = [
  ["Contemporary travel fiction", "A journey through recognizable places uses encounter, distance, and dislocation to reveal a modern character’s changing life."],
  ["Expedition and voyage stories", "A route, mission, environmental challenge, or remote destination gives the novel physical momentum and mounting stakes."],
  ["Historical and speculative journeys", "Research or imaginative world-building recreates routes, borders, transport, and cultural contact beyond the reader’s everyday world."],
];

const steps = [
  ["Destination, route, and story promise", "We define the places, period, mode of travel, central relationship or quest, intended reader experience, and why this journey must happen now."],
  ["Cultural and logistical research", "The project gathers geography, transport, climate, history, customs, language, food, local perspectives, and practical route details."],
  ["Journey architecture and milestone drafting", "The outline links destinations to discoveries, setbacks, encounters, and inner change. Draft reviews protect pace, voice, and cultural accuracy."],
  ["Continuity and authenticity review", "Editing checks route logic, travel time, seasonal detail, cultural framing, recurring motifs, character transformation, and the emotional meaning of arrival."],
];

const faqs = [
  ["What makes travel fiction different from travel memoir?", "Travel fiction invents or reshapes characters and events around a journey, while memoir is bound to the author’s lived experience and factual truth. A real trip can inspire either form, but the creative contract differs."],
  ["Can you write convincingly about a destination I have not visited?", "Yes, with appropriate research and local or specialist sources. We identify what can be established remotely and where first-hand notes, interviews, sensitivity reading, or expert review would strengthen the manuscript."],
  ["How do you avoid stereotypes or a tourist’s-eye view?", "The process uses specific research, local perspectives, everyday detail, awareness of power and history, and characters with lives that extend beyond their role in the traveler’s story."],
  ["Can the novel combine travel with romance, adventure, mystery, or historical fiction?", "Yes. Travel naturally supports genre hybrids because changing locations can intensify relationships, clues, danger, history, and character transformation."],
  ["How long does it take to complete a travel-fiction novel?", "Most full-length projects take 5 to 8 months, depending on route complexity, research depth, number of locations, word count, milestone feedback, revisions, and editorial review."],
  ["Will I retain creative control and ownership of the final novel?", "Yes. You approve the direction and milestone drafts. The completed manuscript and agreed rights transfer under the work-for-hire terms in your contract."],
];

export function TravelFictionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="innerHero historicalRomanceHero travelFictionHero" aria-labelledby="travel-fiction-title">
        <Image className="historicalRomanceImage" src="/images/travel-fiction-hero.jpg" alt="A travel writer mapping a journey above a river city at sunset" fill sizes="100vw" preload />
        <div className="historicalRomanceCopy"><p className="eyebrow">Travel fiction ghostwriting</p><h1 id="travel-fiction-title">Travel Fiction Writing Services for Immersive Journeys</h1><p>Carry readers across landscapes, cultures, and inner frontiers with a novel in which every destination changes the story.</p><Link className="button" href="/contact">Map your travel novel <ArrowRight size={18} /></Link></div>
      </section>
      <section className="pagePromise">{["Immersive sense of place", "Research-backed cultural detail", "Complete manuscript ownership"].map(text => <p key={text}><Check size={16} />{text}</p>)}</section>

      <div className="romanceContent travelFictionContent">
        <section className="romanceIntro romanceWrap" aria-labelledby="travel-intro-title"><div><p className="eyebrow">The destination changes everything</p><h2 id="travel-intro-title">Travel fiction where place<br /><em>becomes part of the plot.</em></h2><p className="romanceLead">A memorable travel novel does more than move characters between locations. It allows the journey to alter what they see in the world and in themselves.</p><p>History, people, architecture, cuisine, tradition, climate, and distance all affect the protagonist’s choices. The route creates encounters and obstacles that could happen nowhere else.</p><p>Our writers combine immersive sensory prose with responsible cultural research and a strong narrative arc, carrying readers through a journey with emotional purpose.</p><Link className="fictionTextLink" href="/contact">Tell us where the journey leads <ArrowRight size={17} /></Link></div><aside className="romanceCraft travelFictionCraft"><Map size={30} strokeWidth={1.3} aria-hidden="true" /><p className="eyebrow">Writing the world with attention</p><h3>Place, movement,<br />and transformation.</h3>{foundations.map(([title, text]) => <div className="romanceCraftPoint" key={title}><Check size={18} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</aside></section>

        <section className="travelFictionForms romanceWrap" aria-labelledby="travel-forms-title"><div><p className="eyebrow">Choose the shape of the journey</p><h2 id="travel-forms-title">Every route creates<br /><em>a different kind of story.</em></h2><p>The journey can be an escape, a mission, a return, a search, or the disruption that forces a settled life to change.</p></div><div className="travelFictionFormGrid">{forms.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="romanceSpecialties travelFictionProcess" aria-labelledby="travel-process-title"><div className="romanceWrap"><div className="romanceSectionHeading"><p className="eyebrow">From route to finished manuscript</p><h2 id="travel-process-title">A researched process<br />for an effortless journey.</h2><p>Geography, culture, logistics, character, and emotional progression remain connected at every stage.</p></div><ol className="urbanProcessGrid">{steps.map(([title, text], index) => <li key={title}><span className="epicChapter">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

        <section className="romanceInvestment romanceWrap travelFictionInvestment" aria-labelledby="travel-value-title"><div><p className="eyebrow">Authenticity beyond the postcard</p><h2 id="travel-value-title">A world readers can<br /><em>enter with confidence.</em></h2><p>Your proposal defines destinations, research, route planning, concept development, milestone drafting, revisions, and cultural or specialist review before work begins.</p><Link className="button" href="/contact">Request a tailored scope <ArrowRight size={17} /></Link></div><div className="romanceScope"><h3>What we research and track</h3><ul>{["Route, distance, transport, and season", "Local history and everyday cultural context", "Food, language, customs, and sensory detail", "The limits of a visitor’s perspective", "How each place changes the character arc"].map(text => <li key={text}><Check size={18} />{text}</li>)}</ul></div></section>

        <section className="romanceFaq romanceWrap" aria-labelledby="travel-faq-title"><div><p className="eyebrow">Frequently asked questions</p><h2 id="travel-faq-title">The journey can surprise you.<br /><em>The process stays mapped.</em></h2><p>Answers about fiction versus memoir, destination research, cultural care, hybrid genres, schedules, and ownership.</p></div><div className="romanceQuestions">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>

        <section className="romanceClosing travelFictionClosing"><p className="eyebrow">Some stories can only happen far from home</p><h2>Write the journey readers will never forget taking.</h2><p>Bring the destination, route, encounter, or transformation at the heart of your novel.</p><Link className="button" href="/contact">Begin your travel novel <ArrowRight size={17} /></Link></section>
      </div>
    </main>
  );
}
