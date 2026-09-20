import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FictionBooks } from "@/components/fiction-books";
import { FooterContactForm } from "@/components/footer-contact-form";
import { AuthorsCarousel } from "@/components/authors-carousel";

const strengths = [
  "Thoughtful project timelines",
  "A voice that remains authentically yours",
  "Clear, consistent updates",
  "Polished, publication-ready writing",
  "Purposeful research",
  "Flexible support built around your manuscript",
];

const genres = [
  "Action & Adventure",
  "Anthology",
  "Children’s Fiction",
  "Drama",
  "Fairy Tales",
  "Horror",
  "Romance",
  "Satire",
  "Travel Fiction",
  "Western",
  "Fantasy",
  "Literary Fiction",
];

const genreSpecialties = ["Drama", "Mythology", "Mystery", "Fantasy", "Romance", "Satire", "Tragicomedy", "Horror", "Science Fiction", "Tragedy", "Thriller", "Comedy", "Humor"];
const fictionForms = ["Screenplays", "Novellas", "Novels", "Plays", "Poems", "Short Stories", "Novelettes", "Flash Fiction"];

export function FictionOverview() {
  return (
    <>
      <section className="fictionOverview" aria-labelledby="fiction-overview-title">
        <div className="fictionOverviewInner">
          <div className="fictionIntroCopy">
            <p className="eyebrow">Fiction specialists</p>
            <h2 id="fiction-overview-title">Our Team of Passionate <span>Fiction Ghostwriters</span></h2>
            <p>Compelling fiction takes more than an exciting premise. It asks for characters readers believe in, a world they can enter, and a narrative that keeps rewarding their attention. Our fiction ghostwriters shape those elements into a cohesive story while preserving the ideas, tone, and emotional truth that make the book yours.</p>
            <p>From early concept development to a complete manuscript, Storybound House provides careful creative partnership at every stage. We help clarify the plot, strengthen character arcs, refine pacing, and turn imaginative possibilities into pages readers will want to keep turning.</p>
            <Link className="fictionTextLink" href="/contact">Discuss your story <ArrowRight size={17} /></Link>
          </div>

          <div className="fictionIntroVisual">
            <div className="fictionImageFrame" aria-hidden="true" />
            <Image src="/images/fic-img3.jpg" alt="A carefully arranged collection of vintage storybooks" width={848} height={574} sizes="(max-width: 900px) 88vw, 40vw" />
          </div>

          <div className="fictionLongCopy">
            <article>
              <h3>What Makes Our Fiction Services Distinctive?</h3>
              <p>Our approach begins with listening. A dedicated fiction specialist learns the world you want to create, the readers you hope to reach, and the feeling you want the finished book to leave behind. From there, we develop a practical creative direction for structure, voice, character, and pacing—then refine each chapter through an organized review process.</p>
              <p>Whether you arrive with a complete outline, an unfinished draft, or only the central idea, we meet the project where it is. Research and genre awareness support the writing without flattening its originality, and every important creative decision remains collaborative.</p>
            </article>
            <article>
              <h3>Why Authors Count on Our Team</h3>
              <p>Trust is essential when another writer helps bring your story to life. Our process is confidential, transparent, and centered on your approval. You receive attentive guidance, dependable communication, and a manuscript developed with professional discipline—while retaining complete ownership of the work.</p>
              <ul className="fictionStrengths">
                {strengths.map((strength) => <li key={strength}><Check size={17} />{strength}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="fictionGenreBand" aria-labelledby="fiction-genres-title">
        <div>
          <h2 id="fiction-genres-title">Our Fiction Ghostwriters Create <span>Remarkable Reads</span> Across Genres</h2>
        </div>
        <ul>
          {genres.map((genre) => <li key={genre}><span aria-hidden="true">•</span>{genre}</li>)}
        </ul>
      </section>

      <section className="fictionCapabilities" aria-label="Fiction genres and writing forms">
        <div className="fictionCapabilityCard fictionCapabilityGenres">
          <span className="capabilityAccent" aria-hidden="true" />
          <h2>Genres</h2>
          <p>Our ghostwriters specialize across the full spectrum of fiction genres.</p>
          <ul>
            {genreSpecialties.map((item) => <li key={item}><Check size={21} />{item}</li>)}
          </ul>
        </div>
        <div className="fictionCapabilityCard fictionCapabilityForms">
          <span className="capabilityAccent" aria-hidden="true" />
          <h2>Forms</h2>
          <p>Our writers create compelling narrative and dialogue for a wide range of formats.</p>
          <ul>
            {fictionForms.map((item) => <li key={item}><Check size={21} />{item}</li>)}
          </ul>
        </div>
      </section>
      <FictionBooks />
      <AuthorsCarousel />
      <FooterContactForm />
    </>
  );
}
