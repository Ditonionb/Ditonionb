import CategoryRow from "@/components/CategoryRow";
import Hero from "@/components/Hero";
import WatchlistPanel from "@/components/WatchlistPanel";
import { collections, getShowsForCollection, shows } from "@/data/shows";

export default function HomePage() {
  const heroShow = shows.find((show) => show.featured) ?? shows[0];
  const trending = getShowsForCollection("trending");
  const fresh = getShowsForCollection("fresh");
  const exclusive = getShowsForCollection("exclusive");
  const bingeworthySeries = getShowsForCollection("series");
  const documentarySpotlight = getShowsForCollection("documentary");
  const top10 = getShowsForCollection("top10");
  const cinematicMovies = shows.filter((show) => show.format === "movie").slice(0, 8);

  return (
    <div className="space-y-16">
      <Hero show={heroShow} />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20">
        <CategoryRow
          id="trending"
          title="Trending Now"
          description={collections.find((collection) => collection.id === "trending")?.description}
          shows={trending}
        />
        <WatchlistPanel />
        <CategoryRow
          id="fresh"
          title="Fresh on DiLa"
          description={collections.find((collection) => collection.id === "fresh")?.description}
          shows={fresh}
        />
        <CategoryRow
          id="exclusive"
          title="DiLa Exclusives"
          description={collections.find((collection) => collection.id === "exclusive")?.description}
          shows={exclusive}
        />
        <CategoryRow
          id="series"
          title="Series to Binge"
          description={collections.find((collection) => collection.id === "series")?.description}
          shows={bingeworthySeries}
        />
        <CategoryRow
          id="movies"
          title="Cinematic Movies"
          description="Immersive blockbusters and indie gems streaming in crystal clarity."
          shows={cinematicMovies}
        />
        <CategoryRow
          id="documentary"
          title="Documentary Spotlight"
          description={collections.find((collection) => collection.id === "documentary")?.description}
          shows={documentarySpotlight}
        />
        <CategoryRow
          id="top10"
          title="Top 10 in Your Country"
          description={collections.find((collection) => collection.id === "top10")?.description}
          shows={top10}
        />
      </div>
    </div>
  );
}
