import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import HeroSection from "../components/HeroSection";
import SurahExplorer from "../components/SurahExplorer";
import Footer from "@/components/Footer";

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
      <section>
        <HeroSection />
      </section>

      <section>
        <SurahExplorer />
      </section>

      <section>
        <Footer/>
      </section>
    </main>
  );
}
