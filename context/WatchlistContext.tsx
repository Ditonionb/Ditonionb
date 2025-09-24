"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Show } from "@/data/shows";

interface WatchlistContextValue {
  watchlist: Show[];
  toggleWatchlist: (show: Show) => void;
  removeFromWatchlist: (id: string) => void;
  clearWatchlist: () => void;
  isSaved: (id: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextValue | undefined>(undefined);

const STORAGE_KEY = "dila-tv:watchlist";

const safeParse = (value: string | null): Show[] => {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as Show[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (error) {
    console.warn("Failed to parse watchlist from storage", error);
  }

  return [];
};

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const [watchlist, setWatchlist] = useState<Show[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    setWatchlist(safeParse(stored));
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
  }, [watchlist, isHydrated]);

  const toggleWatchlist = useCallback((show: Show) => {
    setWatchlist((current) => {
      const exists = current.some((item) => item.id === show.id);
      if (exists) {
        return current.filter((item) => item.id !== show.id);
      }

      return [show, ...current];
    });
  }, []);

  const removeFromWatchlist = useCallback((id: string) => {
    setWatchlist((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearWatchlist = useCallback(() => {
    setWatchlist([]);
  }, []);

  const isSaved = useCallback(
    (id: string) => watchlist.some((item) => item.id === id),
    [watchlist]
  );

  const value = useMemo(
    () => ({ watchlist, toggleWatchlist, removeFromWatchlist, clearWatchlist, isSaved }),
    [watchlist, toggleWatchlist, removeFromWatchlist, clearWatchlist, isSaved]
  );

  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

export const useWatchlist = (): WatchlistContextValue => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }

  return context;
};
