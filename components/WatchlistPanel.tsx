"use client";

import Link from "next/link";
import ShowCard from "@/components/ShowCard";
import { useWatchlist } from "@/context/WatchlistContext";

export default function WatchlistPanel() {
  const { watchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <section className="glass-panel flex flex-col gap-4 rounded-3xl px-6 py-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Your Watchlist is waiting</h2>
          <p className="text-sm text-white/70">
            Add titles to watch later. They will appear here so you can jump right back in.
          </p>
        </div>
        <Link
          href="#trending"
          className="self-start rounded-full bg-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white"
        >
          Browse Trending
        </Link>
      </section>
    );
  }

  return (
    <section className="glass-panel space-y-5 rounded-3xl px-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">Continue watching</h2>
          <p className="text-sm text-white/70">
            Pick up where you left off across your saved titles.
          </p>
        </div>
        <Link
          href="/watchlist"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-primary hover:text-primary-light"
        >
          View all
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3">
        {watchlist.slice(0, 5).map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
}
