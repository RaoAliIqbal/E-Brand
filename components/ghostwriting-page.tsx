"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { FooterContactForm } from "@/components/footer-contact-form";
import { QuotePopupTrigger } from "@/components/contact-popup";

const expectationItems = [
  "Original content based on your idea",
  "Professional book consultation",
  "Review, editing, and proofreading",
  "Publishing, marketing, and promotion",
  "Developmental editing",
  "Critical review and analysis",
  "Copy editing and formatting",
  "Typesetting and interior design",
  "Complete ownership of your manuscript",
];

const subjects = [
  "Travel and lifestyle", "Government and non-profits", "Medical and healthcare",
  "Legal and professional", "Gaming and fitness", "Fashion and entertainment",
  "Food and beverage", "Business and real estate", "Sports and music",
  "Finance and HR", "Education and day care", "Startups and consultants",
];

const services = [
  "Video book trailers", "Proofreading to ensure no errors", "Typesetting and formatting",
  "Publishing consultancy", "Book cover design and illustrations", "Literary agency consultation",
  "Self-publishing service", "Book publishing", "Critical review of your draft",
  "Thorough research for your book", "Drafting your manuscript", "Developmental editing",
];

const testimonials = [
  {
    quote: "I approached Storybound House for a proofreading and editing job, and they were excellent with every detail. The communication was clear, the work was polished, and the entire experience felt professional and thoughtfully managed.",
    name: "Elijah Silas",
  },
  {
    quote: "The writers understood the voice I wanted from the first conversation. They turned a collection of scattered ideas into a manuscript that felt focused, authentic, and unmistakably mine.",
    name: "Silvia Sage",
  },
  {
    quote: "They made a complicated publishing process feel simple. Every milestone was explained, every question was answered, and the finished book exceeded my expectations.",
    name: "Felicio Bynes",
  },
];

function TickList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`ghostTickList${light ? " ghostTickListLight" : ""}`}>
      {items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
    </ul>
  );
}

export function GhostwritingPage() {
  const [testimonial, setTestimonial] = useState(0);
  const show = (direction: number) => setTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <>
      <section className="ghostHero" aria-labelledby="ghostwriting-title">
        <Image className="ghostHeroLeft" src="/images/ghostwriting/hero-left-books.png" alt="A collection of published books" width={560} height={430} priority />
        <Image className="ghostHeroRight" src="/images/ghostwriting/hero-right-books.png" alt="A creative arrangement of books" width={520} height={460} priority />
        <div className="ghostHeroContent">
          <h1 id="ghostwriting-title">The Well-Versed<br />Team of Ghostwriters</h1>
          <div className="ghostHeroPromises">
            <span>Publishing guidance</span><span>Complete ownership</span>
            <span>Skilled writers</span><span>Custom plans</span>
          </div>
          <div className="ghostActions">
            <Link className="ghostPrimary" href="/contact">Get Started Now</Link>
            <QuotePopupTrigger className="ghostSecondary">Talk to a Book Consultant</QuotePopupTrigger>
          </div>
        </div>
      </section>

      <section className="ghostExpectations services-list" aria-labelledby="expectations-title">
        <div className="ghostSectionHeading">
          <p className="eyebrow">What we bring to every book</p>
          <h2 id="expectations-title">We don’t only set expectations; we thrive to achieve them.</h2>
          <p>Versatile, experienced, and creative writers bring your idea to life with a process built around your voice, readers, and publishing goals.</p>
        </div>
        <TickList items={expectationItems} />
      </section>

      <section className="ghostDifference" aria-labelledby="difference-title">
        <div className="ghostDifferenceIntro">
          <h2 id="difference-title">What makes our writers different from the rest?</h2>
          <p>We match your project with a writer who understands its subject, tone, and audience. That careful fit gives every chapter depth, clarity, and a consistent voice.</p>
        </div>
        <TickList items={subjects} />
        <Image src="/images/ghostwriting/atlas-book.png" alt="A professionally published book" width={420} height={590} />
      </section>

      <section className="ghostChoose" aria-labelledby="choose-title">
        <Image className="ghostTypewriter" src="/images/ghostwriting/typewriter.png" alt="Vintage typewriter" width={520} height={330} />
        <div className="ghostChooseHeading">
          <h2 id="choose-title">Why You Should<br />Always Choose Our Writers</h2>
          <p>We begin with a consultation, choose the right writing specialist, and build your manuscript through clear milestones, attentive revisions, and a publishing-ready finish.</p>
        </div>
        <div className="ghostChoosePanel">
          <TickList items={services} />
          <Image src="/images/ghostwriting/manuscript.jpg" alt="Editorial layouts and manuscript materials" width={815} height={694} />
        </div>
      </section>

      <GhostOffer />

      <section className="ghostTestimonials" aria-labelledby="testimonials-title">
        <div className="ghostTestimonialHeading">
          <p>Testimonials</p>
          <h2 id="testimonials-title">Clients Feedback</h2>
        </div>
        <blockquote key={testimonial}>
          <p>“{testimonials[testimonial].quote}”</p>
          <cite>{testimonials[testimonial].name}</cite>
        </blockquote>
        <Image className="ghostFeather" src="/images/ghostwriting/testimonial-feather.png" alt="" width={128} height={283} />
        <Image className="ghostCup" src="/images/ghostwriting/testimonial-cup.png" alt="" width={250} height={220} />
        <div className="ghostTestimonialRule" aria-hidden="true" />
        <div className="ghostTestimonialControls">
          <button type="button" aria-label="Previous testimonial" onClick={() => show(-1)}><ArrowLeft /></button>
          <button type="button" aria-label="Next testimonial" onClick={() => show(1)}><ArrowRight /></button>
        </div>
      </section>

      <FooterContactForm />
    </>
  );
}

export function GhostOffer() {
  return (
    <section className="ghostOffer" aria-label="Book consultation offer">
      <div className="ghostOfferInner cta-inn">
        <p className="eyebrow">Your book deserves a strong beginning</p>
        <h2>Bring Your Story to Life and Save 70% on Our Services.</h2>
        <p>Speak with a book consultant and discover the clearest route from idea to finished manuscript.</p>
        <div className="ghostActions">
          <Link className="ghostPrimary" href="/contact">Get Started Now</Link>
          <QuotePopupTrigger className="ghostSecondary">Discuss Your Book</QuotePopupTrigger>
        </div>
      </div>
    </section>
  );
}
