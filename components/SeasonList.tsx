"use client";

import { useMemo, useState } from "react";
import type { Season } from "@/data/shows";

interface SeasonListProps {
  seasons: Season[];
}

export default function SeasonList({ seasons }: SeasonListProps) {
  const defaultSeason = seasons[0]?.seasonNumber ?? 1;
  const [activeSeason, setActiveSeason] = useState<number>(defaultSeason);

  const currentSeason = useMemo(
    () => seasons.find((season) => season.seasonNumber === activeSeason) ?? seasons[0],
    [seasons, activeSeason]
  );

  if (!seasons.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {seasons.map((season) => {
          const isActive = season.seasonNumber === activeSeason;
          return (
            <button
              key={season.seasonNumber}
              type="button"
              onClick={() => setActiveSeason(season.seasonNumber)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive ? "bg-primary text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              Season {season.seasonNumber}
            </button>
          );
        })}
      </div>
      <ol className="space-y-3">
        {currentSeason?.episodes.map((episode, index) => (
          <li key={episode.title} className="glass-panel flex items-start gap-4 rounded-2xl px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/30 text-sm font-semibold text-white">
              {index + 1}
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">{episode.title}</p>
              <p className="text-sm text-white/60">{episode.synopsis}</p>
              <span className="text-xs uppercase tracking-wide text-white/50">{episode.duration}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
