import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DiscographyView } from "@/components/releases/discography-view";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Discography",
  description:
    "Browse the full Southern Exposure Music discography — singles, EPs, and albums from the Atlanta electronic label since 2010.",
  alternates: {
    canonical: "/releases",
  },
  openGraph: {
    title: `Discography | ${SITE.name}`,
    description:
      "Full catalog of Southern Exposure Music releases — house, techno, and progressive electronic music.",
    url: `${SITE.url}/releases`,
  },
};

export default function ReleasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
        <DiscographyView />
      </main>
      <Footer />
    </>
  );
}
