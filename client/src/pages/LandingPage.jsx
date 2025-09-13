import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "../components/HeroSection";
import SurahExplorer from "../components/SurahExplorer";
import Footer from "@/components/Footer";
import QuranIntro from "@/components/QuranIntro";

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
   <main className="landing">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="intro">
        <QuranIntro />
      </section>

      <section id="explorer">
        <SurahExplorer />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
