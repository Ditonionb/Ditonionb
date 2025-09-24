"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { Show } from "@/data/shows";
import { useWatchlist } from "@/context/WatchlistContext";

interface HeroProps {
  show: Show;
}

export default function Hero({ show }: HeroProps) {
  const { toggleWatchlist, isSaved } = useWatchlist();
  const saved = useMemo(() => isSaved(show.id), [isSaved, show.id]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={show.backgroundImage}
          alt=""
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 md:flex-row md:items-end md:py-32">
        <div className="max-w-2xl space-y-6">
          <span className="badge bg-white/20 text-white/80">Featured Spotlight</span>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">{show.title}</h1>
          <p className="text-lg text-white/80 md:text-xl">{show.tagline}</p>
          <p className="max-w-xl text-sm text-white/70 md:text-base">{show.synopsis}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-white/60">
            <span>{show.maturity}</span>
            <span>•</span>
            <span>{show.runtime}</span>
            <span>•</span>
            <span>{show.year}</span>
            <span>•</span>
            <span>{show.genres.slice(0, 3).join(" • ")}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href={`/shows/${show.id}`}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-background shadow-lg transition hover:scale-[1.02]"
            >
              <span>▶</span>
              <span>Watch Now</span>
            </Link>
            <button
              type="button"
              onClick={() => toggleWatchlist(show)}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-primary hover:text-primary-light"
            >
              <span>{saved ? "✓" : "+"}</span>
              <span>{saved ? "In Watchlist" : "Add to Watchlist"}</span>
            </button>
            <Link
              href={`/shows/${show.id}?tab=details`}
              className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white/80 transition hover:bg-white/20"
            >
              More Info
            </Link>
          </div>
        </div>
        <div className="hidden h-72 w-48 shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-glow md:block">
          <Image src={show.posterImage} alt={show.title} width={320} height={480} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
