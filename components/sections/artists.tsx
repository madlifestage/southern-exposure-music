"use client";

import { motion } from "framer-motion";
import { ArtistCard } from "@/components/artists/artist-card";
import { ARTISTS } from "@/lib/data";

export function Artists() {
  return (
    <section id="artists" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <p className="section-label">Roster</p>
          <h2 className="section-title">
            Our <span className="text-gradient">Artists</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Producers, DJs, and sonic architects pushing electronic music
            forward from Atlanta and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-flow-dense md:auto-rows-[minmax(180px,1fr)] md:gap-3 lg:auto-rows-[minmax(200px,1fr)] lg:gap-4">
          {ARTISTS.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
