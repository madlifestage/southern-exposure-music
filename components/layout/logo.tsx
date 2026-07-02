"use client";

import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  showFullName?: boolean;
}

export function Logo({ className, showFullName = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${SITE.name} home`}
    >
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent-indigo/40 bg-accent-indigo/10"
      >
        <Disc3 className="h-4 w-4 text-accent-indigo" />
        <span className="absolute inset-0 rounded-full bg-accent-indigo/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
      </motion.div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          {showFullName ? (
            <>
              Southern Exposure{" "}
              <span className="text-gradient">Music</span>
            </>
          ) : (
            <>
              <span className="text-gradient">SEM</span>
            </>
          )}
        </span>
        {showFullName && (
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Est. 2010
          </span>
        )}
      </div>
    </Link>
  );
}
