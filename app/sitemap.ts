import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/pages";
import { fictionGenres } from "@/lib/fiction-genres";
import { fantasySubgenres, ghostwritingSpecialties, nonFictionTopics, romanceSubgenres } from "@/lib/service-submenus";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://storyboundhouse.com";
  const pages: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: slug === "ghostwriting" ? 0.9 : 0.8,
  }));
  const genrePages: MetadataRoute.Sitemap = fictionGenres.map(({ slug }) => ({
    url: `${baseUrl}/fiction/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  const submenuPages: MetadataRoute.Sitemap = [
    ...romanceSubgenres.map(({ slug }) => `/fiction/romance/${slug}`),
    ...fantasySubgenres.map(({ slug }) => `/fiction/fantasy/${slug}`),
    ...nonFictionTopics.map(({ slug }) => `/non-fiction/${slug}`),
    ...ghostwritingSpecialties.map(({ slug }) => `/ghostwriting/${slug}`),
  ].map(path => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }));
  return [{ url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }, ...pages, ...genrePages, ...submenuPages];
}
