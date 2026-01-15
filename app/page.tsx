"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollCanvas from "../components/ScrollCanvas";
import FerrariHUD from "../components/FerrariHUD";
import Navbar from "../components/Navbar";
import SpecsGrid from "../components/SpecsGrid";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);

  // Master Scroll Controller attached to the 600vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-carbon-gray min-h-screen text-white">
      <Navbar />

      {/* 
        SCROLL SEQUENCE 
        - Height of 600vh determines how long the sequence plays
        - Sticky container holds the fixed canvas and HUD
      */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollCanvas
            scrollYProgress={scrollYProgress}
            totalFrames={240}
            imageFolderPath="/assets"
          />
          <FerrariHUD scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Standard Scroll Content */}
      <div className="relative z-20">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
