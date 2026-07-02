import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Independent Electronic Record Label`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "Southern Exposure Music",
    "SEM",
    "electronic music label",
    "Atlanta",
    "house music",
    "techno",
    "trance",
    "Raskal",
    "independent record label",
    "Southern Exposure",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Independent Electronic Record Label`,
    description:
      "Atlanta-based independent electronic music label since 2010. House • Techno • Trance.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Independent electronic music label — House, Techno, Trance since 2010.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/sem-logo.png",
    apple: "/images/logo/sem-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
