export const romanceSubgenres = [
  { slug: "contemporary-romance", label: "Contemporary Romance" },
  { slug: "historical-romance", label: "Historical Romance" },
  { slug: "paranormal-romance", label: "Paranormal Romance" },
] as const;

export const fantasySubgenres = [
  { slug: "dark-fantasy", label: "Dark Fantasy" },
  { slug: "epic-high-fantasy", label: "Epic/High Fantasy" },
  { slug: "magical-realism", label: "Magical Realism" },
  { slug: "urban-fantasy", label: "Urban Fantasy" },
] as const;

export const nonFictionTopics = [
  { slug: "business-finance", label: "Business & Finance" },
  { slug: "cookbooks", label: "Cookbooks" },
  { slug: "education", label: "Education" },
  { slug: "essay", label: "Essay" },
  { slug: "family-relationships", label: "Family & Relationships" },
  { slug: "health-fitness-wellness", label: "Health, Fitness & Wellness" },
  { slug: "history", label: "History" },
  { slug: "hobbies-crafts", label: "Hobbies & Crafts" },
  { slug: "journalism", label: "Journalism" },
  { slug: "law", label: "Law" },
  { slug: "politics", label: "Politics" },
  { slug: "relationships", label: "Relationships" },
  { slug: "science", label: "Science" },
  { slug: "self-help-growth", label: "Self-Help & Growth" },
  { slug: "spirituality", label: "Spirituality" },
  { slug: "sports", label: "Sports" },
  { slug: "travel", label: "Travel" },
] as const;

export const ghostwritingSpecialties = [
  { slug: "autobiography", label: "Autobiography" },
  { slug: "biography", label: "Biography" },
  { slug: "business-book-writing", label: "Business Book Writing" },
  { slug: "business-proposals", label: "Business Proposals" },
  { slug: "celebrity-biographies-autobiographies", label: "Celebrity Biographies & Autobiographies" },
  { slug: "ebook-writing", label: "EBook Writing" },
  { slug: "informative-writing", label: "Informative Writing" },
  { slug: "medical-writing", label: "Medical Writing" },
  { slug: "memoir", label: "Memoir" },
  { slug: "screenplay-ghostwriting", label: "Screenplay Ghostwriting" },
  { slug: "seo-blog-writing", label: "SEO Blog Writing" },
  { slug: "social-media-ghostwriting", label: "Social Media Ghostwriting" },
  { slug: "songwriting", label: "Songwriting" },
  { slug: "speech-writing", label: "Speech Writing" },
  { slug: "technical-writing", label: "Technical Writing" },
  { slug: "thought-leadership-writing", label: "Thought Leadership Writing" },
  { slug: "whitepaper-writing", label: "Whitepaper Writing" },
] as const;

export function findBySlug<T extends readonly { slug: string; label: string }[]>(items: T, slug: string) {
  return items.find(item => item.slug === slug);
}
