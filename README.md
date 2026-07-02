# Southern Exposure Music

Modern homepage for [Southern Exposure Music](https://southernexposuremusic.com) — an Atlanta-based independent electronic music label (House, Techno, Trance) founded in 2010 by Raskal.

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Radix UI primitives. Designed for deployment on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel by connecting this repository — no special configuration required.

## Project Structure

```
app/
  layout.tsx          # Root layout, metadata, Inter font
  page.tsx            # Homepage (all sections)
  globals.css         # Design tokens, utilities
components/
  layout/             # Navbar, Footer, Logo, ContactForm
  sections/           # Hero, About, Releases, Artists, Videos, ListenEverywhere
  releases/           # ReleaseCard, ReleaseModal
  artists/            # ArtistCard
  ui/                 # Button, Dialog (shadcn-style)
lib/
  data.ts             # Releases, artists, videos data
  constants.ts        # Site config, social & streaming links
  utils.ts            # cn(), scrollToSection()
public/
  images/
    releases/         # Album artwork (add real assets here)
    artists/          # Artist photos
    hero/             # Hero background images
```

## Replacing Placeholder Images

All images currently use [picsum.photos](https://picsum.photos) placeholders. To use real assets from the WordPress media library:

1. Download high-resolution images from the current WordPress site
2. Save them to the appropriate folder:
   - `public/images/releases/` — album artwork (800×800 recommended)
   - `public/images/artists/` — artist photos (600×800 recommended)
   - `public/images/hero/` — hero background (1920×1080 recommended)
3. Update image paths in `lib/data.ts`:

```ts
// Before (placeholder)
image: "https://picsum.photos/seed/sem-this-moment/800/800",

// After (local asset)
image: "/images/releases/this-moment.jpg",
```

4. Remove or narrow `remotePatterns` in `next.config.ts` once all images are local

## Updating Spotify & Streaming Links

Edit `lib/constants.ts`:

- `SPOTIFY_URL` — main artist/label Spotify page
- `STREAMING_PLATFORMS` — update hrefs for Beatport, Bandcamp, etc.
- `SOCIAL_LINKS` — verify Instagram, X, SoundCloud, Facebook URLs

For the Spotify embed in the Listen section, replace the iframe `src` in `components/sections/listen-everywhere.tsx` with your actual playlist or artist embed URL from Spotify's embed tool.

Per-release streaming links live in `lib/data.ts` under each release's `spotifyUrl`, `beatportUrl`, and `bandcampUrl` fields.

## Updating YouTube Video IDs

In `lib/data.ts`, set each video's `youtubeId` to the actual YouTube video ID (the string after `v=` in the URL).

## Adding New Releases / Artists

Add entries to the `RELEASES` and `ARTISTS` arrays in `lib/data.ts`. The grid and modal components pick them up automatically.

For featured artist spotlight, set `featured: true` on an artist entry.

## Contact Form

The contact form in the footer is a placeholder UI. To make it functional, connect it to:

- [Formspree](https://formspree.io/)
- [Resend](https://resend.com/) + API route
- A Next.js Server Action with email delivery

## Tech Stack

| Package | Purpose |
|---------|---------|
| Next.js 15 | App Router, SSR, image optimization |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| framer-motion | Animations |
| lucide-react | Icons |
| @radix-ui/react-dialog | Accessible modals |
| class-variance-authority | Button variants |

## Recommended Next Steps

- [x] Migrate real album art and photos from WordPress
- [x] Add actual Spotify artist ID and playlist embed
- [x] Set correct YouTube video IDs
- [x] Wire up contact form backend
- [x] Configure custom domain on Vercel
- [ ] Add `/releases` full discography page
- [ ] Add individual artist pages
- [ ] Connect GitHub auto-deploy on push to `main`

## License

© Southern Exposure Music. All rights reserved.
