import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { QuotePopupTrigger } from "@/components/contact-popup";

const services = [
  {
    number: "01",
    eyebrow: "Our range of",
    title: "Noteworthy Ghostwriting Solutions",
    copy: "At Storybound House, creativity meets a thoughtful and professional process. We focus on developing books that make a meaningful impact, combining strong structure with an authentic voice. Our writers bring depth, clarity, and narrative momentum to every page, helping your story earn a lasting place with the readers it was written to reach.",
    image: "/images/services/ghostwriting.png",
    alt: "A published book collection beside an author writing notes",
  },
  {
    number: "02",
    eyebrow: "Affordable, professional",
    title: "Book Editing & Formatting Services",
    copy: "Strong writing deserves an equally strong finish. Our editors refine language, strengthen clarity, and prepare every page with consistent formatting so your manuscript reads smoothly and presents professionally.",
    image: "/images/services/editing.png",
    alt: "A published book beside a typewriter used for editing",
  },
  {
    number: "03",
    eyebrow: "Book marketing built around your audience",
    title: "Define Your Launching Strategies",
    copy: "Our marketing specialists help position your book for the right market and readership. From early anticipation to post-launch visibility, each campaign is shaped around your message, goals, and author identity.",
    image: "/images/services/marketing.png",
    alt: "A vintage typewriter beside a book and writing desk",
    features: ["Autobiography Writing", "Proofreading Services", "Fiction Writing", "Book Cover Designing", "Non-Fiction Writing", "Book Layout Designing", "Business Book Writing", "Book Publishing", "Editing Services", "Book Marketing"],
  },
  {
    number: "04",
    eyebrow: "From novels to self-help books",
    title: "From Research To Book Publishing, We Help Authors Globally",
    copy: "Whether you are developing a personal brand or preparing your first book, our team turns early ideas into engaging, publication-ready work. We can support the manuscript, editing, cover, layout, publishing path, and launch strategy from one coordinated place.",
    image: "/images/services/publishing.png",
    alt: "An ebook displayed beside a library of printed books",
  },
];

export function ServiceShowcase() {
  return (
    <>
      <section className="serviceShowcase" aria-label="Storybound House services">
        {services.map((service, index) => (
          <article className={`serviceStory ${index % 2 ? "serviceStoryReverse" : ""}`} key={service.number}>
            <div className="serviceStoryCopy">
              <div className="serviceStoryHeading">
                <span>{service.number}</span>
                <div>
                  <p>{service.eyebrow}</p>
                  <h2>{service.title}</h2>
                </div>
              </div>
              <p className="serviceStoryDescription">{service.copy}</p>
              {service.features && (
                <ul className="serviceFeatures">
                  {service.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}
                </ul>
              )}
            </div>
            <div className="serviceStoryVisual">
              <Image src={service.image} alt={service.alt} width={414} height={246} />
            </div>
          </article>
        ))}
      </section>

      <section className="ownershipBanner" aria-labelledby="ownership-title">
        <div className="ownershipImage">
          <Image src="/images/services/book-ownership.png" alt="An open, professionally designed book" width={413} height={277} />
        </div>
        <div className="ownershipPromise">
          <p>Compose, Publish And Own Your<br />Book, Your Idea.</p>
          <h2 id="ownership-title">You Are Entirely Entitled<br />To 100% Rights And Benefits</h2>
        </div>
        <div className="ownershipAction">
          <p>To receive a tailored estimate, tell us about your book and speak with a publishing specialist today.</p>
          <div className="ownershipChoices">
            <QuotePopupTrigger><span>Request your</span><strong>Free estimate</strong></QuotePopupTrigger>
            <Link href="/contact"><span>Start a</span><strong>Live chat</strong><ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
