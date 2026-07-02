"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VIDEOS } from "@/lib/data";

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const active = VIDEOS.find((v) => v.id === activeVideo);

  return (
    <section id="videos" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="section-label">Visuals</p>
          <h2 className="section-title">
            Videos & <span className="text-gradient">Media</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {VIDEOS.map((video, i) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-card transition-all duration-500 hover:border-accent-cyan/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                {/* Video thumbnail from Southern Exposure Music */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.thumbnailAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-accent-cyan/80">
                      <Play className="h-7 w-7 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent-cyan">
                    {video.artist}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{video.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {video.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg">
            View All Videos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Video lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                  title={`${active.artist} — ${active.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">
                  {active.artist} — {active.title}
                </h3>
                <p className="text-sm text-muted-foreground">{active.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
