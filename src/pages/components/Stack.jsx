// src/pages/components/Stack.jsx
import React, { useState } from "react";
import stack from "../data/stack";

// Map tech names to SVGs in /public
const ICONS = {
  "Django": "/django.svg",
  "Node.js": "/node.svg",
  "HTML": "/html.svg",
  "CSS": "/css.svg",
  "JavaScript": "/js.svg",
  "Rust": "/rust.svg",
  "Python": "/python.svg",
  "PHP": "/php.svg",
  "React": "/react.svg",
  "Next.js": "/nextjs.svg",
  // Your file is named postgre.svg in /public
  "PostgreSQL": "/postgre.svg",
};

// Convert level to a base percent for the progress bar
const levelToPercent = (level) => {
  switch ((level || "").toLowerCase()) {
    case "expert":
      return 90;
    case "intermediate":
      return 70;
    case "beginner":
      return 50;
    default:
      return 60;
  }
};

export default function Stack() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="stack" className="border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400">
              Stack
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            Modern technologies and tools I use to build scalable, performant applications.
            Each carefully selected for production excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stack.map((item, i) => {
            const isHovered = hoveredIndex === i;
            const iconSrc = ICONS[item.name] || null;
            const basePct = levelToPercent(item.level);
            const widthPct = isHovered ? Math.min(basePct + 10, 100) : basePct; // small boost on hover

            return (
              <div
                key={`${item.name}-${i}`}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={[
                    "relative rounded-2xl border transition-all duration-300 p-6 h-full",
                    isHovered
                      ? "border-white/30 bg-white/[0.08] shadow-lg shadow-white/5 -translate-y-1"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20",
                  ].join(" ")}
                >
                  {/* Subtle glow effect */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
                  )}

                  {/* Top row: Icon + Active */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={[
                        "relative h-12 w-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 border",
                        isHovered
                          ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-400/30 text-indigo-300 scale-110"
                          : "bg-white/10 border-white/20 text-white/80",
                      ].join(" ")}
                    >
                      {iconSrc ? (
                        <img
                          src={iconSrc}
                          alt={`${item.name} logo`}
                          className="h-7 w-7"
                          loading="lazy"
                          draggable="false"
                        />
                      ) : (
                        (item.name?.[0] || "•").toUpperCase()
                      )}

                      {/* Active indicator */}
                      <div
                        className={[
                          "absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white/10 transition-all duration-300",
                          isHovered ? "bg-green-400 scale-100" : "bg-green-400/60 scale-75",
                        ].join(" ")}
                      >
                        <div className="w-full h-full rounded-full bg-green-300/80 animate-pulse" />
                      </div>
                    </div>

                    {/* Status dot */}
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/50 hidden sm:block">Active</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Name */}
                    <h3
                      className={[
                        "font-semibold text-lg leading-tight transition-all duration-300",
                        isHovered
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200"
                          : "text-white",
                      ].join(" ")}
                    >
                      {item.name}
                    </h3>

                    {/* Level pill */}
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs text-white/50">Level:</span>
                      <span className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/5 text-white/80">
                        {item.level || "—"}
                      </span>
                    </div>

                    {/* Proficiency bar (based on level) */}
                    <div className="pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-white/50">Proficiency</span>
                        <span className="text-xs text-white/70 font-medium">
                          {item.level || "—"}
                        </span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-700"
                          style={{ width: `${widthPct}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={[
                      "absolute bottom-0 left-6 right-6 h-px transition-all duration-300",
                      isHovered
                        ? "bg-gradient-to-r from-indigo-400/50 via-purple-400/50 to-pink-400/50"
                        : "bg-white/10",
                    ].join(" ")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
