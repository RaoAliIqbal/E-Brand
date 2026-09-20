"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers3, Sparkles } from "lucide-react";
import type { PointerEvent } from "react";
import { FooterContactForm } from "@/components/footer-contact-form";
import { BooksPortfolio } from "@/components/genres-portfolio";
import { QuotePopupTrigger } from "@/components/contact-popup";

const coverBenefits = ["Genre-aware concepts", "Print and ebook ready", "Author-led revisions"];

const coverCraftCards = [
  { image: "/images/bookcover/customized-covers.png", title: "Customized Covers", copy: "Whether it’s an ebook or a printed edition, we bring your vision to reality—each detail shaped around your story and audience." },
  { image: "/images/bookcover/in-book-illustrations.png", title: "In-Book Illustrations", copy: "Our illustrators create expressive artwork for children’s books, comics, and visual narratives, guided by the tone and world of your book." },
  { image: "/images/bookcover/hard-book-covers.png", title: "Hard-Book Covers", copy: "We design hardback covers that match the context, character, and theme of your writing while making a memorable first impression." },
  { image: "/images/bookcover/artistic-cover-designs.png", title: "Artistic Cover Designs", copy: "From bold collage to refined minimalism, our designers develop distinctive visual concepts that invite readers to look closer." },
];

const coverMaterialCells = [
  { kind: "copy", number: "01", title: "Stylish Head and Tail Bands in Various Colors" },
  { kind: "image", image: "/images/bookcover/foil-embossing.png", alt: "Detailed foil stamping and blind embossing on a book cover" },
  { kind: "copy", number: "02", title: "Foil Stamping, Embossing and Blind Embossing" },
  { kind: "image", image: "/images/bookcover/linen-cloth.png", alt: "A book finished with elegant linen cloth" },
  { kind: "copy", number: "03", title: "Fine Linen Cloth Covers" },
  { kind: "image", image: "/images/bookcover/head-tail-bands.png", alt: "Decorative bands and finishing details on a book" },
  { kind: "copy", number: "04", title: "Printed or Colored Endpapers" },
  { kind: "image", image: "/images/bookcover/endpapers.png", alt: "A book with richly printed orange endpapers" },
  { kind: "copy", number: "05", title: "Plain or Textured Cover Materials" },
  { kind: "image", image: "/images/bookcover/hardback-paperback.png", alt: "A professionally produced hardback book" },
  { kind: "copy", number: "06", title: "Hardback and Paperback Books" },
  { kind: "image", image: "/images/bookcover/textured-materials.png", alt: "Close-up of a richly textured illustrated book cover" },
] as const;

const coverProductTypes = [
  { title: "Print Book", image: "/images/bookcover/product-print-book.png", copy: "We design ideal printed covers that express the heart of your book and attract readers in every format." },
  { title: "Photo Book", image: "/images/bookcover/product-photo-book.png", copy: "Turn your story and imagery into a beautifully composed photo book with a cover designed for maximum impact." },
  { title: "Comic Book", image: "/images/bookcover/product-comic-book.png", copy: "Build intrigue at first glance with a comic-book cover that captures the characters, energy, and world inside." },
  { title: "Magazine", image: "/images/bookcover/product-magazine.png", copy: "Give your publication a creative, contemporary magazine cover shaped around its audience, themes, and latest stories." },
  { title: "Yearbook", image: "/images/bookcover/product-yearbook.png", copy: "Preserve unforgettable moments with a distinctive yearbook cover that gives every memory a fitting introduction." },
  { title: "E-Book", image: "/images/bookcover/product-ebook.png", copy: "Make your digital release recognizable on every platform with a bold cover that remains clear at thumbnail size." },
];

export function BookcoverPage() {
  const moveScene = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--cover-x", `${x * 9}px`);
    event.currentTarget.style.setProperty("--cover-y", `${y * 6}px`);
  };

  const resetScene = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--cover-x", "0px");
    event.currentTarget.style.setProperty("--cover-y", "0px");
  };

  const serviceCards = [
    { title: "Cover Types", icon: "/images/bookcover/cover-types.png" },
    { title: "Book Cover Sizes & Bindings", icon: "/images/bookcover/cover-sizes-bindings.png" },
    { title: "Book Interiors", icon: "/images/bookcover/book-interiors.png" },
    { title: "Book Typesetting", icon: "/images/bookcover/book-typesetting.png" },
  ];

  return (
    <>
      <section className="bookcoverHero" aria-labelledby="bookcover-title" onPointerMove={moveScene} onPointerLeave={resetScene}>
        <Image className="bookcoverHeroImage" src="/images/bookcover/bookcover-hero.png" alt="Premium book cover concepts arranged in a professional design studio" fill priority sizes="100vw" />
        <div className="bookcoverHeroShade" aria-hidden="true" />
        <span className="bookcoverOrbit bookcoverOrbitOne" aria-hidden="true" />
        <span className="bookcoverOrbit bookcoverOrbitTwo" aria-hidden="true" />

        <div className="bookcoverHeroContent">
          <p className="bookcoverEyebrow"><Sparkles size={16} />Cover design that earns the first look</p>
          <h1 id="bookcover-title">Covers that speak out to your readers.</h1>
          <p className="bookcoverHeroIntro">We combine audience insight, genre conventions, expressive typography, and original art direction to create a cover that feels irresistible at full size and at thumbnail scale.</p>
          <ul>
            {coverBenefits.map((benefit) => <li key={benefit}><Check size={17} />{benefit}</li>)}
          </ul>
          <div className="bookcoverHeroActions">
            <QuotePopupTrigger className="bookcoverPrimary">Design my cover <ArrowRight size={17} /></QuotePopupTrigger>
            <Link className="bookcoverSecondary" href="/packages">Explore packages</Link>
          </div>
        </div>

        <div className="bookcoverFormatCard" aria-label="Cover formats available">
          <Layers3 size={22} />
          <div><span>Designed for every edition</span><strong>Print · Ebook · Audiobook</strong></div>
        </div>
        <div className="bookcoverScrollCue" aria-hidden="true"><span />Explore the craft</div>
      </section>

      <section className="bookcoverServices" aria-labelledby="bookcover-services-title">
        <div className="bookcoverServicesIntro">
          <div className="bookcoverServicesKicker" aria-label="Connect with professional">
            <span className="bookcoverServicesLine" aria-hidden="true" />
            <span>CONNECT WITH PROFESSIONAL</span>
            <span className="bookcoverServicesLine" aria-hidden="true" />
          </div>
          <h2 id="bookcover-services-title">Book &amp; Cover Designers</h2>
          <p>
            Books are not meant to judge by their cover. However, the impact of the stunning book cover is unimaginable. A
            cover imprints the first impression of your book to your potential readers, so let&apos;s make it worth it. Your book
            must have an eye-catching cover design to be a best seller. Luckily for you, we are the top leading company in all
            forums of book writing. At Marvel Ghostwriting, your needs will be fulfilled creatively and professionally. Our team of
            skilled designers can provide your book with a unique yet stunning book cover and more. Feel free to discuss your
            book &amp; cover idea with us.
          </p>
        </div>

        <div className="bookcoverServicesGrid">
          {serviceCards.map((card, index) => (
            <article className="bookcoverServiceCard" key={index}>
              <div className="bookcoverServiceCardIcon">
                <Image src={card.icon} alt="" width={125} height={125} />
              </div>
              <h3>{card.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bookcoverCraft" aria-labelledby="bookcover-craft-title">
        <div className="bookcoverCraftBackdrop" aria-hidden="true" />
        <header className="bookcoverCraftHeading">
          <h2 id="bookcover-craft-title">A Book Cover Is a Visual Representation<br />of the Soul of the Book Itself.</h2>
          <p>A reader may forget a title they saw long ago, but a remarkable cover stays with them. Like a memorable scene, the right visual identity gives a book presence before the first page is turned.</p>
        </header>

        <div className="bookcoverCraftGrid">
          {coverCraftCards.map((card) => (
            <article className="bookcoverCraftCard" key={card.title}>
              <Image src={card.image} alt="" width={235} height={300} />
              <div><h3>{card.title}</h3><p>{card.copy}</p></div>
            </article>
          ))}
        </div>

        <div className="bookcoverMaterials">
          <h2>We Believe in Thinking Outside the Box</h2>
          <div className="bookcoverMaterialsGrid">
            {coverMaterialCells.map((cell, index) => cell.kind === "image" ? (
              <div className="bookcoverMaterialImage" key={`${cell.image}-${index}`}>
                <Image src={cell.image} alt={cell.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
            ) : (
              <article className="bookcoverMaterialCopy" key={cell.number}>
                <span>{cell.number}</span><h3>{cell.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bookcoverAudience" aria-labelledby="bookcover-audience-title">
        <div className="bookcoverAudienceInner">
          <div className="bookcoverAudienceVisual">
            <Image src="/images/bookcover/audience-cover-visual.png" alt="A refined editorial design book presented as a premium cover mockup" width={800} height={820} />
          </div>
          <div className="bookcoverAudienceCopy">
            <h2 id="bookcover-audience-title">Our designs speak to <span>your audience.<Image src="/images/bookcover/heading-underline.png" alt="" width={190} height={55} /></span></h2>
            <p>Your reader’s eyes will first catch your book’s cover. It takes about a second to make a decision, which means every detail must invite them to pick the book off the shelf and discover what is inside. Alongside a compelling title and memorable story, an expressive cover and illustration system gives your book instant presence.</p>
            <p>That is why our experienced artists combine audience insight with purposeful design. We create covers that feel true to the manuscript, stand apart in the market, and remain recognizable from a bookstore display to the smallest digital thumbnail.</p>
            <Link className="bookcoverAudienceButton" href="/contact">Get started now <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="bookcoverProducts" aria-labelledby="bookcover-products-title">
        <div className="bookcoverProductsHeading">
          <div><span>Our</span><h2 id="bookcover-products-title">Product Types</h2></div>
          <p>Every genre and format deserves its own visual language. Our experienced designers pair publishing knowledge with thoughtful art direction to turn your idea into a polished book, comic, magazine, or digital release.</p>
        </div>
        <div className="bookcoverProductsGrid">
          {coverProductTypes.map((product) => (
            <article className="bookcoverProductCard" key={product.title}>
              <div className="bookcoverProductImage"><Image src={product.image} alt={`${product.title} cover design examples`} width={250} height={145} /></div>
              <h3>{product.title}</h3>
              <span aria-hidden="true" />
              <p>{product.copy}</p>
            </article>
          ))}
        </div>
        <div className="bookcoverProductActions">
          <QuotePopupTrigger>Get a free quote</QuotePopupTrigger>
          <Link href="/contact">Live chat</Link>
        </div>
      </section>

      <BooksPortfolio />
      <FooterContactForm />
    </>
  );
}
