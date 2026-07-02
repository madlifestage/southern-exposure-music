"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Artist } from "@/lib/data";

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

export function ArtistCard({ artist, index }: ArtistCardProps) {
  const isFeatured = artist.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={
        isFeatured
          ? "lg:col-span-2 lg:row-span-2"
          : ""
      }
    >
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-500 hover:border-accent-indigo/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.12)] ${
          isFeatured ? "grid lg:grid-cols-2" : ""
        }`}
      >
        {/* Artist photo from Southern Exposure Music */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "aspect-[4/5] lg:aspect-auto lg:min-h-[400px]" : "aspect-[3/4]"
          }`}
        >
          <Image
            src={artist.image}
            alt={artist.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, 33vw"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/20 to-transparent" />

          {isFeatured && (
            <div className="absolute left-4 top-4 rounded-full bg-accent-indigo/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Featured
            </div>
          )}
        </div>

        <div className={`flex flex-col justify-end p-6 ${isFeatured ? "lg:justify-center lg:p-10" : ""}`}>
          <div className="mb-3 flex flex-wrap gap-2">
            {artist.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-accent-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-cyan"
              >
                {genre}
              </span>
            ))}
          </div>

          <h3
            className={`font-bold tracking-tight ${
              isFeatured ? "text-3xl lg:text-4xl" : "text-xl"
            }`}
          >
            {artist.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent-indigo">
            {artist.role}
          </p>
          <p
            className={`mt-3 leading-relaxed text-muted-foreground ${
              isFeatured ? "text-base" : "text-sm line-clamp-3"
            }`}
          >
            {artist.bio}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
