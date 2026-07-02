"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Artist } from "@/lib/data";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

export function ArtistCard({ artist, index }: ArtistCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={cn("h-full min-h-[200px]", artist.gridClass)}
    >
      <div className="group relative h-full min-h-[200px] overflow-hidden rounded-xl border border-white/5 bg-card transition-all duration-300 hover:border-accent-indigo/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]">
        <Image
          src={artist.image}
          alt={artist.imageAlt}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            artist.imagePosition ?? "object-center"
          )}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />

        {artist.featured && (
          <div className="absolute left-3 top-3 rounded-full bg-accent-indigo/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            Featured
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {artist.genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-accent-cyan/10 px-2 py-0.5 text-[10px] font-medium text-accent-cyan"
              >
                {genre}
              </span>
            ))}
          </div>
          <h3
            className={cn(
              "font-bold tracking-tight",
              artist.featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
            )}
          >
            {artist.name}
          </h3>
          <p className="text-xs font-medium text-accent-indigo">{artist.role}</p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {artist.bio}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
