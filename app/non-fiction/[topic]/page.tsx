import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubservicePage } from "@/components/subservice-page";
import { ServicePageClosing } from "@/components/service-page-closing";
import { NonFictionTopicContent } from "@/components/non-fiction-topic-content";
import { findBySlug, nonFictionTopics } from "@/lib/service-submenus";

const topicHeroConfig: Record<string, { image: string; title: string }> = {
  "self-help-growth": { image: "/images/non-fiction/self-help-hero.jpg", title: "Best self-help and personal development book writing services" },
  "health-fitness-wellness": { image: "/images/non-fiction/health-fitness-wellness-hero.jpg", title: "Health, fitness, and wellness book writing services for trusted experts" },
  "business-finance": { image: "/images/non-fiction/business-finance-hero.jpg", title: "Business and finance book writing for experts, leaders, and innovators" },
  politics: { image: "/images/non-fiction/politics-hero.jpg", title: "Political book writing services for credible ideas and lasting influence" },
  history: { image: "/images/non-fiction/history-hero.jpg", title: "History book writing grounded in research and brought to life through narrative" },
  spirituality: { image: "/images/non-fiction/spirituality-hero.jpg", title: "Spiritual book writing that honors your message and connects with readers" },
  "family-relationships": { image: "/images/non-fiction/family-relationships-hero.jpg", title: "Family story writing that preserves the people, memories, and moments that matter" },
  essay: { image: "/images/non-fiction/essay-hero.jpg", title: "Professional essay writing that gives your ideas clarity, structure, and impact" },
  journalism: { image: "/images/non-fiction/journalism-hero.jpg", title: "Journalism writing built on credible sources, clear reporting, and public impact" },
  travel: { image: "/images/non-fiction/travel-hero.jpg", title: "Travel writing that turns real journeys into stories readers can experience" },
  education: { image: "/images/non-fiction/education-hero.jpg", title: "Education book writing that turns expert knowledge into clear, engaging learning" },
  law: { image: "/images/non-fiction/law-hero.jpg", title: "Legal writing that makes complex ideas clear, credible, and compelling" },
  cookbooks: { image: "/images/non-fiction/cookbooks-hero.jpg", title: "Cookbook writing that turns culinary expertise into recipes readers can trust" },
  relationships: { image: "/images/non-fiction/relationships-hero.jpg", title: "Relationship writing that turns human insight into guidance readers can use" },
  "hobbies-crafts": { image: "/images/non-fiction/hobbies-crafts-hero.jpg", title: "Hobbies and crafts writing that turns hands-on skill into an inspiring guide" },
  sports: { image: "/images/non-fiction/sports-hero.png", title: "Sports writing that turns hard-earned experience into an unforgettable book" },
  science: { image: "/images/non-fiction/science-hero.jpg", title: "Science writing that turns complex research into clear, credible discovery" },
};

export function generateStaticParams() { return nonFictionTopics.map(item => ({ topic: item.slug })); }

export async function generateMetadata({ params }: PageProps<"/non-fiction/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const item = findBySlug(nonFictionTopics, topic);
  if (!item) return {};
  const title = `${item.label} Writing Services`;
  const description = `Professional ${item.label.toLowerCase()} writing and editorial support from Storybound House.`;
  return { title, description, alternates: { canonical: `/non-fiction/${topic}` } };
}

export default async function NonFictionTopicPage({ params }: PageProps<"/non-fiction/[topic]">) {
  const { topic } = await params;
  const item = findBySlug(nonFictionTopics, topic);
  if (!item) notFound();
  const hero = topicHeroConfig[item.slug];
  return (
    <>
      <SubservicePage
        label={item.label}
        category="Non-fiction"
        heroImage={hero?.image}
        heroTitle={hero?.title}
      >
        <NonFictionTopicContent topic={topic} />
      </SubservicePage>
      <ServicePageClosing />
    </>
  );
}
