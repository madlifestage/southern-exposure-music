"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SPOTIFY_URL } from "@/lib/constants";
import { RELEASES } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

function WaveformBars() {
  const bars = Array.from({ length: 40 }, (_, i) => i);
  return (
    <div className="flex h-16 items-end justify-center gap-[3px] opacity-20">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-accent-indigo to-accent-cyan"
          animate={{
            height: [
              `${20 + Math.sin(i * 0.5) * 15}%`,
              `${40 + Math.cos(i * 0.7) * 30}%`,
              `${20 + Math.sin(i * 0.5) * 15}%`,
            ],
          }}
          transition={{
            duration: 1.5 + (i % 5) * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const [bgImage, setBgImage] = useState(RELEASES[0].image);

  useEffect(() => {
    const randomRelease =
      RELEASES[Math.floor(Math.random() * RELEASES.length)];
    setBgImage(randomRelease.image);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Southern Exposure Music release artwork"
          fill
          priority
          className="object-cover opacity-40 grayscale-[20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/45 via-[#0a0a0f]/55 to-[#0a0a0f]/90" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-indigo/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-cyan/15 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 text-center md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="section-label mb-8">Atlanta · Since 2010</p>

          <div className="mx-auto flex justify-center">
            <Image
              src="/images/logo/southern-exposure-logo.png"
              alt="Southern Exposure Music"
              width={560}
              height={100}
              priority
              className="h-auto w-full max-w-[min(90vw,560px)]"
            />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:text-xl">
            Independent Electronic Music Label&nbsp;|&nbsp;House&nbsp;•&nbsp;Techno&nbsp;•&nbsp;Trance&nbsp;|&nbsp;Since&nbsp;2010
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection("releases")}>
              Explore Releases
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                Stream on Spotify
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <WaveformBars />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
          >
            <div className="h-2 w-1 rounded-full bg-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
