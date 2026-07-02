import { DISCOGRAPHY, FEATURED_RELEASE_IDS } from "./discography";

export type Release = {
  id: string;
  title: string;
  artist: string;
  catalog?: string;
  year?: string;
  genre: string;
  releaseType?: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Spotify album or track path, e.g. "album/abc123" or "track/xyz789" */
  spotifyId?: string;
  spotifyUrl?: string;
  beatportUrl?: string;
  bandcampUrl?: string;
};

const FEATURED_OVERRIDES: Record<string, Partial<Release>> = {
  "this-moment": {
    catalog: "SEM0053",
    genre: "Techno",
    description:
      "A driving techno cut built for peak-time energy — precision drums, hypnotic synths, and relentless forward motion from Aidan Rolfe.",
  },
  everyday: {
    catalog: "SEM0052",
    genre: "Melodic / Progressive",
    description:
      "A melodic progressive mini-album exploring emotional depth and dancefloor dynamics — signature Raskal craftsmanship across multiple tracks.",
  },
  "high-emotion": {
    catalog: "SEM0051",
    genre: "Progressive House",
    description:
      "Euphoric progressive house with soaring melodies and deep emotional undertones — a collaborative release from Bozzy and False Peaks.",
  },
  "stalker-vibes": {
    catalog: "SEM0050",
    genre: "Techno",
    description:
      "Dark, brooding techno with an underground edge — Raskal delivers tension and release in equal measure.",
  },
  "troubled-nights": {
    catalog: "SEM029",
    genre: "Techno",
    description:
      "Late-night techno with cinematic atmosphere — moody pads, rolling basslines, and nocturnal energy.",
  },
  "droid-love": {
    catalog: "SEM0045",
    genre: "Techno",
    description:
      "Mechanical grooves meet human soul — a futuristic techno journey from the SEM catalog.",
  },
  "let-me-in": {
    catalog: "SEM0042",
    genre: "House / Techno",
    description:
      "A crossover house-techno anthem with infectious hooks and a driving four-on-the-floor pulse.",
  },
  "taleh-elohim": {
    catalog: "SEM0040",
    genre: "Progressive / Trance",
    description:
      "Atmospheric progressive trance with spiritual undertones — CKsimon's signature sound design shines.",
  },
};

export const RELEASES: Release[] = FEATURED_RELEASE_IDS.map((id) => {
  const release = DISCOGRAPHY.find((entry) => entry.id === id);
  if (!release) {
    throw new Error(`Missing featured release: ${id}`);
  }
  return { ...release, ...FEATURED_OVERRIDES[id] };
});

export { DISCOGRAPHY };

export type Artist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  genres: string[];
  /** Tailwind grid placement classes for the bento layout */
  gridClass?: string;
  /** Tailwind object-position class for photo framing */
  imagePosition?: string;
};

export type Video = {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  thumbnail: string;
  thumbnailAlt: string;
  date: string;
};

export const ARTISTS: Artist[] = [
  {
    id: "raskal",
    name: "Raskal",
    role: "Label Head · DJ / Producer",
    featured: true,
    bio: "Atlanta-based DJ and producer of Techno & House. Founder and label head of Southern Exposure Music since 2010.",
    image: "/images/artists/raskal.png",
    imageAlt: "Raskal — Atlanta DJ and producer, founder of Southern Exposure Music",
    genres: ["Techno", "House", "Progressive"],
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "aidan-rolfe",
    name: "Aidan Rolfe",
    role: "Producer",
    bio: "Precision techno and progressive producer shaping the modern SEM sound.",
    image: "/images/artists/aidan-rolfe.png",
    imageAlt: "Aidan Rolfe — electronic music producer on Southern Exposure Music",
    genres: ["Techno", "Progressive"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "cksimon",
    name: "CKsimon",
    role: "Producer",
    bio: "American producer and instrumentalist — emotive progressive and trance with 25+ years in the craft.",
    image: "/images/artists/cksimon.jpg",
    imageAlt: "CKsimon — progressive trance producer on Southern Exposure Music",
    genres: ["Progressive", "Trance"],
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "18-east",
    name: "18 East",
    role: "Producer",
    bio: "Forward-thinking electronic producer contributing to the SEM catalog.",
    image: "/images/artists/18-east.jpg",
    imageAlt: "18 East — producer on Southern Exposure Music",
    genres: ["Techno", "House"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "the-dj-bri",
    name: "The DJ Bri",
    role: "DJ / Producer",
    bio: "Atlanta-area DJ and producer bringing energy and groove to the Southern Exposure roster.",
    image: "/images/artists/the-dj-bri.jpg",
    imageAlt: "The DJ Bri — DJ and producer on Southern Exposure Music",
    genres: ["House", "Techno"],
    gridClass: "md:col-span-2 md:row-span-1",
    imagePosition: "object-[center_18%]",
  },
  {
    id: "comstock",
    name: "Comstock",
    role: "Producer",
    bio: "SEM artist crafting distinctive electronic productions for the dancefloor.",
    image: "/images/artists/comstock.jpg",
    imageAlt: "Comstock — producer on Southern Exposure Music",
    genres: ["Techno", "House"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "corey-von-waters",
    name: "Corey Von Waters",
    role: "Producer",
    bio: "Producer and collaborator on the Southern Exposure Music roster.",
    image: "/images/artists/corey-von-waters.jpg",
    imageAlt: "Corey Von Waters — producer on Southern Exposure Music",
    genres: ["House", "Progressive"],
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "jimmyzkinz",
    name: "JIMMYZKINZ",
    role: "Producer",
    bio: "SEM artist pushing boundaries in underground electronic music.",
    image: "/images/artists/jimmyzkinz.jpg",
    imageAlt: "JIMMYZKINZ — producer on Southern Exposure Music",
    genres: ["Techno"],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "nhexis",
    name: "Nhexis",
    role: "Producer",
    bio: "Dark, driving electronic productions from the Southern Exposure catalog.",
    image: "/images/artists/nhexis.jpg",
    imageAlt: "Nhexis — producer on Southern Exposure Music",
    genres: ["Techno"],
    gridClass: "md:col-span-2 md:row-span-1",
    imagePosition: "object-[center_15%]",
  },
];

export const VIDEOS: Video[] = [
  {
    id: "let-me-in-video",
    title: "Let Me In",
    artist: "Raskal",
    youtubeId: "qhx9LiXM5Lk",
    thumbnail: "/images/videos/let-me-in.jpg",
    thumbnailAlt: "Raskal — Let Me In official music video thumbnail",
    date: "October 2018",
  },
  {
    id: "troubled-nights-video",
    title: "Troubled Nights",
    artist: "Raskal",
    youtubeId: "kch_PntwoQQ",
    thumbnail: "/images/videos/troubled-nights.jpg",
    thumbnailAlt: "Raskal — Troubled Nights official music video thumbnail",
    date: "April 2020",
  },
  {
    id: "droid-love-video",
    title: "Droid Love",
    artist: "Raskal",
    youtubeId: "AAjF5KMF_ss",
    thumbnail: "/images/videos/droid-love.jpg",
    thumbnailAlt: "Raskal — Droid Love official music video thumbnail",
    date: "July 2019",
  },
  {
    id: "taleh-elohim-video",
    title: "Taleh Elohim",
    artist: "CKsimon",
    youtubeId: "JoN2HTnpuBY",
    thumbnail: "/images/videos/taleh-elohim.jpg",
    thumbnailAlt: "CKsimon — Taleh Elohim official music video thumbnail",
    date: "May 2020",
  },
];
