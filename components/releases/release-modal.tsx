"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Music } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Release } from "@/lib/data";

interface ReleaseModalProps {
  release: Release | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReleaseModal({ release, open, onOpenChange }: ReleaseModalProps) {
  if (!release) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <div className="grid gap-0 sm:grid-cols-2">
          {/* Replace with actual album art from WordPress media library */}
          <div className="relative aspect-square overflow-hidden bg-black">
            <Image
              src={release.image}
              alt={release.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent sm:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <DialogHeader className="text-left">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-accent-indigo/10 px-3 py-1 text-xs font-medium text-accent-indigo">
                  {release.genre}
                </span>
                {release.catalog && (
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {release.catalog}
                  </span>
                )}
                {release.year && (
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
                    {release.year}
                  </span>
                )}
              </div>
              <DialogTitle className="text-2xl md:text-3xl">
                {release.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {release.artist}
              </DialogDescription>
            </DialogHeader>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {release.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {release.spotifyUrl && (
                <Button asChild size="sm">
                  <Link
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music className="h-4 w-4" />
                    Spotify
                  </Link>
                </Button>
              )}
              {release.beatportUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={release.beatportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Beatport
                  </Link>
                </Button>
              )}
              {release.bandcampUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={release.bandcampUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Bandcamp
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
