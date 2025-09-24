import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShowActions from "@/components/ShowActions";
import SeasonList from "@/components/SeasonList";
import VideoPlayer from "@/components/VideoPlayer";
import { getRecommendedShows, getShowById } from "@/data/shows";

type ShowPageProps = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: ShowPageProps) {
  const show = getShowById(params.id);
  if (!show) {
    return {
      title: "DiLa TV | Title not found"
    };
  }

  return {
    title: `${show.title} | DiLa TV`,
    description: show.synopsis
  };
}

export default function ShowPage({ params }: ShowPageProps) {
  const show = getShowById(params.id);

  if (!show) {
    notFound();
  }

  const recommendations = getRecommendedShows(show);

  return (
    <div className="pb-20">
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image src={show.backgroundImage} alt="" fill className="object-cover object-center opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-16">
          <div className="max-w-3xl space-y-6">
            <span className="badge bg-white/20 text-white/80">{show.format.toUpperCase()}</span>
            <h1 className="text-5xl font-black text-white drop-shadow-lg">{show.title}</h1>
            <p className="max-w-2xl text-lg text-white/70">{show.tagline}</p>
            <ShowActions show={show} />
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>{show.year}</span>
              <span>•</span>
              <span>{show.maturity}</span>
              <span>•</span>
              <span>{show.runtime}</span>
              <span>•</span>
              <span>Rating {show.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6" id="details">
          <div id="player">
            <VideoPlayer
              title={show.title}
              poster={show.thumbnailImage}
              streamUrl={show.streamUrl}
              trailerUrl={show.trailerUrl}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Storyline</h2>
                <p className="text-base leading-relaxed text-white/70">{show.synopsis}</p>
              </section>

              {show.seasons ? (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Episodes</h2>
                  <SeasonList seasons={show.seasons} />
                </section>
              ) : null}
            </div>

            <aside className="space-y-6">
              <div className="glass-panel space-y-4 rounded-3xl px-6 py-6">
                <h3 className="text-xl font-semibold text-white">About this title</h3>
                <dl className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Year</dt>
                    <dd>{show.year}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Format</dt>
                    <dd className="uppercase">{show.format}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Runtime</dt>
                    <dd>{show.runtime}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Genres</dt>
                    <dd className="text-right">{show.genres.join(", ")}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Cast</dt>
                    <dd className="text-right">{show.cast.join(", ")}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-white/80">Maturity</dt>
                    <dd>{show.maturity}</dd>
                  </div>
                </dl>
              </div>

              {recommendations.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">More like this</h3>
                  <div className="space-y-3">
                    {recommendations.map((item) => (
                      <Link
                        key={item.id}
                        href={`/shows/${item.id}`}
                        className="glass-panel flex items-center gap-4 rounded-2xl px-4 py-3 transition hover:border-primary/60"
                      >
                        <div className="relative h-16 w-28 overflow-hidden rounded-xl">
                          <Image
                            src={item.posterImage}
                            alt={item.title}
                            fill
                            sizes="112px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="line-clamp-2 text-xs text-white/60">{item.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
