export const fictionGenres = [
  { slug: "action-adventure", label: "Action & Adventure", focus: "high-stakes momentum, cinematic set pieces, and determined protagonists" },
  { slug: "anthology", label: "Anthology", focus: "cohesive collections with distinct stories, voices, and thematic connections" },
  { slug: "art-fiction", label: "Art", focus: "creative worlds, artistic lives, and stories shaped by visual culture" },
  { slug: "children", label: "Children", focus: "age-appropriate language, imaginative concepts, and warm, memorable characters" },
  { slug: "drama", label: "Drama", focus: "human conflict, emotional stakes, and character-led turning points" },
  { slug: "fairy-tale", label: "Fairy Tale", focus: "timeless wonder, symbolic storytelling, and fresh interpretations of familiar traditions" },
  { slug: "fantasy", label: "Fantasy", focus: "immersive worlds, coherent magic systems, and memorable quests" },
  { slug: "graphic-novels", label: "Graphic Novels", focus: "visual storytelling, purposeful scene construction, and dialogue built for the page" },
  { slug: "historical-fiction", label: "Historical Fiction", focus: "period detail, authentic settings, and vivid human stories" },
  { slug: "horror", label: "Horror", focus: "atmosphere, escalating dread, and unforgettable encounters with the unknown" },
  { slug: "literary-fiction", label: "Literary Fiction", focus: "layered prose, nuanced characters, and ideas that linger after the final page" },
  { slug: "mystery-thriller-crime", label: "Mystery, Thriller & Crime", focus: "carefully paced suspense, convincing clues, and compelling reveals" },
  { slug: "new-adult", label: "New Adult", focus: "independence, identity, relationships, and the transition into adult life" },
  { slug: "romance", label: "Romance", focus: "emotionally engaging relationships and satisfying character arcs" },
  { slug: "satire", label: "Satire", focus: "sharp observation, purposeful humor, and stories that expose deeper truths" },
  { slug: "travel-fiction", label: "Travel", focus: "evocative destinations, cultural texture, and journeys that transform the protagonist" },
  { slug: "western", label: "Western", focus: "rugged settings, moral tension, and character-driven frontier stories" },
  { slug: "womens-fiction", label: "Women’s Fiction", focus: "complex relationships, personal transformation, and emotionally grounded journeys" },
  { slug: "young-adult", label: "Young Adult (YA)", focus: "immediate voices, meaningful growth, and themes that resonate with younger readers" },
] as const;

export type FictionGenreSlug = (typeof fictionGenres)[number]["slug"];

export function getFictionGenre(slug: string) {
  return fictionGenres.find(genre => genre.slug === slug);
}
