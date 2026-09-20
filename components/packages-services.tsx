"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";
import { QuotePopupTrigger } from "@/components/contact-popup";

type Plan = { name: string; features: string[]; price: string; note?: string };
type Service = { label: string; title: string; intro: string; plans: Plan[] };

const packageServices: Service[] = [
  {
    label: "Ghostwriting",
    title: "Ghostwriting Service",
    intro: "Our professional ghostwriting service brings together experienced writers, editors, and publishing specialists who transform your idea into a polished, compelling book.",
    plans: [
      { name: "Standard", features: ["A published author serves as your lead ghostwriter.", "Detailed strategy-building and implementation sessions.", "A chief editor provides consultation throughout planning and writing."], price: "$25,000 – $30,000", note: "Approx. 200-page book" },
      { name: "Premium", features: ["A bestselling or extensively published lead ghostwriter.", "Expanded strategy-building and implementation sessions.", "Editorial consultation and recommendations throughout the complete process."], price: "$35,000 – $45,000+", note: "Approx. 300-page book" },
    ],
  },
  {
    label: "Online Book Publication",
    title: "Online Book Publication Service",
    intro: "Our ebook publication service manages the practical details involved in publishing your book, helping make it accessible to readers around the world.",
    plans: [{ name: "Description", features: ["Prepare your ebook for broad availability and stronger marketplace visibility.", "Publish on prominent platforms such as Amazon and Kindle with coordinated guidance."], price: "$1,499.00" }],
  },
  {
    label: "Branding and Publicity",
    title: "Branding and Publicity Service",
    intro: "Our branding and publicity service uses distinctive digital strategy to help your book attract attention, build recognition, and reach a larger share of its market.",
    plans: [
      { name: "Standard", features: ["Essential book-marketing strategies.", "Promotion across relevant social media platforms."], price: "$2,999.00" },
      { name: "Premium", features: ["Advanced strategic marketing methods.", "Expanded branding, publicity, digital exposure, and social promotion."], price: "$5,499.00" },
    ],
  },
  {
    label: "Video Book Trailers",
    title: "Video Book Trailers Service",
    intro: "An engaging trailer can introduce your story quickly and memorably. Our team develops cinematic promotional assets designed to grow interest in your book.",
    plans: [
      { name: "Standard", features: ["Design and production of an engaging video book trailer.", "High-quality imagery combined with HD footage."], price: "$1,999.00" },
      { name: "Premium", features: ["Production and promotion of a unique book trailer.", "Complete HD footage and polished presentation.", "Consultation sessions to shape the strongest result."], price: "$3,499.00" },
    ],
  },
  {
    label: "Web Design and SEO",
    title: "Web Design and SEO Service",
    intro: "Our web-design and SEO team creates a navigable author platform that attracts readers while strengthening your book’s visibility in search.",
    plans: [
      { name: "Standard", features: ["Accessible website design by an experienced designer.", "Strategic SEO placement throughout the site content."], price: "$1,999.00" },
      { name: "Premium", features: ["A distinctive, audience-focused website layout.", "SEO-led content created by specialist writers.", "Optimization for visibility across major search engines."], price: "$3,499.00" },
    ],
  },
  {
    label: "Audio Books",
    title: "Audio Book Service",
    intro: "Our audiobook service helps make your book accessible and engaging for listeners, creating another meaningful way for your audience to experience your work.",
    plans: [{ name: "Description", features: ["High-quality audiobook production with engaging sound.", "Careful technical review for a smooth listening experience.", "Collaborative production with your input throughout."], price: "$7,999", note: "Pricing may vary depending on duration and sound-production requirements." }],
  },
  {
    label: "Cover Design and Typesetting",
    title: "Cover Design and Typesetting Service",
    intro: "A strong cover invites readers to discover the book, while professional typesetting makes every page comfortable and rewarding to read.",
    plans: [
      { name: "Standard", features: ["Creative research and multiple design directions.", "Professional typesetting.", "Collaborative review with your project team."], price: "$599.00" },
      { name: "Premium", features: ["Expanded research and concept exploration.", "Distinctive, original cover direction.", "Professional, organized typesetting.", "Collaborative review through final delivery."], price: "$999.00" },
    ],
  },
];

const marketingComparison = [
  ["Book Preview on Amazon & Google", true, true, true],
  ["Social Media Promotion", "1 month", "3 months", "6 months"],
  ["Marketing Consultation – 90 Minute Call", true, true, true],
  ["Book Optimization on Amazon and Google", true, true, true],
  ["Search Engine Optimization", "1 month", "3 months", "6 months"],
  ["Review Videos", "3 reviews", "5 reviews", "10 reviews"],
  ["One-Minute Animated Book Launch Video", "1 video", "1 video", "2 videos"],
  ["Dedicated Book Website", true, true, true],
  ["Author Website", true, true, true],
  ["Promotional Postcard Design", "3 each", "5 each", "10 each"],
  ["Promotional Bookmark Design", "3 each", "5 each", "10 each"],
  ["Promotional Business Card Design", true, true, true],
  ["Blogs and Marketing Articles", "10", "15", "30"],
  ["Placement on High-Rated Websites", true, true, true],
  ["Press Release Campaign Writing and Consulting", "5", "5", "10"],
  ["Wikipedia Page for Book", "5", "10", "10"],
  ["Wikipedia Page for Author", false, true, true],
  ["Google Knowledge Panel for Book", false, true, true],
] as const;

export function PackagesServices() {
  const [active, setActive] = useState(0);
  const service = packageServices[active];

  return (
    <section className="packagesServices" aria-labelledby="packages-services-title">
      <div className="packagesServicesInner">
        <aside>
          <h2 id="packages-services-title">Our Services</h2>
          <div className="packagesTabs" role="tablist" aria-label="Package service categories">
            {packageServices.map((item, index) => (
              <button key={item.label} type="button" role="tab" aria-selected={active === index} aria-controls="package-panel" id={`package-tab-${index}`} onClick={() => setActive(index)}>
                {item.label}<ChevronRight size={16} />
              </button>
            ))}
          </div>
        </aside>

        <div className="packagesPanel" id="package-panel" role="tabpanel" aria-labelledby={`package-tab-${active}`} key={service.label}>
          <h2>{service.title}</h2>
          <p className="packagesPanelIntro">{service.intro}</p>
          <div className={`packagesPlans${service.plans.length === 1 ? " isSingle" : ""}`}>
            {service.plans.map((plan) => (
              <article key={plan.name}>
                <h3>{plan.name}</h3>
                <ul>{plan.features.map((feature) => <li key={feature}><ChevronRight size={15} />{feature}</li>)}</ul>
                <strong>{plan.price}</strong>
                {plan.note ? <p>{plan.note}</p> : null}
                <QuotePopupTrigger>Request a Quote</QuotePopupTrigger>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PackagesPromoBanner() {
  return (
    <section className="ownershipBanner packagesPromoBanner" aria-labelledby="packages-promo-title">
      <div className="ownershipImage">
        <Image src="/images/services/book-ownership.png" alt="An open, professionally designed book" width={413} height={277} />
      </div>
      <div className="ownershipPromise">
        <p>Choose, Create And Publish Your<br />Book, Your Way.</p>
        <h2 id="packages-promo-title">The Right Support.<br />Complete Author Ownership.</h2>
      </div>
      <div className="ownershipAction">
        <p>Tell us where your book is today, and we’ll help shape a package around the support you actually need.</p>
        <div className="ownershipChoices">
          <QuotePopupTrigger><span>Request your</span><strong>Free estimate</strong></QuotePopupTrigger>
          <Link href="/contact"><span>Start a</span><strong>Live chat</strong><ChevronRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

export function PackagesMarketingComparison() {
  return (
    <section className="packagesComparison" aria-labelledby="packages-comparison-title">
      <div className="packagesComparisonInner">
        <header>
          <h2 id="packages-comparison-title">Our Marketing Services<br /><span>Encompass Everything Book-Related!<Image src="/images/packages/heading-underline.png" alt="" width={190} height={55} /></span></h2>
          <p>Compare the reach and deliverables included with each marketing level.</p>
        </header>
        <div className="packagesComparisonScroll" tabIndex={0} aria-label="Scrollable marketing package comparison">
          <table>
            <thead><tr><th>Services</th><th>Basic</th><th>Standard</th><th>Platinum</th></tr></thead>
            <tbody>
              {marketingComparison.map(([service, basic, standard, platinum]) => (
                <tr key={service}>
                  <th scope="row">{service}</th>
                  {[basic, standard, platinum].map((value, index) => <td key={index}>{value === true ? <Check aria-label="Included" /> : value === false ? <span aria-label="Not included">—</span> : value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
