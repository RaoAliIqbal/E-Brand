import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { NonFictionBooks } from "@/components/non-fiction-books";
import { AuthorsCarousel } from "@/components/authors-carousel";
import { FooterContactForm } from "@/components/footer-contact-form";

const strengths = ["Evidence-led research", "A voice true to your expertise", "Clear project updates", "Publication-ready writing", "Careful fact-checking", "Complete manuscript ownership"];
const subjects = ["Self-Help & Growth", "Business & Finance", "Health & Wellness", "History", "Family & Relationships", "Politics", "Education", "Science", "Spirituality", "Journalism", "Law", "Sports"];
const specialties = ["Memoir", "Biography", "Business", "History", "Science", "Self-Help", "Health", "Education", "Politics", "Travel", "True Crime", "Cookbooks"];
const formats = ["Full-Length Books", "Ebooks", "Guides", "Thought Leadership", "White Papers", "Case Studies", "Workbooks", "Research Reports"];

export function NonFictionOverview() {
  return (
    <>
      <section className="fictionOverview" aria-labelledby="nonfiction-overview-title">
        <div className="fictionOverviewInner">
          <div className="fictionIntroCopy">
            <p className="eyebrow">Non-fiction specialists</p>
            <h2 id="nonfiction-overview-title">A Team of Insightful <span>Non-Fiction Ghostwriters</span></h2>
            <p>Powerful non-fiction turns knowledge and lived experience into ideas readers can understand, trust, and use. Our writers help experts, founders, educators, and memoirists organize complex material into a clear, engaging manuscript without losing the authority or personality behind it.</p>
            <p>From discovery interviews and research to structure, drafting, and editorial refinement, Storybound House provides a disciplined partnership at every stage. Your perspective remains central while our team helps it reach the page with clarity and purpose.</p>
            <Link className="fictionTextLink" href="/contact">Discuss your book <ArrowRight size={17} /></Link>
          </div>
          <div className="fictionIntroVisual nonfictionIntroVisual">
            <div className="fictionImageFrame" aria-hidden="true" />
            <Image src="/images/nonfiction-overview.png" alt="A writer developing a non-fiction manuscript" width={890} height={610} sizes="(max-width: 900px) 88vw, 40vw" />
          </div>
          <div className="fictionLongCopy">
            <article><h3>What Makes Our Non-Fiction Services Distinctive?</h3><p>Every project begins with a clear understanding of your audience, objectives, and source material. A dedicated specialist develops the book’s argument and architecture, identifies research needs, and creates a practical chapter plan before the manuscript takes shape.</p><p>Whether you bring extensive notes, recorded conversations, professional research, or an early draft, we turn the material into an accessible narrative with logical flow, credible detail, and a consistent voice.</p></article>
            <article><h3>Why Experts Count on Our Team</h3><p>Accuracy, confidentiality, and authorship matter. Our collaborative review process keeps you in control of the message while editors strengthen clarity, consistency, and reader engagement. You retain complete ownership of the finished manuscript.</p><ul className="fictionStrengths">{strengths.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></article>
          </div>
        </div>
      </section>
      <section className="fictionGenreBand nonfictionSubjectBand" aria-labelledby="nonfiction-subjects-title">
        <div><h2 id="nonfiction-subjects-title">Our Non-Fiction Writers Turn <span>Expertise Into Impact</span> Across Subjects</h2></div>
        <ul>{subjects.map(item => <li key={item}><span aria-hidden="true">•</span>{item}</li>)}</ul>
      </section>
      <section className="nonfictionServices" aria-labelledby="nonfiction-services-title">
        <div className="nonfictionServicesInner">
          <div className="nonfictionServicesHeading">
            <p className="eyebrow">Our most thoughtful approach</p>
            <h2 id="nonfiction-services-title">Ghostwriting Services for Non-Fiction</h2>
          </div>
          <Image className="nonfictionServicesWriter" src="/images/nonfiction-services-writer.png" alt="A writer developing notes for a non-fiction manuscript" width={499} height={718} sizes="(max-width: 760px) 90vw, 42vw" />
          <Image className="nonfictionServicesBook" src="/images/nonfiction-services-book.png" alt="Crash Course book displayed with a pencil" width={408} height={374} />
          <div className="nonfictionServiceCards">
            <article><h3>Bringing Creativity to Every True Story</h3><p>Strong non-fiction should be as absorbing as it is informative. Our writers organize research, experience, and ideas into a clear narrative that keeps readers curious while remaining faithful to your message and expertise.</p></article>
            <article><h3>A Collaborative, Author-First Experience</h3><p>Your priorities guide every stage of the work. We maintain respectful communication, share meaningful progress updates, and keep every important decision in your hands throughout research, drafting, and revision.</p></article>
            <article><h3>Refined Non-Fiction Writing</h3><p>Our specialists combine careful structure, credible detail, and polished language to create work that feels authoritative and distinctly yours. Every manuscript receives close editorial attention before it is prepared for publication.</p></article>
          </div>
        </div>
      </section>
      <section className="fictionCapabilities" aria-label="Non-fiction specialties and formats">
        <div className="fictionCapabilityCard fictionCapabilityGenres"><span className="capabilityAccent" aria-hidden="true" /><h2>Subjects</h2><p>Our specialists work across personal, professional, academic, and practical non-fiction.</p><ul>{specialties.map(item => <li key={item}><Check size={21} />{item}</li>)}</ul></div>
        <div className="fictionCapabilityCard fictionCapabilityForms"><span className="capabilityAccent" aria-hidden="true" /><h2>Formats</h2><p>We shape authoritative content for long-form publishing and professional communication.</p><ul>{formats.map(item => <li key={item}><Check size={21} />{item}</li>)}</ul></div>
      </section>
      <NonFictionBooks />
      <aside className="booksDisclaimer" aria-label="Book cover disclaimer">
        <strong>Disclaimer:</strong> These books do not belong to Storybound House. They are displayed solely for reference purposes and remain the property of their respective authors and rights holders.
      </aside>
      <AuthorsCarousel />
      <FooterContactForm />
    </>
  );
}
