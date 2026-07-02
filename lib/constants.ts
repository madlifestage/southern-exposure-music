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

/** Southern Exposure Music — main Spotify playlist (from southernexposuremusic.com) */
export const SPOTIFY_PLAYLIST_ID = "playlist/5HXNEBq0Zh983rReymbwqV";

export const SPOTIFY_URL = "https://open.spotify.com/playlist/5HXNEBq0Zh983rReymbwqV";

export const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/5HXNEBq0Zh983rReymbwqV?utm_source=generator&theme=0";

export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UC0NKwaBvZnOlVGNtclXW_ew";

export const BEATPORT_LABEL_URL =
  "https://www.beatport.com/label/southern-exposure-music/62422";

export const SOUNDCLOUD_URL = "https://soundcloud.com/raskalsound";

/** Compact player + site accent color (cyan) for dark UI fit */
export const SOUNDCLOUD_EMBED_URL =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/raskalsound&color=%2322d3ee&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false";

export const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    href: SPOTIFY_URL,
    color: "#1DB954",
  },
  {
    name: "Beatport",
    href: BEATPORT_LABEL_URL,
    color: "#94D500",
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
