import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Releases } from "@/components/sections/releases";
import { Artists } from "@/components/sections/artists";
import { Videos } from "@/components/sections/videos";
import { ListenEverywhere } from "@/components/sections/listen-everywhere";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Releases />
        <Artists />
        <Videos />
        <ListenEverywhere />
      </main>
      <Footer />
    </>
  );
}
