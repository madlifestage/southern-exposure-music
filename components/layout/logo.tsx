"use client";

import Image from "next/image";
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
      className={cn("group flex items-center", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src={
          showFullName
            ? "/images/logo/southern-exposure-logo.png"
            : "/images/logo/sem-logo.png"
        }
        alt={
          showFullName
            ? "Southern Exposure Music logo"
            : "SEM — Southern Exposure Music logo"
        }
        width={showFullName ? 220 : 72}
        height={showFullName ? 40 : 40}
        className={cn(
          "h-auto w-auto transition-opacity duration-300 group-hover:opacity-90",
          showFullName ? "max-h-10" : "max-h-9"
        )}
        priority
      />
    </Link>
  );
}
