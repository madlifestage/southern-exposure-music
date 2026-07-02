"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  STREAMING_PLATFORMS,
  SOUNDCLOUD_EMBED_URL,
  SOUNDCLOUD_URL,
  SPOTIFY_EMBED_URL,
  SPOTIFY_URL,
} from "@/lib/constants";

function EmbedCard({
  label,
  title,
  href,
  linkLabel,
  linkClassName,
  children,
  delay = 0.15,
}: {
  label: string;
  title: string;
  href: string;
  linkLabel: string;
  linkClassName: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mt-16 overflow-hidden rounded-2xl border border-white/5 bg-card"
    >
      <div className="flex flex-col gap-3 border-b border-white/5 bg-[#0a0a0f] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="section-label mb-1">{label}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-sm font-medium transition-opacity hover:opacity-80 ${linkClassName}`}
        >
          {linkLabel}
        </Link>
      </div>
      <div className="bg-[#0a0a0f] p-4">{children}</div>
    </motion.div>
  );
}

export function ListenEverywhere() {
  return (
    <section id="listen" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-indigo/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="section-label">Stream</p>
          <h2 className="section-title">
            Listen <span className="text-gradient">Everywhere</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Southern Exposure Music is available on all major streaming platforms.
            Find your favorite platform and dive in.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMING_PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-card p-6 transition-all duration-300 hover:border-white/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                    style={{
                      backgroundColor: `${platform.color}20`,
                      color: platform.color,
                    }}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <span className="text-lg font-semibold">{platform.name}</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <EmbedCard
          label="Now on Spotify"
          title="Southern Exposure Music — official playlist"
          href={SPOTIFY_URL}
          linkLabel="Open playlist →"
          linkClassName="text-[#1DB954]"
          delay={0.15}
        >
          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#121212]">
            <iframe
              src={SPOTIFY_EMBED_URL}
              title="Southern Exposure Music Spotify playlist"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="h-[380px] w-full border-0 md:h-[420px]"
            />
          </div>
        </EmbedCard>

        <EmbedCard
          label="On SoundCloud"
          title="Raskal — mixes, releases & label favorites"
          href={SOUNDCLOUD_URL}
          linkLabel="Open on SoundCloud →"
          linkClassName="text-accent-cyan"
          delay={0.2}
        >
          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0f]">
            <iframe
              src={SOUNDCLOUD_EMBED_URL}
              title="Southern Exposure Music on SoundCloud"
              allow="autoplay"
              loading="lazy"
              className="h-[300px] w-full border-0 md:h-[352px]"
            />
          </div>
        </EmbedCard>
      </div>
    </section>
  );
}
