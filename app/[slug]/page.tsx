import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { FictionOverview } from "@/components/fiction-overview";
import { NonFictionOverview } from "@/components/non-fiction-overview";
import { GhostOffer, GhostwritingPage } from "@/components/ghostwriting-page";
import { EditingPage, EditingRecognition } from "@/components/editing-page";
import { PublishingPage } from "@/components/publishing-page";
import { BookcoverPage } from "@/components/bookcover-page";
import { servicePages, type ServiceSlug } from "@/lib/pages";
import { BrandLogoSlider } from "@/components/brand-logo-slider";
import { MarketingServices, MarketingShowcase } from "@/components/marketing-services";
import { ReviewTrust } from "@/components/review-trust";
import { FooterContactForm } from "@/components/footer-contact-form";
import { PackagesMarketingComparison, PackagesPromoBanner, PackagesServices } from "@/components/packages-services";
import { FaqFooter } from "@/components/faq-footer";
import { ContactSection } from "@/components/contact-section";
import { PrivacyContent, TermsContent } from "@/components/legal-page-content";
import { QuotePopupTrigger } from "@/components/contact-popup";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug as ServiceSlug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "website" },
  };
}

export default async function ServicePage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = servicePages[slug as ServiceSlug];
  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: { "@type": "Organization", name: "Storybound House" },
  };

  return (
    <main className={slug === "fiction" ? "fictionPage" : slug === "non-fiction" ? "nonFictionPage" : slug === "ghostwriting" ? "ghostwritingPage" : slug === "editing" ? "editingPage" : slug === "publishing" ? "publishingPage" : slug === "bookcover" ? "bookcoverPage" : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      {slug === "ghostwriting" ? <GhostwritingPage /> : slug === "editing" ? <EditingPage /> : slug === "publishing" ? <PublishingPage /> : slug === "bookcover" ? <BookcoverPage /> : <>
      <section className={`innerHero${slug === "fiction" ? " fictionHero" : slug === "non-fiction" ? " nonFictionHero" : slug === "marketing" ? " marketingHero" : slug === "packages" ? " packagesHero" : slug === "contact" ? " contactHero" : ""}`}>
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.headline}</h1>
          {slug !== "terms" && slug !== "privacy" ? <p>{page.intro}</p> : null}
          {slug !== "terms" && slug !== "privacy" ? slug === "contact" ? <Link className="button" href="#contact-enquiry">Request a consultation <ArrowRight size={18} /></Link> : <QuotePopupTrigger className="button">Request a consultation <ArrowRight size={18} /></QuotePopupTrigger> : null}
        </div>
      </section>
      {slug === "marketing" ? <EditingRecognition /> : null}
      {slug === "marketing" ? <BrandLogoSlider /> : null}
      {slug === "marketing" ? <MarketingServices /> : null}
      {slug === "marketing" ? <MarketingShowcase /> : null}
      {slug === "marketing" ? <ReviewTrust /> : null}
      {slug === "marketing" ? <FooterContactForm /> : null}
      {slug === "packages" ? <PackagesServices /> : null}
      {slug === "packages" ? <PackagesPromoBanner /> : null}
      {slug === "packages" ? <PackagesMarketingComparison /> : null}
      {slug === "packages" ? <GhostOffer /> : null}
      {slug === "packages" ? <FooterContactForm /> : null}
      {slug === "packages" ? <FaqFooter /> : null}
      {slug === "contact" ? <ContactSection /> : null}
      {slug !== "marketing" && slug !== "packages" && slug !== "contact" && slug !== "terms" && slug !== "privacy" ? <section className="pagePromise">
        {["Confidential collaboration", "Complete ownership", "A process shaped around your goals"].map((item) => (
          <p key={item}><Check size={16} />{item}</p>
        ))}
      </section> : null}
      {slug === "fiction" ? <FictionOverview /> : null}
      {slug === "non-fiction" ? <NonFictionOverview /> : null}
      {slug === "terms" ? <TermsContent /> : null}
      {slug === "privacy" ? <PrivacyContent /> : null}
      </>}
    </main>
  );
}
