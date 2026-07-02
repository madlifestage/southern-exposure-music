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
    href: "https://www.instagram.com/southernexposuremusic/",
    icon: "instagram" as const,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/semrecords",
    icon: "twitter" as const,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/southernexposuremusic",
    icon: "soundcloud" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/southernexposuremusic",
    icon: "facebook" as const,
  },
] as const;

export const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/placeholder",
    color: "#1DB954",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/",
    color: "#FA243C",
  },
  {
    name: "Beatport",
    href: "https://www.beatport.com/label/southern-exposure-music/12345",
    color: "#94D500",
  },
  {
    name: "Bandcamp",
    href: "https://southernexposuremusic.bandcamp.com/",
    color: "#629aa9",
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/southernexposuremusic",
    color: "#FF5500",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    color: "#FF0000",
  },
] as const;

export const SPOTIFY_URL =
  "https://open.spotify.com/artist/placeholder";
