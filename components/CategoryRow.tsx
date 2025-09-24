"use client";

import { useRef } from "react";
import type { Show } from "@/data/shows";
import ShowCard from "@/components/ShowCard";

interface CategoryRowProps {
  id?: string;
  title: string;
  description?: string;
  shows: Show[];
}

export default function CategoryRow({ id, title, description, shows }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const distance = container.clientWidth * 0.9;
    const nextPosition =
      direction === "left" ? container.scrollLeft - distance : container.scrollLeft + distance;

    container.scrollTo({ left: nextPosition, behavior: "smooth" });
  };

  if (shows.length === 0) {
    return null;
  }

  return (
    <section id={id} className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {description ? <p className="text-sm text-white/60">{description}</p> : null}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-primary hover:text-primary-light md:flex"
            aria-label={`Scroll ${title} left`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-primary hover:text-primary-light md:flex"
            aria-label={`Scroll ${title} right`}
          >
            ›
          </button>
        </div>
      </header>
      <div
        ref={scrollRef}
        className="flex snap-x gap-4 overflow-x-auto pb-4"
      >
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
