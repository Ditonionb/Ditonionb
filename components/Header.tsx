"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { clsx } from "clsx";
import { useWatchlist } from "@/context/WatchlistContext";

const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/#series" },
  { label: "Movies", href: "/#movies" },
  { label: "Documentaries", href: "/#documentary" },
  { label: "Watchlist", href: "/watchlist" }
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { watchlist } = useWatchlist();
  const [query, setQuery] = useState("");

  const watchlistCount = useMemo(() => watchlist.length, [watchlist]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight">
          <span className="rounded-full bg-white px-2 py-1 text-background">Di</span>
          <span className="text-primary-light">La</span>
          <span className="text-white">TV</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 text-sm font-semibold md:flex">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "transition-colors",
                pathname === item.href
                  ? "text-primary-light"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <form
          onSubmit={handleSearch}
          className="glass-panel flex w-full max-w-sm items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          <input
            type="search"
            placeholder="Search DiLa TV"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="flex-1 bg-transparent outline-none placeholder:text-white/50"
            aria-label="Search titles"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          >
            Search
          </button>
        </form>

        <Link
          href="/watchlist"
          className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-primary/60 hover:text-white md:inline-flex"
        >
          Watchlist
          {watchlistCount > 0 ? (
            <span className="badge bg-primary/40 text-primary-light">{watchlistCount}</span>
          ) : null}
        </Link>
      </div>
    </header>
  );
}
