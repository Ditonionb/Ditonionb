import Link from "next/link";
import ShowCard from "@/components/ShowCard";
import { searchShows } from "@/data/shows";

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q?.toString() ?? "";
  const results = query ? searchShows(query) : [];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-white/50">Search</p>
        <h1 className="text-4xl font-bold text-white">Results for “{query || "..."}”</h1>
        {query ? (
          <p className="text-sm text-white/60">
            {results.length > 0
              ? `${results.length} title${results.length > 1 ? "s" : ""} found on DiLa TV.`
              : "We couldn't find a direct match. Try a different title, cast member, or genre."}
          </p>
        ) : (
          <p className="text-sm text-white/60">Start typing in the search bar to discover new favorites.</p>
        )}
      </div>

      {query ? (
        results.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <div className="glass-panel space-y-4 rounded-3xl px-6 py-10 text-sm text-white/70">
            <p className="font-semibold text-white">Need ideas?</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Browse our <Link href="/#trending" className="text-primary-light">Trending</Link> picks.</li>
              <li>Filter by <Link href="/#documentary" className="text-primary-light">Documentary</Link> or <Link href="/#series" className="text-primary-light">Series</Link>.</li>
              <li>Search by mood like “thriller”, “family”, or “sci-fi”.</li>
            </ul>
          </div>
        )
      ) : null}
    </div>
  );
}
