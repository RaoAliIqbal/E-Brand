import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { QuotePopupTrigger } from "@/components/contact-popup";

type FaqItem = { question: string; answer: string };

const faqs: FaqItem[] = [
  {
    question: "What does Storybound House do?",
    answer: "Storybound House provides coordinated ghostwriting, editing, book design, publishing guidance, and author-marketing support. Every engagement is shaped around the author’s voice, goals, and preferred level of collaboration.",
  },
  {
    question: "What comes under your ghostwriting process?",
    answer: "The process can be as individual as you and your book. It may include discovery interviews, research, outlining, chapter development, editorial review, revisions, proofreading, and publication preparation. You remain involved at every important approval stage.",
  },
  {
    question: "Why should I hire Storybound House for my book?",
    answer: "You receive a confidential, structured partnership with specialists who respect your ideas and preserve your voice. Our team coordinates the moving parts, helping you progress from an early concept to a polished manuscript with clarity and care.",
  },
  {
    question: "What are your charges?",
    answer: "Pricing depends on your manuscript length, service scope, research needs, timeline, and current stage. After a complimentary consultation, we provide a tailored proposal so you can review the deliverables and investment before beginning.",
  },
];

const distributors = [
  { src: "/images/distribution/baker-taylor-logo.png", alt: "Baker & Taylor" },
  { src: "/images/distribution/alibris.png", alt: "Alibris" },
  { src: "/images/distribution/google-books.png", alt: "Google Books" },
  { src: "/images/distribution/ingram.png", alt: "Ingram" },
  { src: "/images/distribution/barnes-noble.png", alt: "Barnes & Noble" },
  { src: "/images/distribution/amazon-logo.png", alt: "Amazon" },
];

function DistributorSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="distributionLogoSet" aria-hidden={hidden || undefined}>
      {distributors.map(distributor => (
        <div className="distributionLogo" key={`${hidden ? "duplicate-" : ""}${distributor.alt}`}>
          {distributor.alt === "Alibris" ? <strong>▥<br /><i>alibris</i></strong> : <Image src={distributor.src} alt={hidden ? "" : distributor.alt} width={220} height={80} />}
        </div>
      ))}
    </div>
  );
}

export function FaqFooter({ items = faqs }: { items?: FaqItem[] }) {
  return (
    <section className="faqSection" aria-labelledby="faq-title">
        <div className="faqInner">
          <div className="faqIntro">
            <p className="faqKicker">FAQ <span /></p>
            <h2 id="faq-title">Frequently<br />Asked Question!</h2>
            <p>Creating a book is a significant undertaking. These answers explain how Storybound House makes the process clearer, more collaborative, and easier to navigate.</p>
            <Image src="/images/faq-footer/faq-books.png" alt="Two professionally designed books" width={390} height={283} />
          </div>
          <div className="faqList">
            {items.map((faq, index) => (
              <details key={faq.question} name="storybound-faq" open={index === 1}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
    </section>
  );
}

export function SiteWideFooter() {
  return (
    <>
      <section className="distributionStrip" aria-labelledby="distribution-title">
        <div className="distributionHeading"><span /><h2 id="distribution-title">Sell your book with</h2><span /></div>
        <div className="distributionViewport">
          <div className="distributionTrack">
            <DistributorSet />
            <DistributorSet hidden />
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerContact">
            <p>Want to get in touch?</p>
            <h2>Contact us now!</h2>
            <QuotePopupTrigger className="footerContactButton">Start your consultation</QuotePopupTrigger>
            <address className="footerContactDetails">
              <a className="footerPhone" href="tel:+18882140979">+1-888-214-0979</a>
              <a className="footerEmail" href="mailto:sales@storyboundhouse.com"><Mail size={20} aria-hidden="true" />sales@storyboundhouse.com</a>
              <a className="footerEmail" href="mailto:support@storyboundhouse.com"><Mail size={20} aria-hidden="true" />support@storyboundhouse.com</a>
              <p className="footerAddress"><MapPin size={22} aria-hidden="true" /><span>434 S Spring St Los Angeles, CA 90013, USA</span></p>
            </address>
          </div>
          <div className="footerMeta">
            <p>© 2026, Storybound House</p>
            <div><Link href="/terms">Terms &amp; Conditions</Link><span>|</span><Link href="/privacy">Privacy Policy</Link></div>
            <Image src="/images/faq-footer/payment-methods.png" alt="Accepted secure payment methods" width={332} height={76} />
            <div className="footerSocials" aria-label="Storybound House social media">
              <strong>Find us:</strong>
              <span aria-label="Facebook">f</span>
              <span aria-label="X">𝕏</span>
              <span aria-label="Instagram">◎</span>
              <span aria-label="LinkedIn">in</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
