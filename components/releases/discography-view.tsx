"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { ReleaseCard } from "@/components/releases/release-card";
import { ReleaseModal } from "@/components/releases/release-modal";
import { DISCOGRAPHY, type Release } from "@/lib/data";
import { cn } from "@/lib/utils";

const TYPE_FILTERS = ["All", "Single", "EP", "Album"] as const;

type TypeFilter = (typeof TYPE_FILTERS)[number];

function normalizeType(release: Release) {
  const value = release.releaseType ?? release.genre;
  if (value.toUpperCase() === "SINGLE") return "Single";
  if (value.toUpperCase() === "EP") return "EP";
  if (value.toUpperCase() === "ALBUM") return "Album";
  return release.genre;
}

export function DiscographyView() {
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");

  const years = useMemo(
    () =>
      Array.from(
        new Set(DISCOGRAPHY.map((release) => release.year).filter(Boolean))
      ).sort((a, b) => Number(b) - Number(a)) as string[],
    []
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return DISCOGRAPHY.filter((release) => {
      const matchesQuery =
        !normalizedQuery ||
        release.title.toLowerCase().includes(normalizedQuery) ||
        release.artist.toLowerCase().includes(normalizedQuery);

      const matchesYear =
        yearFilter === "All" || release.year === yearFilter;

      const matchesType =
        typeFilter === "All" || normalizeType(release) === typeFilter;

      return matchesQuery && matchesYear && matchesType;
    });
  }, [query, yearFilter, typeFilter]);

  const handleSelect = (release: Release) => {
    setSelectedRelease(release);
    setModalOpen(true);
  };

  return (
    <>
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-indigo/[0.03] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
          >
            <p className="section-label">Catalog</p>
            <h1 className="section-title">
              Full <span className="text-gradient">Discography</span>
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {DISCOGRAPHY.length} releases from the Southern Exposure Music
              catalog — singles, EPs, and albums spanning house, techno, and
              progressive electronic music since 2010.
            </p>
          </motion.div>

          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or artist..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-indigo/50 focus:outline-none focus:ring-1 focus:ring-accent-indigo/50"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <select
                value={yearFilter}
                onChange={(event) => setYearFilter(event.target.value)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground focus:border-accent-indigo/50 focus:outline-none"
                aria-label="Filter by year"
              >
                <option value="All">All years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <div className="flex flex-wrap gap-2">
                {TYPE_FILTERS.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTypeFilter(type)}
                    className={cn(
                      "rounded-full border px-4 py-2.5 text-sm font-medium transition-colors",
                      typeFilter === type
                        ? "border-accent-indigo/40 bg-accent-indigo/15 text-accent-cyan"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mb-6 text-sm text-muted-foreground">
            Showing {filtered.length} of {DISCOGRAPHY.length} releases
          </p>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((release, index) => (
                <ReleaseCard
                  key={release.id}
                  release={release}
                  index={index}
                  onSelect={handleSelect}
                  grid
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/5 bg-card px-6 py-16 text-center">
              <p className="text-lg font-semibold">No releases match your filters.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try clearing the search or choosing a different year or format.
              </p>
            </div>
          )}
        </div>
      </section>

      <ReleaseModal
        release={selectedRelease}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}
