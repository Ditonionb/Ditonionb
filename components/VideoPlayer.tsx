"use client";

import { useMemo, useState } from "react";

interface VideoPlayerProps {
  title: string;
  poster: string;
  streamUrl: string;
  trailerUrl?: string;
}

export default function VideoPlayer({ title, poster, streamUrl, trailerUrl }: VideoPlayerProps) {
  const [mode, setMode] = useState<"preview" | "feature">(trailerUrl ? "preview" : "feature");

  const source = useMemo(() => {
    if (mode === "preview" && trailerUrl) {
      return trailerUrl;
    }

    return streamUrl;
  }, [mode, trailerUrl, streamUrl]);

  return (
    <div className="glass-panel overflow-hidden rounded-3xl">
      <div className="relative aspect-video w-full">
        <video
          key={source}
          className="h-full w-full object-cover"
          controls
          controlsList="nodownload"
          poster={poster}
          preload="metadata"
          title={title}
        >
          <source src={source} />
          Your browser does not support the video tag.
        </video>
      </div>
      {trailerUrl ? (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-white/5 px-6 py-4 text-sm">
          <p className="text-white/70">
            Now playing: {mode === "preview" ? "Official Trailer" : "Full Feature"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMode("preview")}
              className={`rounded-full px-4 py-2 font-semibold uppercase tracking-wide transition ${mode === "preview" ? "bg-primary text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
            >
              Watch Trailer
            </button>
            <button
              type="button"
              onClick={() => setMode("feature")}
              className={`rounded-full px-4 py-2 font-semibold uppercase tracking-wide transition ${mode === "feature" ? "bg-primary text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
            >
              Play Feature
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
