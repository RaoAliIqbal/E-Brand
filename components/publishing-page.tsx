"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, Globe2, Sparkles } from "lucide-react";
import type { PointerEvent } from "react";
import { FooterContactForm } from "@/components/footer-contact-form";
import { QuotePopupTrigger } from "@/components/contact-popup";
import { useEffect, useRef, useState } from "react";

const publishingPlatforms = [
  { name: "Amazon Kindle Direct Publishing", short: "amazon kindle", image: "/images/editing/amazon-kindle.png" },
  { name: "IngramSpark", short: "IngramSpark", image: "/images/distribution/ingram.png" },
  { name: "Barnes & Noble Press", short: "Barnes & Noble Press", image: "/images/distribution/barnes-noble.png" },
  { name: "Google Play Books", short: "Google Play Books", image: "/images/distribution/google-books.png" },
  { name: "Baker & Taylor", short: "Baker & Taylor", image: "/images/distribution/baker-taylor-logo.png" },
  { name: "Apple Books", short: "Apple Books" },
  { name: "Kobo Writing Life", short: "Rakuten Kobo" },
  { name: "Draft2Digital", short: "Draft2Digital" },
  { name: "Lulu", short: "LULU" },
  { name: "Blurb", short: "blurb" },
  { name: "Bookshop.org", short: "Bookshop.org" },
  { name: "Smashwords", short: "Smashwords" },
];

const publishingFeatures = [
  { icon: "/images/publishing/feature-retailing.png", title: "Global Retailing and Immediate Distribution", copy: "Prepare your print and ebook editions for leading retail and distribution channels, with practical support for account setup, metadata, and availability." },
  { icon: "/images/publishing/feature-copyright.png", title: "Copyright and Ownership Assurance", copy: "Receive clear guidance around ISBNs, publishing records, copyright details, and the steps that keep ownership of your work firmly in your hands." },
  { icon: "/images/publishing/feature-links.png", title: "Strong Industry Connections", copy: "Build a professional route to market with coordinated production specialists, publishing platforms, distribution partners, and promotional support." },
  { icon: "/images/publishing/feature-results.png", title: "Purposeful Publishing Results", copy: "Every recommendation is shaped around your book, intended audience, format, and long-term author goals—not a one-size-fits-all release." },
];

const publishingPackages = [
  { number: "01", title: "Basic Publishing Package", image: "/images/publishing/package-basic.png", items: ["Cover design for ebook and print", "Professional proofreading", "Ebook and print formatting", "Publishing-platform preparation", "Dedicated project coordinator"] },
  { number: "02", title: "Standard Publishing Package", image: "/images/publishing/package-standard.png", items: ["Copyediting", "Cover design for ebook and print", "Professional proofreading", "Ebook and print formatting", "Author copies coordination", "ISBN and metadata guidance"] },
  { number: "03", title: "Deluxe Publishing Package", image: "/images/publishing/package-deluxe.png", items: ["Copyediting and proofreading", "Premium cover design", "Interior design and page layout", "Ebook and print formatting", "Expanded author-copy support", "Distribution and launch preparation"] },
];

function PublishingMetric({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const [value, setValue] = useState(target);
  const metricRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const metric = metricRef.current;
    if (!metric) return;

    let animationFrame = 0;
    let replayTimer = 0;
    let isVisible = false;

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      setValue(0);
      const startedAt = performance.now();
      const duration = 1900;
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
        else setValue(target);
      };
      animationFrame = requestAnimationFrame(animate);
    };

    const beginLoop = () => {
      if (isVisible) return;
      isVisible = true;
      startAnimation();
      replayTimer = window.setInterval(() => {
        if (isVisible) startAnimation();
      }, 4300);
    };

    const stopLoop = () => {
      isVisible = false;
      window.clearInterval(replayTimer);
      window.cancelAnimationFrame(animationFrame);
      setValue(target);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) beginLoop();
      else stopLoop();
    }, { threshold: 0.3 });
    observer.observe(metric);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.clearInterval(replayTimer);
    };
  }, [target]);

  return <p className="publishingMetric" ref={metricRef}><strong key={value === 0 ? "reset" : "counting"}>{value}{suffix}</strong><span>{label}</span></p>;
}

export function PublishingPage() {
  const moveScene = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--publish-x", `${x * 10}px`);
    event.currentTarget.style.setProperty("--publish-y", `${y * 7}px`);
  };

  const resetScene = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--publish-x", "0px");
    event.currentTarget.style.setProperty("--publish-y", "0px");
  };

  return (
    <>
    <section className="publishingHero" aria-labelledby="publishing-title" onPointerMove={moveScene} onPointerLeave={resetScene}>
      <Image className="publishingHeroImage" src="/images/publishing/publishing-hero.png" alt="A premium publishing studio with finished books, proofs, and printing equipment" fill priority sizes="100vw" />
      <div className="publishingHeroOverlay" aria-hidden="true" />
      <span className="publishingGlow publishingGlowOne" aria-hidden="true" />
      <span className="publishingGlow publishingGlowTwo" aria-hidden="true" />

      <div className="publishingHeroContent">
        <p className="publishingEyebrow"><Sparkles size={16} />From manuscript to marketplace</p>
        <h1 id="publishing-title">Move From Finished Manuscript to Published Book With Confidence.</h1>
        <p className="publishingHeroIntro">Our publishing specialists coordinate formatting, production, distribution setup, metadata, and launch preparation—giving your book a polished, professional path into readers’ hands.</p>
        <ul>
          <li><Check />Print and ebook preparation</li>
          <li><Check />Author-owned publishing journey</li>
          <li><Check />Global distribution guidance</li>
        </ul>
        <div className="publishingHeroActions">
          <Link className="publishingPrimary" href="/contact">Start Publishing <ArrowRight size={18} /></Link>
          <Link className="publishingSecondary" href="/packages">Explore Packages</Link>
        </div>
        <div className="publishingJourney" aria-label="Publishing journey">
          <span><BookOpen />Manuscript</span><i /><span><Sparkles />Production</span><i /><span><Globe2 />Distribution</span>
        </div>
      </div>

      <div className="publishingProofCard" aria-hidden="true">
        <span>Publication ready</span>
        <strong>Every detail,<br />professionally prepared.</strong>
      </div>
      <div className="publishingScrollCue" aria-hidden="true"><span />Explore the publishing journey</div>
    </section>

    <section
      className="publishingPlatforms"
      aria-label="Book publishing platforms"
    >
      <div className="publishingPlatformViewport">
        <div className="publishingPlatformTrack">
          {[false, true].map(duplicate => (
            <div className="publishingPlatformSet" aria-hidden={duplicate || undefined} key={duplicate ? "duplicate" : "primary"}>
              {publishingPlatforms.map(platform => (
                <article className="publishingPlatformCard" key={`${duplicate ? "duplicate-" : ""}${platform.name}`} aria-label={duplicate ? undefined : platform.name}>
                  {platform.image ? <Image src={platform.image} alt={duplicate ? "" : platform.name} width={220} height={80} /> : <strong>{platform.short}</strong>}
                  <span>{platform.name}</span>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="publishingNextStep" aria-labelledby="publishing-next-step-title">
      <div className="publishingNextStepInner">
        <div className="publishingNextStepHeading">
          <h2 id="publishing-next-step-title">Have a Book You Need Published? Take It to the Next Step With Us.</h2>
        </div>
        <div className="publishingNextStepIntro">
          <p>Our publishing specialists can coordinate every stage—from practical recommendations and visual presentation to platform preparation and distribution guidance. You retain complete ownership of your published work while we help make the journey clear.</p>
        </div>
        <div className="publishingNextStepDetails">
          <Image className="publishingNextStepCorner" src="/images/publishing/self-publishing-corner.png" alt="" width={510} height={477} />
          <ul>
            {[
              "ISBN acquisition guidance",
              "Complete copyright ownership",
              "Leading self-publishing platform options",
              "Professional book-cover coordination",
              "Self-publishing consultancy",
              "Proofreading, typesetting, and formatting",
              "Print and ebook preparation",
            ].map(item => <li key={item}>{item}</li>)}
          </ul>
          <p>If you are looking for a dependable self-publishing partner, Storybound House provides coordinated, practical support shaped around your manuscript and goals. We stay alongside you from final preparation through publication.</p>
          <Link href="/contact">Plan Your Publication <ArrowRight size={18} /></Link>
        </div>
        <div className="publishingNextStepVisual">
          <Image src="/images/publishing/self-publishing-typewriter.png" alt="An author using an orange typewriter" width={650} height={666} />
        </div>
      </div>
    </section>

    <section className="publishingPitch" aria-labelledby="publishing-pitch-title">
      <div className="publishingPitchLead">
        <Image src="/images/publishing/pitching-editor.jpg" alt="A publishing specialist reviewing material beside a bookshelf" width={552} height={376} />
        <div>
          <p className="eyebrow">Dedicated team and literary guidance</p>
          <h2 id="publishing-pitch-title">Working on Pitching Your Book to Publishing Houses Around the Globe.</h2>
          <p>We believe in the potential of your manuscript and help you present it professionally. Our team supports proposal development, positioning, submission materials, and practical publishing strategies so your book can approach the right opportunities with confidence.</p>
        </div>
      </div>
      <div className="publishingPitchSolutions">
        <div>
          <h3>All Your Publishing Solutions in One Place</h3>
          <ul>{["Ebook distribution and conversion", "ISBN and barcode guidance", "Print-on-demand preparation", "Manuscript and edition coordination"].map(item => <li key={item}>{item}</li>)}</ul>
          <div><QuotePopupTrigger>Get a Free Quote</QuotePopupTrigger><Link href="/contact">Start a Conversation</Link></div>
        </div>
        <Image src="/images/publishing/publishing-expert.jpg" alt="A publishing professional researching books and manuscripts" width={1045} height={555} />
      </div>
    </section>

    <section className="publishingCapabilities" aria-label="Publishing capabilities">
      <div className="publishingCapabilitiesGrid">
        {publishingFeatures.map(feature => <article key={feature.title}>
          <Image src={feature.icon} alt="" width={82} height={82} />
          <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
        </article>)}
      </div>
    </section>

    <section className="publishingMetrics" aria-label="Publishing service commitments">
      <PublishingMetric target={400} suffix="+" label="Books Written" />
      <PublishingMetric target={1500} suffix="+" label="Books Edited" />
      <PublishingMetric target={25} suffix="k" label="Books Written" />
    </section>

    <section className="publishingPackages" aria-labelledby="publishing-packages-title">
      <div className="publishingPackagesHeading info-ser">
        <p>We offer a</p>
        <h2 id="publishing-packages-title">Variety of<br />Publishing Packages</h2>
        <span>Flexible support from essential production through a fully coordinated publishing release.</span>
      </div>
      <div className="publishingPackageList">
        {publishingPackages.map((pkg, index) => <article className={index % 2 ? "isReversed" : ""} key={pkg.title}>
          <div className="publishingPackageCopy">
            <h3><b>{pkg.number}</b>{pkg.title}</h3>
            <p>Clear, professional, and publication-ready support</p>
            <ul>{pkg.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <Image src={pkg.image} alt="" width={310} height={310} />
        </article>)}
      </div>
    </section>
    <FooterContactForm />
    </>
  );
}
