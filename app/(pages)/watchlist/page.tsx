"use client";

import Link from "next/link";
import ShowCard from "@/components/ShowCard";
import { useWatchlist } from "@/context/WatchlistContext";

export default function WatchlistPage() {
  const { watchlist, clearWatchlist } = useWatchlist();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-wide text-white/50">Library</p>
          <h1 className="text-4xl font-bold text-white">My Watchlist</h1>
          <p className="text-sm text-white/60">{watchlist.length} saved title{watchlist.length === 1 ? "" : "s"}.</p>
        </div>
        {watchlist.length > 0 ? (
          <button
            type="button"
            onClick={clearWatchlist}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-secondary hover:text-secondary"
          >
            Clear Watchlist
          </button>
        ) : null}
      </div>

      {watchlist.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {watchlist.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      ) : (
        <div className="glass-panel space-y-4 rounded-3xl px-6 py-10 text-sm text-white/70">
          <p className="font-semibold text-white">Your watchlist is empty.</p>
          <p>Discover a story that matches your mood:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Jump into our <Link href="/#top10" className="text-primary-light">Top 10</Link> to see what everyone is
              streaming.
            </li>
            <li>
              Explore <Link href="/#exclusive" className="text-primary-light">DiLa Exclusives</Link> you cannot find anywhere else.
            </li>
            <li>Save titles by selecting “Add to Watchlist” on any movie or series.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
