import Image from "next/image";
import Link from "next/link";
import { QuotePopupTrigger } from "@/components/contact-popup";

const marketingServices = [
  { number: "01", title: "Audio Trailer", image: "/images/marketing/audio-trailer.png", copy: "Create an engaging audio trailer that introduces your book through voice, sound, and atmosphere—opening the story to audiobook listeners and new audiences." },
  { number: "02", title: "Video Trailer", image: "/images/marketing/video-trailer.png", copy: "Bring your book to life with a cinematic trailer designed to build curiosity, expand awareness, and give potential readers a compelling reason to discover more." },
  { number: "03", title: "Author Website", image: "/images/marketing/author-website.png", copy: "Give readers a central place to discover your books, learn about your journey, and connect with you through a customized author website built around your brand." },
  { number: "04", title: "Social Media Marketing", image: "/images/marketing/social-media-marketing.png", copy: "Reach the right readers with coordinated social campaigns, purposeful creative assets, and platform-aware promotion that keeps your book visible and memorable." },
];

const marketingQualityColumns = [
  ["Personal Marketing Assistants", "Creative and Appealing Bookmarks", "Digital Postcards", "Business Cards"],
  ["Press Release", "Marketing on Social Media Platforms", "Marketing Consultation", "Amazon Kindle"],
  ["Barnes and Noble Nook Edition", "Article Writing", "Audio Book", "Small and Attractive Posters"],
];

export function MarketingServices() {
  return (
    <section className="marketingServices" aria-labelledby="marketing-services-title">
      <header className="marketingServicesHeading">
        <p><span />Get guaranteed results with<span /></p>
        <h2 id="marketing-services-title">The Best Book Marketing Team</h2>
        <div>
          <p>Our goal is to help your book reach readers on a broader scale. Our marketing specialists combine publishing experience with thoughtful strategy across multiple channels, shaping every campaign around your audience and ambitions.</p>
          <p>A strong book deserves a strong route to discovery. From trailers and author platforms to social promotion, we coordinate the assets and outreach that give your work its best opportunity to stand out.</p>
        </div>
        <nav aria-label="Marketing consultation actions">
          <QuotePopupTrigger>Get a free quote</QuotePopupTrigger>
          <Link href="/contact">Live chat</Link>
        </nav>
      </header>

      <div className="marketingServicesList">
        {marketingServices.map((service, index) => (
          <article className={index % 2 ? "isReversed" : undefined} key={service.title}>
            <div className="marketingServiceCopy">
              <div><span>{service.number}</span><h3>{service.title}</h3></div>
              <p>{service.copy}</p>
            </div>
            <div className="marketingServiceVisual">
              <Image src={service.image} alt={`${service.title} marketing service`} width={500} height={330} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MarketingShowcase() {
  return (
    <section className="marketingShowcase" aria-labelledby="marketing-showcase-title">
      <div className="marketingShowcaseInner">
        <header>
          <p><span />Want to showcase the<span /></p>
          <h2 id="marketing-showcase-title">Masterpiece at the Hall of Fame of Bestseller?</h2>
          <div>We provide coordinated book-promotion services and support your social platforms with a focused marketing plan—freeing you to concentrate on your next project while your book continues reaching readers.</div>
        </header>
        <div className="marketingQualityGrid">
          {marketingQualityColumns.map((column, index) => (
            <ul className={index < 2 ? "info-quality" : undefined} key={column[0]}>
              {column.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
