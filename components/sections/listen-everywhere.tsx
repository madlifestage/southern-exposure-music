"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { STREAMING_PLATFORMS } from "@/lib/constants";

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
                    style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
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

        {/* Spotify embed — Southern Exposure's Hidden Universe, Vol. 1 compilation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/5 bg-card"
        >
          <div className="border-b border-white/5 px-6 py-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-cyan">
              Now on Spotify
            </p>
            <p className="mt-1 text-muted-foreground">
              Southern Exposure&apos;s Hidden Universe, Vol. 1 — label compilation
            </p>
          </div>
          <div className="bg-[#121212]">
            <iframe
              src="https://open.spotify.com/embed/album/4NNNLpHanKOHs68s0Zof99?utm_source=generator&theme=0"
              title="Southern Exposure Music on Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="h-[352px] w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
