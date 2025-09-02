// src/pages/Portfolio.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const max = (doc.scrollHeight || 0) - (window.innerHeight || 1);
      const pct = Math.min(100, Math.max(0, (scrollTop / (max || 1)) * 100));
      setScrollPct(pct);
      // Drive CSS var for fancy effects if you want elsewhere
      doc.style.setProperty("--scroll-progress", `${pct}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* 🔥 Global Scrollbar Styles (WebKit + Firefox) */}
      <style>{`
        :root{
          --sb-size: 12px;
          --sb-track: #0b0c14;
          --sb-track-border: rgba(255,255,255,0.06);
          --sb-thumb-start: #6366f1; /* indigo-500 */
          --sb-thumb-end: #d946ef;   /* fuchsia-500 */
          --sb-thumb-hover-start: #8b5cf6; /* violet-500 */
          --sb-thumb-hover-end: #ec4899;   /* pink-500 */
        }

        html {
          /* Keeps layout from shifting when the scrollbar appears */
          scrollbar-gutter: stable both-edges;
          /* Firefox colors */
          scrollbar-color: var(--sb-thumb-start) var(--sb-track);
          scrollbar-width: thin;
        }

        /* WebKit-based browsers */
        ::-webkit-scrollbar {
          width: var(--sb-size);
          height: var(--sb-size);
          background: transparent;
        }
        ::-webkit-scrollbar-track {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03)) padding-box,
            transparent border-box;
          border-left: 1px solid var(--sb-track-border);
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 9999px;
          background: linear-gradient(180deg, var(--sb-thumb-start), var(--sb-thumb-end));
          border: 3px solid rgba(0,0,0,0.35);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.08),
            0 4px 14px rgba(99,102,241,0.35),
            0 -4px 14px rgba(217,70,239,0.35);
          transition: background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, var(--sb-thumb-hover-start), var(--sb-thumb-hover-end));
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.12),
            0 6px 18px rgba(139,92,246,0.45),
            0 -6px 18px rgba(236,72,153,0.45);
        }
        ::-webkit-scrollbar-corner { background: transparent; }
      `}</style>

      {/* Background (simple, dark, no horizontal scroll) */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #05060d 0%, #070814 50%, #06060f 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.85) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Fixed Navbar at the very top */}
      <Navbar />

      {/* Right-edge progress pillar (hidden on tiny screens to avoid clutter) */}
      <div className="hidden sm:flex fixed right-3 top-[88px] bottom-[24px] z-40 items-end pointer-events-none">
        <div className="w-1.5 sm:w-2 rounded-full bg-white/10 border border-white/10 overflow-hidden backdrop-blur-md">
          <div
            className="w-full rounded-full will-change-transform"
            style={{
              height: `${scrollPct}%`,
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.9), rgba(217,70,239,0.9))",
              boxShadow:
                "0 6px 16px rgba(99,102,241,0.35), 0 -6px 16px rgba(217,70,239,0.35)",
              transition: "height 120ms linear",
            }}
          />
        </div>
      </div>

      {/* Spacer so content isn't hidden behind fixed navbar (64px/72px) */}
      <div className="pt-[64px] sm:pt-[72px]">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
