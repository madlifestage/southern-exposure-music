"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-indigo/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">About the Label</p>
            <h2 className="section-title">
              16+ Years of{" "}
              <span className="text-gradient">Underground Excellence</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Southern Exposure Music is an Atlanta-based independent electronic
              music label founded in 2010 by DJ/Producer{" "}
              <span className="font-semibold text-foreground">Raskal</span>.
              For over sixteen years, SEM has delivered quality releases, promo
              mixes, and unwavering support for artists across the Southeast
              electronic scene and beyond.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From deep, driving techno to euphoric progressive and trance,
              Southern Exposure Music champions forward-thinking sounds with
              soul — always underground, always professional.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                {SITE.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                Founded {SITE.founded}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
