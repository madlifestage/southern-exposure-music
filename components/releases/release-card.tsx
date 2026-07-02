"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Release } from "@/lib/data";

interface ReleaseCardProps {
  release: Release;
  index: number;
  onSelect: (release: Release) => void;
}

export function ReleaseCard({ release, index, onSelect }: ReleaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex-shrink-0 w-[280px] sm:w-auto"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-500 hover:border-accent-indigo/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          {/* Album artwork from Southern Exposure Music catalog */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={release.image}
            alt={release.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-60" />

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-indigo/90 text-white shadow-lg shadow-indigo-500/40">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-accent-indigo/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent-indigo">
              {release.genre}
            </span>
            {release.catalog && (
              <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                {release.catalog}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold leading-tight">{release.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{release.artist}</p>

          <Button
            variant="ghost"
            size="sm"
            className="mt-4 w-full border border-white/5 hover:border-accent-cyan/30 hover:text-accent-cyan"
            onClick={() => onSelect(release)}
          >
            Listen / Details
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
