import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Southern Exposure Music | Independent Electronic Record Label",
  description:
    "Southern Exposure Music (SEM) — Atlanta-based independent electronic music label since 2010. House, Techno, Trance. Founded by Raskal.",
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
  ],
  authors: [{ name: "Southern Exposure Music" }],
  openGraph: {
    title: "Southern Exposure Music | Independent Electronic Record Label",
    description:
      "Atlanta-based independent electronic music label since 2010. House • Techno • Trance.",
    url: "https://southernexposuremusic.com",
    siteName: "Southern Exposure Music",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southern Exposure Music",
    description:
      "Independent electronic music label — House, Techno, Trance since 2010.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
