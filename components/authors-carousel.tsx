"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const authors = [
  { image: "7.jpeg", name: "Scott Truax", bio: "An experienced screenwriter and fiction ghostwriter who brings practical production insight to cinematic, character-led stories." },
  { image: "6.jpeg", name: "Judith Abbot", bio: "A thoughtful writer with a strong command of language, emotional nuance, and the details that make a fictional world feel lived in." },
  { image: "1.jpeg", name: "Adams Coleman", bio: "An accomplished writer whose background spans education, narrative development, and content production across multiple genres." },
  { image: "11.jpeg", name: "Dennis Hughes", bio: "A curious, research-minded storyteller who combines audience awareness with clear structure and engaging prose." },
  { image: "8.jpeg", name: "Brett Thomas", bio: "A dedicated ghostwriter with extensive long-form experience and a particular instinct for pace, voice, and memorable character arcs." },
  { image: "4.jpeg", name: "Stewart Burton", bio: "A seasoned academic and writer who makes complex subjects accessible while bringing precision and depth to every manuscript." },
  { image: "3.jpeg", name: "Jesse McKelvey", bio: "A lifelong storyteller whose imaginative approach is grounded in careful planning, attentive collaboration, and polished execution." },
  { image: "12.jpeg", name: "Spencer Whitfield", bio: "A specialist in purposeful, uplifting narratives that help readers see familiar challenges through a fresh and hopeful lens." },
  { image: "9.jpeg", name: "Nanda Behl", bio: "A detail-focused researcher and writer experienced in shaping broad source material into cohesive, compelling narratives." },
  { image: "2.jpeg", name: "Elbert Smith", bio: "A professional screenwriter and ghostwriter who balances fidelity to the author’s concept with inventive narrative craft." },
  { image: "10.jpeg", name: "Alex Chaban", bio: "An entrepreneurial writer who brings real-world perspective, energy, and a strong sense of momentum to collaborative projects." },
  { image: "5.jpeg", name: "Jennifer Tarango", bio: "A versatile writer whose practical experience and creative curiosity inform grounded characters and authentic storytelling." },
];

export function AuthorsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeRef = useRef<number | null>(null);

  const move = (direction: -1 | 1) => setActiveIndex(current => (current + direction + authors.length) % authors.length);

  const manualMove = (direction: -1 | 1) => {
    pausedRef.current = true;
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    move(direction);
    resumeRef.current = window.setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => { if (!pausedRef.current) setActiveIndex(current => (current + 1) % authors.length); }, 4200);
    return () => {
      window.clearInterval(timer);
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
  }, []);

  const visibleAuthors = Array.from({ length: 3 }, (_, offset) => authors[(activeIndex + offset) % authors.length]);

  return (
    <section className="authorsSection" aria-labelledby="authors-title">
      <div className="authorsHeading">
        <p className="eyebrow">The people behind the pages</p>
        <h2 id="authors-title">Our Authors</h2>
        <p>Meet experienced writers who support projects from the earliest idea to a polished manuscript, whatever your writing and publishing needs may be.</p>
      </div>
      <div
        className="authorsTrack"
        key={activeIndex}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onFocus={() => { pausedRef.current = true; }}
        onBlur={() => { pausedRef.current = false; }}
      >
        {visibleAuthors.map((author) => (
            <article className="authorCard" key={author.image}>
              <Image src={`/images/authors/${author.image}`} alt={author.name} width={760} height={610} sizes="(max-width: 760px) 82vw, 370px" />
              <h3>{author.name}</h3>
              <p>{author.bio}</p>
            </article>
        ))}
      </div>
      <div className="authorsControls" aria-label="Author carousel controls">
        <button type="button" onClick={() => manualMove(-1)} aria-label="View previous author"><ChevronLeft size={19} /></button>
        <button type="button" onClick={() => manualMove(1)} aria-label="View next author"><ChevronRight size={19} /></button>
      </div>
    </section>
  );
}
