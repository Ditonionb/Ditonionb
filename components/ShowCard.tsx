"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { Show } from "@/data/shows";
import { useWatchlist } from "@/context/WatchlistContext";

interface ShowCardProps {
  show: Show;
}

export default function ShowCard({ show }: ShowCardProps) {
  const { toggleWatchlist, isSaved } = useWatchlist();
  const saved = useMemo(() => isSaved(show.id), [isSaved, show.id]);

  return (
    <article className="group w-48 shrink-0 snap-start md:w-56">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
        <Image
          src={show.posterImage}
          alt={show.title}
          fill
          sizes="(max-width: 768px) 12rem, 14rem"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-3 bottom-3 space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center justify-between text-xs text-white/80">
            <span className="badge bg-white/20 text-white/90">{show.maturity}</span>
            <span className="font-semibold">★ {show.rating.toFixed(1)}</span>
          </div>
          <button
            type="button"
            onClick={() => toggleWatchlist(show)}
            className="w-full rounded-full bg-primary/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary"
          >
            {saved ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
          <Link
            href={`/shows/${show.id}`}
            className="block w-full rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white/90 transition hover:border-primary hover:text-primary-light"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="mt-3 space-y-1 text-sm">
        <Link href={`/shows/${show.id}`} className="line-clamp-2 font-semibold text-white transition hover:text-primary-light">
          {show.title}
        </Link>
        <p className="line-clamp-2 text-xs text-white/60">{show.tagline}</p>
      </div>
    </article>
  );
}
