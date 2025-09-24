export type ShowFormat = "movie" | "series" | "documentary";

export interface Episode {
  title: string;
  synopsis: string;
  duration: string;
}

export interface Season {
  seasonNumber: number;
  episodes: Episode[];
}

export interface Show {
  id: string;
  title: string;
  tagline: string;
  synopsis: string;
  year: number;
  rating: number;
  maturity: string;
  runtime: string;
  genres: string[];
  cast: string[];
  backgroundImage: string;
  posterImage: string;
  thumbnailImage: string;
  trailerUrl: string;
  streamUrl: string;
  format: ShowFormat;
  seasons?: Season[];
  featured?: boolean;
  categories: string[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  showIds: string[];
}

export const shows: Show[] = [
  {
    id: "celestial-odyssey",
    title: "Celestial Odyssey",
    tagline: "Across the event horizon, destiny awaits.",
    synopsis:
      "When a deep-space research vessel disappears beyond a wormhole, pilot Mara Ibarra must lead a daring rescue that uncovers an ancient alien technology capable of rewriting reality itself.",
    year: 2024,
    rating: 4.7,
    maturity: "PG-13",
    runtime: "2h 18m",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    cast: ["Zoe Chan", "Ibrahim Cole", "Elena Vasquez"],
    backgroundImage:
      "https://images.unsplash.com/photo-1580128637393-3829dd7689d0?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1474433188271-d3f339f41911?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    format: "movie",
    featured: true,
    categories: ["trending", "new", "epic"]
  },
  {
    id: "shadows-of-lagos",
    title: "Shadows of Lagos",
    tagline: "Secrets never sleep in the megacity.",
    synopsis:
      "A young tech prodigy returns to Lagos to investigate her brother's disappearance, plunging into a web of political intrigue and digital espionage that threatens the entire city.",
    year: 2023,
    rating: 4.5,
    maturity: "TV-MA",
    runtime: "55m avg",
    genres: ["Thriller", "Drama"],
    cast: ["Amaka Bello", "Chidi Nwosu", "Funke Jacobs"],
    backgroundImage:
      "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Pensive.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Pensive.mp4",
    format: "series",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            title: "Signal Lost",
            synopsis: "Ada's search begins with a rogue data drop in the floating markets.",
            duration: "57m"
          },
          {
            title: "Firewall",
            synopsis: "A mysterious fixer offers help with a price attached.",
            duration: "54m"
          }
        ]
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            title: "The Ledger",
            synopsis: "Old alliances fracture as the conspiracy deepens.",
            duration: "59m"
          },
          {
            title: "Ghost Protocol",
            synopsis: "Ada must choose between family and the truth she has unearthed.",
            duration: "61m"
          }
        ]
      }
    ],
    categories: ["trending", "crime", "series"]
  },
  {
    id: "quantum-heist",
    title: "Quantum Heist",
    tagline: "The ultimate score happens between timelines.",
    synopsis:
      "A disgraced physicist assembles a team of thieves to pull off an impossible robbery inside a particle accelerator, stealing data that could alter the flow of time.",
    year: 2022,
    rating: 4.3,
    maturity: "PG-13",
    runtime: "2h 02m",
    genres: ["Action", "Sci-Fi", "Heist"],
    cast: ["Daniel Cruz", "Kira Montoya", "Miles Grant"],
    backgroundImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    format: "movie",
    categories: ["trending", "action", "top10"]
  },
  {
    id: "mystic-tides",
    title: "Mystic Tides",
    tagline: "The ocean keeps the kingdom's oldest magic.",
    synopsis:
      "In a hidden archipelago, a young guardian must master tidal magic to protect her people from an empire that hunts enchanted waters.",
    year: 2021,
    rating: 4.6,
    maturity: "PG",
    runtime: "48m avg",
    genres: ["Fantasy", "Adventure"],
    cast: ["Lina Park", "Sacha Dubois", "Ravi Sharma"],
    backgroundImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Tropical_Beach.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Tropical_Beach.mp4",
    format: "series",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            title: "Awakening",
            synopsis: "Kai senses the tide spirits calling on the eve of her naming.",
            duration: "47m"
          },
          {
            title: "Stormsong",
            synopsis: "An imperial dreadnought breaches the island's barrier.",
            duration: "50m"
          }
        ]
      }
    ],
    categories: ["fantasy", "family", "top10"]
  },
  {
    id: "luna-resonance",
    title: "Luna Resonance",
    tagline: "Every beat echoes a revolution.",
    synopsis:
      "A synesthetic DJ discovers a sonic frequency that can heal minds, sparking a movement that challenges a corporation selling silence to the highest bidder.",
    year: 2020,
    rating: 4.2,
    maturity: "PG-13",
    runtime: "1h 48m",
    genres: ["Music", "Drama"],
    cast: ["Nova Reyes", "Elliot King", "Sia Tan"],
    backgroundImage:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Harmonic.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Harmonic.mp4",
    format: "movie",
    categories: ["music", "top10", "exclusive"]
  },
  {
    id: "neon-drift",
    title: "Neon Drift",
    tagline: "Race the night, rewrite the rules.",
    synopsis:
      "In a neon-drenched megacity, underground racers hack self-driving pods to stage illegal drifting battles that expose corruption at the core of the transit grid.",
    year: 2024,
    rating: 4.4,
    maturity: "TV-14",
    runtime: "45m avg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    cast: ["Max Ito", "Priya Roy", "Arman Singh"],
    backgroundImage:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Night_Traffic.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Night_Traffic.mp4",
    format: "series",
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            title: "Gridlock",
            synopsis: "Team Drift breaks into a government vault of navigation data.",
            duration: "46m"
          }
        ]
      }
    ],
    categories: ["trending", "action", "exclusive"]
  },
  {
    id: "ember-rising",
    title: "Ember Rising",
    tagline: "History is written in flame and faith.",
    synopsis:
      "An exiled princess returns to lead a rebellion using forbidden fire-dances that can topple the warlords ruling her desert homeland.",
    year: 2019,
    rating: 4.1,
    maturity: "PG-13",
    runtime: "52m avg",
    genres: ["Historical", "Drama"],
    cast: ["Layla Haddad", "Yusuf Karim", "Farah Nimr"],
    backgroundImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Desert-Landscape.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Desert-Landscape.mp4",
    format: "series",
    categories: ["drama", "top10"]
  },
  {
    id: "delta-protocol",
    title: "Delta Protocol",
    tagline: "Trust the code or trust no one.",
    synopsis:
      "After a global data breach, an elite cybersecurity unit hunts down the mastermind who can manipulate memories through augmented reality implants.",
    year: 2023,
    rating: 4.0,
    maturity: "TV-14",
    runtime: "1h 32m",
    genres: ["Thriller", "Sci-Fi"],
    cast: ["Hana Suzuki", "Cole Matthews", "Alejandro Ruiz"],
    backgroundImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Memory.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Memory.mp4",
    format: "movie",
    categories: ["thriller", "exclusive"]
  },
  {
    id: "wild-frontiers",
    title: "Wild Frontiers",
    tagline: "Every ecosystem tells a survival story.",
    synopsis:
      "This lush documentary series follows wildlife researchers as they rehabilitate endangered species and rewild devastated habitats across the planet.",
    year: 2022,
    rating: 4.8,
    maturity: "TV-PG",
    runtime: "52m avg",
    genres: ["Documentary", "Nature"],
    cast: ["Narrated by Sanaa Wright"],
    backgroundImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Nature.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Nature.mp4",
    format: "documentary",
    categories: ["documentary", "family", "top10"]
  },
  {
    id: "aria-of-stars",
    title: "Aria of Stars",
    tagline: "Sing louder than the void.",
    synopsis:
      "A gifted vocalist joins a crew of misfit explorers charting the galaxy, using music to communicate with alien lifeforms—and keep the crew united.",
    year: 2021,
    rating: 4.4,
    maturity: "PG",
    runtime: "1h 12m",
    genres: ["Animation", "Sci-Fi", "Family"],
    cast: ["Voice of Mei Nakamura", "Voice of Theo Clarke"],
    backgroundImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Starry_Night.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Starry_Night.mp4",
    format: "movie",
    categories: ["family", "animation"]
  },
  {
    id: "aurora-shift",
    title: "Aurora Shift",
    tagline: "Northern lights hide southern secrets.",
    synopsis:
      "Climate scientists posted to an arctic research base uncover a hidden military project capable of weaponizing the aurora borealis.",
    year: 2020,
    rating: 4.1,
    maturity: "PG-13",
    runtime: "1h 58m",
    genres: ["Thriller", "Mystery"],
    cast: ["Edda Berg", "Liam Patel", "Yara Quinn"],
    backgroundImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Northern_Lights.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Northern_Lights.mp4",
    format: "movie",
    categories: ["thriller", "top10"]
  },
  {
    id: "byte-sized",
    title: "Byte Sized",
    tagline: "Big flavors, tiny kitchens.",
    synopsis:
      "Chefs from around the world battle weekly to reinvent street food classics using only countertop gadgets and code-powered appliances.",
    year: 2023,
    rating: 3.9,
    maturity: "TV-PG",
    runtime: "38m avg",
    genres: ["Reality", "Food"],
    cast: ["Hosted by Juniper Ortiz"],
    backgroundImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    posterImage:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    thumbnailImage:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=600&q=80",
    trailerUrl: "https://storage.googleapis.com/coverr-main/mp4/Cooking.mp4",
    streamUrl: "https://storage.googleapis.com/coverr-main/mp4/Cooking.mp4",
    format: "series",
    categories: ["reality", "feelgood"]
  }
];

export const collections: Collection[] = [
  {
    id: "trending",
    title: "Trending Now",
    description: "The most-watched stories lighting up DiLa TV this week.",
    showIds: [
      "celestial-odyssey",
      "shadows-of-lagos",
      "quantum-heist",
      "neon-drift",
      "wild-frontiers"
    ]
  },
  {
    id: "fresh",
    title: "Fresh on DiLa",
    description: "Brand-new premieres and latest seasons added for you.",
    showIds: ["neon-drift", "celestial-odyssey", "byte-sized", "delta-protocol"]
  },
  {
    id: "exclusive",
    title: "DiLa Exclusives",
    description: "Stories you can only stream on DiLa TV.",
    showIds: ["neon-drift", "luna-resonance", "delta-protocol"]
  },
  {
    id: "series",
    title: "Series to Binge",
    description: "One more episode? Always yes.",
    showIds: ["shadows-of-lagos", "mystic-tides", "byte-sized", "neon-drift"]
  },
  {
    id: "documentary",
    title: "Documentary Spotlight",
    description: "True stories that inspire and challenge.",
    showIds: ["wild-frontiers", "luna-resonance", "aurora-shift"]
  },
  {
    id: "top10",
    title: "Top 10 in Your Country",
    description: "The most popular picks streaming right now.",
    showIds: [
      "celestial-odyssey",
      "quantum-heist",
      "mystic-tides",
      "wild-frontiers",
      "ember-rising",
      "luna-resonance",
      "delta-protocol",
      "aurora-shift",
      "aria-of-stars",
      "shadows-of-lagos"
    ]
  }
];

export const getShowById = (id: string): Show | undefined =>
  shows.find((show) => show.id === id);

export const getShowsForCollection = (collectionId: string): Show[] => {
  const collection = collections.find((item) => item.id === collectionId);
  if (!collection) {
    return [];
  }

  return collection.showIds
    .map((showId) => shows.find((show) => show.id === showId))
    .filter((show): show is Show => Boolean(show));
};

export const searchShows = (query: string): Show[] => {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }

  return shows.filter((show) => {
    const haystack = [
      show.title,
      show.synopsis,
      show.genres.join(" "),
      show.cast.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
};

export const getRecommendedShows = (show: Show): Show[] => {
  const genreSet = new Set(show.genres);
  return shows
    .filter((candidate) => candidate.id !== show.id)
    .map((candidate) => {
      const sharedGenres = candidate.genres.filter((genre) => genreSet.has(genre)).length;
      return {
        candidate,
        score: sharedGenres + (candidate.format === show.format ? 0.5 : 0)
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.candidate);
};
