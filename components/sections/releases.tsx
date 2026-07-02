"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReleaseCard } from "@/components/releases/release-card";
import { ReleaseModal } from "@/components/releases/release-modal";
import { RELEASES, type Release } from "@/lib/data";

export function Releases() {
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (release: Release) => {
    setSelectedRelease(release);
    setModalOpen(true);
  };

  return (
    <section id="releases" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="section-label">Catalog</p>
            <h2 className="section-title">
              Latest <span className="text-gradient">Releases</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Fresh cuts from the Southern Exposure catalog — techno, house, and
            progressive sounds for the dancefloor.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 md:pb-0">
          {RELEASES.map((release, i) => (
            <div key={release.id} className="snap-start md:snap-align-none">
              <ReleaseCard
                release={release}
                index={i}
                onSelect={handleSelect}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/releases">
              View Full Discography
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <ReleaseModal
        release={selectedRelease}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
