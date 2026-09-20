"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const defaultBooks = [
  { src: "/images/fiction-books/204.png", title: "Off the Rebound", author: "J.D. Nero" },
  { src: "/images/fiction-books/210.png", title: "Darkside", author: "S.K.S. Perry" },
  { src: "/images/fiction-books/213.png", title: "The Nightingale", author: "Kristin Hannah" },
  { src: "/images/fiction-books/227.png", title: "Understanding Child Language Acquisition", author: "Caroline Rowland" },
  { src: "/images/fiction-books/233.png", title: "Mad Pursuits", author: "Gwendolyn Heavens" },
  { src: "/images/fiction-books/fic-2.jpg", title: "Before You Are Licensed", author: "Katherine Scarim" },
  { src: "/images/fiction-books/fic-3.jpg", title: "The Growing Season", author: "Sarah Frey" },
  { src: "/images/fiction-books/194.png", title: "Descartes: An Intellectual Biography", author: "Stephen Gaukroger" },
  { src: "/images/fiction-books/195.png", title: "Kant: A Biography", author: "Manfred Kuehn" },
  { src: "/images/fiction-books/197.png", title: "Gulliver’s Travels", author: "Jonathan Swift" },
  { src: "/images/fiction-books/199.png", title: "Fury on Earth", author: "Myron Sharaf" },
  { src: "/images/fiction-books/202.png", title: "The Forty Rules of Love", author: "Elif Shafak" },
];

export function FictionBooks({ books = defaultBooks }: { books?: { src: string; title: string; author: string }[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const move = (direction: -1 | 1) => setActiveIndex(current => (current + direction + books.length) % books.length);

  const manualMove = (direction: -1 | 1) => {
    pausedRef.current = true;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    move(direction);
    resumeTimerRef.current = window.setTimeout(() => { pausedRef.current = false; }, 5000);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!pausedRef.current) setActiveIndex(current => (current + 1) % books.length);
    }, 3200);

    return () => {
      window.clearInterval(timer);
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, [books.length]);

  const visibleBooks = Array.from({ length: Math.min(5, books.length) }, (_, offset) => books[(activeIndex + offset) % books.length]);

  return (
    <section
      className="fictionBooks"
      aria-labelledby="related-books-title"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
    >
      <div className="fictionBooksHeading">
        <div>
          <p className="eyebrow">Selected titles</p>
          <h2 id="related-books-title">A Few Related Books</h2>
        </div>
        <div className="fictionBookControls" aria-label="Related book carousel controls">
          <button type="button" onClick={() => manualMove(-1)} aria-label="View previous books"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => manualMove(1)} aria-label="View next books"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className={`fictionBooksTrack${books.length === 4 ? " fictionBooksTrackFour" : ""}`} key={activeIndex}>
        {visibleBooks.map((book) => (
          <article className="fictionBookCard" key={book.src}>
            <div className="fictionBookCover">
              <Image src={book.src} alt={`${book.title} book cover`} width={500} height={700} sizes="(max-width: 760px) 66vw, 210px" />
            </div>
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <div className="fictionBookRating" aria-label="Five out of five stars">
              <span>Rating:</span>{Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" />)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
