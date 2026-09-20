import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ReviewTrust } from "@/components/review-trust";
import { BrandLogoSlider } from "@/components/brand-logo-slider";
import { ServiceShowcase } from "@/components/service-showcase";
import { GenresPortfolio } from "@/components/genres-portfolio";
import { PublishingProcess } from "@/components/publishing-process";
import { FaqFooter } from "@/components/faq-footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Storybound House",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://storyboundhouse.com",
    slogan: "Your story. Your voice. Beautifully written.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <SiteHeader />

      <section className="hero" id="top">
        <div className="heroImage" aria-hidden="true">
          <Image
            src="/images/storybound-hero-author-v3.png"
            alt=""
            fill
            preload
            quality={90}
            sizes="100vw"
          />
        </div>

        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">Premium ghostwriting &amp; author services</p>
          <h1>Your story deserves<br />to become a <em>remarkable</em> book.</h1>
          <p className="heroCopy">
            Partner with experienced ghostwriters, editors, and publishing specialists who
            transform your ideas into a compelling, publication-ready manuscript—written in
            your voice and owned entirely by you.
          </p>

          <div className="heroActions">
            <Link className="button" href="/ghostwriting">
              Explore Our Process <ArrowRight size={16} />
            </Link>
          </div>

          <ul className="trustList" aria-label="Our commitments">
            {["Confidential collaboration", "Complete ownership", "Dedicated editorial team"].map(item => (
              <li key={item}><span><Check size={12} /></span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="proofCard">
          <span>01</span>
          <p>From first conversation<br />to final manuscript</p>
        </div>
      </section>

      <ReviewTrust />

      <section className="brandIntroduction" aria-labelledby="brand-introduction-title">
        <div className="brandIntroductionInner">
          <p className="brandWelcome"><span />Welcome to<span /></p>
          <h2 id="brand-introduction-title">Storybound House</h2>
          <h3>Where meaningful ideas become remarkable books</h3>
          <p className="brandIntroductionCopy">
            Storybound House brings together thoughtful ghostwriters, meticulous editors,
            and publishing specialists to help authors shape stories that feel unmistakably
            their own. From the first spark of an idea to a polished, publication-ready book,
            we protect your voice, respect your vision, and guide every chapter with care.
          </p>

          <div className="brandTagline" aria-label="Storybound House promise">
            <span />
            <p>Your story. <strong>Your voice.</strong> Beautifully written.</p>
            <span />
          </div>

          <div className="brandRating" aria-label="Rated 4.8 out of 5">
            <span className="brandRatingLine" />
            <div className="brandRatingScore">
              <span className="brandRatingStars" aria-hidden="true">★★★★★</span>
              <strong>4.8<span>/5</span></strong>
            </div>
            <span className="brandRatingLine" />
          </div>
        </div>
      </section>

      <BrandLogoSlider />

      <ServiceShowcase />
      <GenresPortfolio />
      <PublishingProcess />
      <FaqFooter />
    </main>
  );
}
