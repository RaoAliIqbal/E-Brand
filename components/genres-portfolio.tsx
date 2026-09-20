import Image from "next/image";

const genres = [
  "Religious and Faith based",
  "Self-Help",
  "Autobiography",
  "Academic Guides",
  "Travel and Lifestyle",
  "Medical and Healthcare",
  "Gaming and Fitness",
  "Fashion and Entertainment",
  "Food and Beverage",
  "Business and Real Estate",
  "Education and Day Care",
  "Startups and Consultants",
];

const bookCovers = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/portfolio/pport${index + 1}.jpg`,
  alt: `Book cover example ${index + 1}`,
}));

function CoverSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="portfolioCoverSet" aria-hidden={hidden || undefined}>
      {bookCovers.map(cover => (
        <div className="portfolioCover portfolio-watermark protected-content" key={`${hidden ? "duplicate-" : ""}${cover.src}`}>
          <Image src={cover.src} alt={hidden ? "" : cover.alt} width={500} height={755} />
        </div>
      ))}
    </div>
  );
}

export function GenresPortfolio() {
  return (
    <>
      <section className="genresSection" aria-labelledby="genres-title">
        <div className="genresContent">
          <div className="genresIntro">
            <Image className="genresCorner" src="/images/genres/corner-frame.png" alt="" width={348} height={404} />
            <div className="genresIntroText">
              <h2 id="genres-title">Genres that we have<br />covered in the past for<br />our clients</h2>
              <p>We offer every possible genre, from all the mainstream ones to their sub-categories. Our writers are well-read, well-versed, and experts in their respective genres.</p>
            </div>
          </div>

          <div className="genresPanel">
            <ul>
              {genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
            <Image className="genresBook" src="/images/genres/featured-book.png" alt="Rich AF by Vivian Tu" width={398} height={544} />
          </div>
        </div>
      </section>
      <BooksPortfolio />
    </>
  );
}

export function BooksPortfolio() {
  return (
    <section className="portfolioSection" aria-labelledby="portfolio-title">
      <div className="portfolioBackdrop" aria-hidden="true" />
      <div className="portfolioHeading">
        <h2 id="portfolio-title">Explore Books Across The Genres<br />Our Writers Know Best.</h2>
        <p>Our writers work across mainstream genres and their many subcategories, bringing informed craft and a thoughtful approach to every manuscript.</p>
      </div>
      <div className="portfolioViewport">
        <div className="portfolioTrack">
          <CoverSet />
          <CoverSet hidden />
        </div>
      </div>
    </section>
  );
}
