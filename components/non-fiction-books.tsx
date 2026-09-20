"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const books = [
  { src: "/images/nonfiction-books/214.png", title: "The Principles of Project Management", author: "Meri Williams" },
  { src: "/images/nonfiction-books/215.png", title: "Real Analysis", author: "Miklós Laczkovich & Vera T. Sós" },
  { src: "/images/nonfiction-books/221.png", title: "Diversity of Cultural Expressions in the Digital Era", author: "Lilian Richieri Hanania & Anne-Thida Norodom" },
  { src: "/images/nonfiction-books/229.png", title: "Investing in Maternal and Child Health", author: "National Business Group on Health" },
  { src: "/images/nonfiction-books/228.png", title: "Healthy Snacks for Kids", author: "Tarla Dalal" },
  { src: "/images/nonfiction-books/230.png", title: "Watercolor Crayons", author: "Lyra" },
  { src: "/images/nonfiction-books/231.png", title: "The Coaching Toolkit for Child Welfare Practice", author: "UC Davis Extension" },
];

export function NonFictionBooks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeRef = useRef<number | null>(null);
  const move = (direction: -1 | 1) => setActiveIndex(current => (current + direction + books.length) % books.length);
  const manualMove = (direction: -1 | 1) => {
    pausedRef.current = true;
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    move(direction);
    resumeRef.current = window.setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => { if (!pausedRef.current) setActiveIndex(current => (current + 1) % books.length); }, 3200);
    return () => {
      window.clearInterval(timer);
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
  }, []);

  const visibleBooks = Array.from({ length: 5 }, (_, offset) => books[(activeIndex + offset) % books.length]);

  return (
    <section className="fictionBooks" aria-labelledby="nonfiction-related-books-title" onMouseEnter={() => { pausedRef.current = true; }} onMouseLeave={() => { pausedRef.current = false; }} onFocus={() => { pausedRef.current = true; }} onBlur={() => { pausedRef.current = false; }}>
      <div className="fictionBooksHeading">
        <div><p className="eyebrow">Selected non-fiction titles</p><h2 id="nonfiction-related-books-title">A Few Related Books</h2></div>
        <div className="fictionBookControls" aria-label="Related non-fiction book carousel controls">
          <button type="button" onClick={() => manualMove(-1)} aria-label="View previous non-fiction books"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => manualMove(1)} aria-label="View next non-fiction books"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="fictionBooksTrack" key={activeIndex}>
        {visibleBooks.map(book => (
          <article className="fictionBookCard" key={book.src}>
            <div className="fictionBookCover"><Image src={book.src} alt={`${book.title} book cover`} width={500} height={700} sizes="(max-width: 760px) 66vw, 210px" /></div>
            <h3>{book.title}</h3><p>By {book.author}</p>
            <div className="fictionBookRating" aria-label="Five out of five stars"><span>Rating:</span>{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
