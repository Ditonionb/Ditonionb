"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { Show } from "@/data/shows";
import { useWatchlist } from "@/context/WatchlistContext";

interface ShowActionsProps {
  show: Show;
}

export default function ShowActions({ show }: ShowActionsProps) {
  const { toggleWatchlist, isSaved } = useWatchlist();
  const saved = useMemo(() => isSaved(show.id), [isSaved, show.id]);

  return (
    <div className="flex flex-wrap gap-3 text-sm font-semibold">
      <a
        href="#player"
        className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-background shadow-lg transition hover:scale-[1.02]"
      >
        <span>▶</span>
        <span>Play</span>
      </a>
      <button
        type="button"
        onClick={() => toggleWatchlist(show)}
        className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white transition hover:border-primary hover:text-primary-light"
      >
        <span>{saved ? "✓" : "+"}</span>
        <span>{saved ? "In Watchlist" : "Add to Watchlist"}</span>
      </button>
      <Link
        href={`#details`}
        className="rounded-full bg-white/15 px-5 py-3 text-white/80 transition hover:bg-white/25"
      >
        Details
      </Link>
    </div>
  );
}
