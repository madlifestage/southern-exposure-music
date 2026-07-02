export type Release = {
  id: string;
  title: string;
  artist: string;
  catalog?: string;
  year?: string;
  genre: string;
  description: string;
  image: string;
  imageAlt: string;
  spotifyUrl?: string;
  beatportUrl?: string;
  bandcampUrl?: string;
};

export type Artist = {
  id: string;
  name: string;
  role: string;
  bio: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  genres: string[];
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

export const RELEASES: Release[] = [
  {
    id: "this-moment",
    title: "This Moment",
    artist: "Aidan Rolfe",
    catalog: "SEM0053",
    year: "2025",
    genre: "Techno",
    description:
      "A driving techno cut built for peak-time energy — precision drums, hypnotic synths, and relentless forward motion from Aidan Rolfe.",
    image: "/images/releases/this-moment.jpg",
    imageAlt: "This Moment album artwork — dark electronic techno release on Southern Exposure Music",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "everyday",
    title: "Everyday",
    artist: "Raskal",
    catalog: "SEM0052",
    year: "2024",
    genre: "Melodic / Progressive",
    description:
      "A melodic progressive mini-album exploring emotional depth and dancefloor dynamics — signature Raskal craftsmanship across multiple tracks.",
    image: "/images/releases/everyday.jpg",
    imageAlt: "Everyday mini-album artwork by Raskal on Southern Exposure Music",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "high-emotion",
    title: "High Emotion",
    artist: "Bozzy & False Peaks",
    catalog: "SEM0051",
    year: "2024",
    genre: "Progressive House",
    description:
      "Euphoric progressive house with soaring melodies and deep emotional undertones — a collaborative release from Bozzy and False Peaks.",
    image: "/images/releases/high-emotion.jpg",
    imageAlt: "High Emotion release artwork by Bozzy and False Peaks",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "stalker-vibes",
    title: "Stalker Vibes",
    artist: "Raskal",
    catalog: "SEM0050",
    year: "2024",
    genre: "Techno",
    description:
      "Dark, brooding techno with an underground edge — Raskal delivers tension and release in equal measure.",
    image: "/images/releases/stalker-vibes.jpg",
    imageAlt: "Stalker Vibes techno release artwork by Raskal",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "troubled-nights",
    title: "Troubled Nights",
    artist: "Raskal",
    catalog: "SEM029",
    year: "2020",
    genre: "Techno",
    description:
      "Late-night techno with cinematic atmosphere — moody pads, rolling basslines, and nocturnal energy.",
    image: "/images/releases/troubled-nights.jpg",
    imageAlt: "Troubled Nights album artwork by Raskal",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "droid-love",
    title: "Droid Love",
    artist: "Raskal",
    catalog: "SEM0045",
    year: "2019",
    genre: "Techno",
    description:
      "Mechanical grooves meet human soul — a futuristic techno journey from the SEM catalog.",
    image: "/images/releases/droid-love.jpg",
    imageAlt: "Droid Love release artwork by Raskal",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "let-me-in",
    title: "Let Me In",
    artist: "Raskal",
    catalog: "SEM0042",
    year: "2018",
    genre: "House / Techno",
    description:
      "A crossover house-techno anthem with infectious hooks and a driving four-on-the-floor pulse.",
    image: "/images/releases/let-me-in.jpg",
    imageAlt: "Let Me In release artwork by Raskal",
    spotifyUrl: "https://open.spotify.com/",
  },
  {
    id: "taleh-elohim",
    title: "Taleh Elohim",
    artist: "CKsimon",
    catalog: "SEM0040",
    year: "2020",
    genre: "Progressive / Trance",
    description:
      "Atmospheric progressive trance with spiritual undertones — CKsimon's signature sound design shines.",
    image: "/images/releases/taleh-elohim.jpg",
    imageAlt: "Taleh Elohim release artwork by CKsimon",
    spotifyUrl: "https://open.spotify.com/",
  },
];

export const ARTISTS: Artist[] = [
  {
    id: "raskal",
    name: "Raskal",
    role: "Label Head · DJ / Producer",
    featured: true,
    bio: "Atlanta-based DJ and producer of Techno & House. Founder and label head of Southern Exposure Music since 2010. Released on Baroque Records, Southern Exposure Music, White Line Music, MK837, Afro Acid, and more.",
    image: "/images/artists/raskal.png",
    imageAlt: "Raskal — Atlanta DJ and producer, founder of Southern Exposure Music",
    genres: ["Techno", "House", "Progressive"],
  },
  {
    id: "aidan-rolfe",
    name: "Aidan Rolfe",
    role: "Producer",
    bio: "Emerging producer crafting precision techno and progressive sounds for the modern dancefloor.",
    image: "/images/artists/aidan-rolfe.jpg",
    imageAlt: "Aidan Rolfe — electronic music producer on Southern Exposure Music",
    genres: ["Techno", "Progressive"],
  },
  {
    id: "cksimon",
    name: "CKsimon",
    role: "Producer",
    bio: "Atmospheric progressive and trance producer known for emotive, cinematic electronic compositions.",
    image: "/images/artists/cksimon.jpg",
    imageAlt: "CKsimon — progressive trance producer on Southern Exposure Music",
    genres: ["Progressive", "Trance"],
  },
  {
    id: "bozzy",
    name: "Bozzy",
    role: "Producer",
    bio: "Progressive house producer delivering euphoric melodies and deep emotional grooves.",
    image: "/images/artists/bozzy.jpg",
    imageAlt: "Bozzy — progressive house producer on Southern Exposure Music",
    genres: ["Progressive House"],
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
