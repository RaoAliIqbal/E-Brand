import Image from "next/image";

const brandLogos = Array.from({ length: 6 }, (_, index) => ({
  src: `/images/brand-logos/site-logo${index + 1}.png`,
  alt: `Publishing brand ${index + 1}`,
}));

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="brandLogoSet" aria-hidden={hidden || undefined}>
      {brandLogos.map(logo => (
        <div className="brandLogoItem" key={`${hidden ? "duplicate-" : ""}${logo.src}`}>
          <Image src={logo.src} alt={hidden ? "" : logo.alt} width={141} height={40} />
        </div>
      ))}
    </div>
  );
}

export function BrandLogoSlider() {
  return (
    <section className="brandSlider" aria-label="Publishing brand logos">
      <div className="brandSliderViewport">
        <div className="brandSliderTrack">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
