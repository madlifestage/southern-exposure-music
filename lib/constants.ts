export const SITE = {
  name: "Southern Exposure Music",
  shortName: "SEM",
  tagline: "Independent Electronic Music Label | House • Techno • Trance | Since 2010",
  email: "ronnie@southernexposuremusic.com",
  founded: 2010,
  location: "Atlanta, GA",
} as const;

export const NAV_LINKS = [
  { label: "Releases", href: "#releases" },
  { label: "Artists", href: "#artists" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/southernexpmus/",
    icon: "instagram" as const,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/raskalsound",
    icon: "soundcloud" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/SouthernExpMus",
    icon: "facebook" as const,
  },
] as const;

/** Raskal (US) — label head; Spotify has no dedicated label profile page */
export const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/0KvLZjLEEmgOetcSMmNi2l";

/** Label compilation — best stand-in for a “full catalog” on Spotify */
export const SPOTIFY_CATALOG_URL =
  "https://open.spotify.com/album/4NNNLpHanKOHs68s0Zof99";

export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UC0NKwaBvZnOlVGNtclXW_ew";

export const BEATPORT_LABEL_URL =
  "https://www.beatport.com/label/southern-exposure-music/62422";

export const SOUNDCLOUD_URL = "https://soundcloud.com/raskalsound";

export const SOUNDCLOUD_EMBED_URL =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/raskalsound&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true";

/** Navbar / hero “Listen on Spotify” — latest release */
export const SPOTIFY_URL =
  "https://open.spotify.com/album/3g8vEltouCQg1qmS6fkxsg";

export const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    href: SPOTIFY_CATALOG_URL,
    color: "#1DB954",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/",
    color: "#FA243C",
  },
  {
    name: "Beatport",
    href: BEATPORT_LABEL_URL,
    color: "#94D500",
  },
  {
    name: "Bandcamp",
    href: "https://southernexposuremusic.bandcamp.com/",
    color: "#629aa9",
  },
  {
    name: "SoundCloud",
    href: SOUNDCLOUD_URL,
    color: "#FF5500",
  },
  {
    name: "YouTube",
    href: YOUTUBE_CHANNEL_URL,
    color: "#FF0000",
  },
] as const;
