import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FaqFooter } from "@/components/faq-footer";
import { FooterContactForm } from "@/components/footer-contact-form";
import { QuotePopupTrigger } from "@/components/contact-popup";

const editingServices = [
  {
    title: "Translation and Bilingual Proofreading",
    image: "/images/editing/translation-proofreading.jpg",
    corner: "/images/editing/corner-blue.png",
    copy: "Refine translated stories and manuscripts with attentive bilingual proofreading. Our editors review meaning, tone, cultural context, grammar, and word choice so the finished text reads naturally while remaining faithful to the original work.",
    points: ["Beta reader testing", "Cultural accuracy reading"],
  },
  {
    title: "Developmental Editing",
    image: "/images/editing/developmental-editing.jpg",
    corner: "/images/editing/corner-red.png",
    copy: "Developmental editing looks at the manuscript as a complete reading experience. We work with you to strengthen structure, character, pacing, argument, and narrative progression—helping every chapter serve the book’s central purpose.",
    points: ["Characterization", "Structure and organization", "Exposition", "Story and chapter development"],
  },
  {
    title: "Line Editing",
    image: "/images/editing/line-editing.jpg",
    corner: "/images/editing/corner-purple.png",
    copy: "Line editing brings precision and rhythm to every paragraph. Our editors refine sentence construction, remove repetition, strengthen transitions, and improve clarity without flattening the individual voice that makes your manuscript distinctive.",
    points: ["Sentence length", "Eliminate clichés", "Punctuation", "Contextual spelling"],
  },
  {
    title: "Mechanical Editing",
    image: "/images/editing/mechanical-editing.jpg",
    corner: "/images/editing/corner-cyan.png",
    copy: "Mechanical editing gives your manuscript a meticulous final review for grammar, punctuation, consistency, formatting, and style. We resolve distracting errors and establish a dependable editorial standard before publication.",
    points: ["Pacing and flow", "Readership profile", "Review of writing technique", "Style and consistency checks"],
  },
];

const editingPlans = [
  {
    title: "Basic Editing Service",
    label: "Best budget plan available",
    image: "/images/editing/basic-editing.png",
    copy: "A complete review of grammar, spelling, terminology, and sentence structure to improve readability and give your manuscript a consistent professional finish.",
    points: ["Complete grammatical correctness", "Accuracy of domain-specific terminology", "Consistency in layout, citations, and references", "Systematic structural improvements and seamless content flow", "In-depth technical review", "Publication-readiness review"],
  },
  {
    title: "Premium Editing Service",
    label: "Our most popular service",
    image: "/images/editing/premium-editing.png",
    copy: "Advanced editing for the complete manuscript, with focused improvements to flow, arrangement, voice, clarity, and every feature included in our Basic Editing Service.",
    points: ["Complete grammatical correctness", "Accuracy of domain-specific terminology", "Consistent formatting and references", "Structural and narrative improvements", "Editor consultation", "In-depth technical review", "Publication-readiness review"],
  },
  {
    title: "Scientific Editing Service",
    label: "Personalized service, three experts",
    image: "/images/editing/scientific-editing.png",
    copy: "Specialist review for research-led, technical, and academic manuscripts, combining language refinement with subject-aware feedback and clear recommendations.",
    points: ["Premium editor with extensive experience", "Accuracy of domain-specific terminology", "Consistency in format, notation, and citations", "Improved research communication and content flow", "Technical review by subject-aware editors", "Publication-readiness assessment", "Editor consultation"],
  },
];

const editingFaqs = [
  {
    question: "What is the difference between developmental editing, line editing, copy editing, and proofreading?",
    answer: "Developmental editing focuses on the big picture, including plot, structure, character, and argument. Line editing refines prose at the sentence level, such as style, flow, and word choice. Copy editing corrects grammar, spelling, punctuation, and consistency. Proofreading is the final check for typos and minor errors before publication. Each serves a distinct, vital purpose in refining a manuscript.",
  },
  {
    question: "How long does book editing typically take?",
    answer: "The timeframe depends on the manuscript’s length, complexity, and the type of editing required. A precise estimate will be provided after reviewing your manuscript during the initial consultation. We prioritize both quality and efficiency.",
  },
  {
    question: "Do you edit all genres?",
    answer: "Yes. Our team of specialized book editors has expertise across a wide range of genres, including fiction such as thriller, romance, science fiction, fantasy, and literary fiction, as well as non-fiction such as memoir, business, self-help, academic writing, and more.",
  },
  {
    question: "Will editing change my authorial voice?",
    answer: "Absolutely not. Our primary goal is to enhance your voice, making it clearer, stronger, and more impactful. We aim to polish your unique style, not alter it.",
  },
];

export function EditingPage() {
  return (
    <>
      <section className="editingHero" aria-labelledby="editing-title">
        <Image
          className="editingHeroImage"
          src="/images/editing/editing-hero.png"
          alt="An elegant editorial desk with an open manuscript, books, and a brass reading lamp"
          fill
          priority
          sizes="100vw"
        />
        <div className="editingHeroShade" aria-hidden="true" />
        <div className="editingHeroContent">
          <p>Our Error-Free Editing Services</p>
          <h1 id="editing-title">Top-notch Book Editing And Proofreading Services</h1>
          <div className="editingHeroRule" aria-hidden="true" />
          <p className="editingHeroIntro">Give your manuscript the clarity, consistency, and professional polish it deserves. Our editors strengthen every page while protecting your voice.</p>
          <ul>
            <li><Check />Careful human review</li>
            <li><Check />Confidential collaboration</li>
            <li><Check />Publication-ready polish</li>
          </ul>
          <div className="editingHeroActions">
            <Link className="button" href="/contact">Get Your Manuscript Edited <ArrowRight size={18} /></Link>
            <QuotePopupTrigger className="editingTextLink">Request a free consultation</QuotePopupTrigger>
          </div>
        </div>
      </section>

      <EditingRecognition />

      <section className="editingServices" aria-label="Book editing services">
        <div className="editingServicesList">
          {editingServices.map((service, index) => (
            <article className={`editingServiceCard${index % 2 ? " isReversed" : ""}`} key={service.title}>
              <div className="editingServiceCopy">
                <Image className="editingServiceCorner" src={service.corner} alt="" width={250} height={230} />
                <div className="editingServiceTitle heading"><h3>{service.title}</h3></div>
                <p>{service.copy}</p>
                <ul className="editingServicePoints abt-ul">
                  {service.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
              <Image className="editingServicePhoto" src={service.image} alt={`Professional ${service.title.toLowerCase()} in progress`} width={510} height={560} />
            </article>
          ))}
        </div>
      </section>

      <section className="editingAffordable" aria-labelledby="affordable-title">
        <div className="editingAffordableInner">
          <Image src="/images/editing/affordable-rates.jpg" alt="An open art book, flowers, and tea arranged on white linen" width={550} height={733} />
          <div className="editingAffordableCopy">
            <p className="eyebrow">Hire an experienced editor at</p>
            <h2 id="affordable-title">Affordable Rates</h2>
            <p>No matter how much care you invest in a manuscript, a skilled second set of eyes can reveal opportunities that are difficult to see from inside the work. Our editors analyze structure, vocabulary, grammar, continuity, and style so every page reads with clarity and confidence.</p>
            <p>Storybound House provides thoughtful, high-quality editorial support at practical rates. We leave no detail unchecked while protecting your voice, strengthening the reader’s experience, and preparing your book for its next stage.</p>
            <div className="editingFocusAreas" aria-label="Editing focus areas">
              {['Content proofreading', 'Copy editing', 'Line editing', 'Beta reader testing'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="editingAffordableActions">
              <QuotePopupTrigger className="button">Get a Free Quote</QuotePopupTrigger>
              <Link href="/contact">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editingRights" aria-label="Author rights and consultation">
        <div className="editingRightsMessage">
          <p>Compose, publish, and own your book—your idea.</p>
          <strong>You Are Entitled to 100% Rights and Benefits</strong>
        </div>
        <div className="editingRightsContact">
          <p>For an estimate, submit a request and speak with a professional editor about your manuscript.</p>
          <Link href="/contact">Request Your Consultation <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="editingPlans" aria-labelledby="editing-plans-title">
        <div className="editingPlansIntro">
          <p className="eyebrow">Choose the right editorial depth</p>
          <h2 id="editing-plans-title">Professional Editing for Every Manuscript</h2>
        </div>
        <div className="editingPlansList">
          {editingPlans.map((plan, index) => (
            <article className={`editingPlan${index % 2 ? " isReversed" : ""}`} key={plan.title}>
              <div className="editingPlanCopy">
                <h3>{plan.title}</h3>
                <p>{plan.copy}</p>
                <div className="editingPlanDetails">
                  <h4>{plan.label}</h4>
                  <ul>{plan.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </div>
              <Image src={plan.image} alt={`${plan.title} workspace`} width={960} height={574} />
            </article>
          ))}
        </div>
      </section>
      <FaqFooter items={editingFaqs} />
      <FooterContactForm />
    </>
  );
}

export function EditingRecognition() {
  return (
    <section className="editingRecognition" aria-label="Featured and bestselling platforms">
      <div className="editingRecognitionFeature">
        <strong>Featured on:</strong>
        <span className="editingChevrons" aria-hidden="true"><i /><i /></span>
        <Image className="editingTimesLogo" src="/images/editing/new-york-times.png" alt="The New York Times" width={340} height={48} />
      </div>
      <div className="editingRecognitionSeller">
        <strong>Best Selling on:</strong>
        <span className="editingChevrons" aria-hidden="true"><i /><i /></span>
        <Image src="/images/editing/amazon-kindle.png" alt="Amazon Kindle" width={297} height={73} />
      </div>
    </section>
  );
}
