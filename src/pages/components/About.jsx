// src/pages/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 py-14 sm:py-16 lg:py-20"
      aria-label="About Samson"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] sm:text-xs text-white/80 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Who I am
          </div>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-sky-400">
              Samson
            </span>
          </h2>
          <p className="mt-3 text-white/80 leading-relaxed max-w-3xl text-[0.975rem] sm:text-base">
            I’m a full-stack developer who turns complex problems into simple, intuitive products.
            From backend architecture to pixel-perfect UI, I ship reliable solutions with clean code,
            great developer experience, and measurable performance.
          </p>
        </div>

        {/* Content Grid */}
        {/* NOTE: stack on phone+tablet; only split into columns at lg */}
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-5 items-start">
          {/* LEFT: Image + Highlights */}
          <div className="lg:col-span-2 order-1 space-y-6">
            <div className="group relative flex flex-col items-center lg:items-start">
              {/* soft glow */}
              <div className="pointer-events-none absolute -inset-8 lg:-inset-6 rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-500/25 to-sky-500/25 blur-3xl opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* circular container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                {/* availability badge */}
                <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] sm:text-xs text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow">
                  Available
                </div>

                <img
                  src="/profile.png"
                  alt="Samson profile portrait"
                  loading="lazy"
                  className="w-full h-full object-cover object-center select-none"
                  draggable="false"
                />
              </div>

              {/* name + title */}
              <div className="mt-4 sm:mt-5 text-center lg:text-left">
                <p className="text-white font-semibold text-base sm:text-lg">Samson</p>
                <p className="text-[11px] sm:text-xs text-white/70">Full-Stack Developer</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-white/95 font-semibold text-lg">Highlights</h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-black/20 border border-white/10 p-4 text-center">
                  <div className="text-white font-bold text-xl">99.9%</div>
                  <div className="text-white/70 text-xs mt-1">API Uptime</div>
                </div>
                <div className="rounded-xl bg-black/20 border border-white/10 p-4 text-center">
                  <div className="text-white font-bold text-xl">+40%</div>
                  <div className="text-white/70 text-xs mt-1">Perf Gains</div>
                </div>
                <div className="rounded-xl bg-black/20 border border-white/10 p-4 text-center">
                  <div className="text-white font-bold text-xl">A11y</div>
                  <div className="text-white/70 text-xs mt-1">WCAG-minded</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="lg:col-span-3 order-2 space-y-6">
            {/* What I do */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-white/95 font-semibold text-lg">What I do</h3>
              <p className="mt-2 text-white/80 leading-relaxed text-[0.975rem]">
                I design APIs, model data, and build frontends that feel effortless. I lean on
                <span className="text-white"> React / Node / Django / PostgreSQL</span>,
                sprinkle in TypeScript where it counts, and keep an eye on logging, metrics, and
                accessibility so the work scales with the team and the users.
              </p>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/60">Architecture & DX</p>
                  <p className="mt-1 text-white text-sm sm:text-base">
                    Pragmatic designs, clean boundaries, great tooling.
                  </p>
                </li>
                <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/60">Frontend Craft</p>
                  <p className="mt-1 text-white text-sm sm:text-base">
                    Accessible, responsive, and fast user interfaces.
                  </p>
                </li>
                <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/60">Backend Reliability</p>
                  <p className="mt-1 text-white text-sm sm:text-base">
                    Robust APIs, queues, caching, secure auth.
                  </p>
                </li>
                <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/60">Shipping Mindset</p>
                  <p className="mt-1 text-white text-sm sm:text-base">
                    Iterate quickly with quality gates and telemetry.
                  </p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <h3 className="text-white/95 font-semibold text-lg">Experience</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                  <div>
                    <p className="text-white font-medium">Freelance / Contract</p>
                    <p className="text-sm text-white/70">Full-Stack Developer · 2022 — Present</p>
                    <p className="mt-1 text-white/80 text-sm">
                      Built e-commerce, school admin tools, and dashboards. Led architecture, CI/CD,
                      and performance budgets.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                  <div>
                    <p className="text-white font-medium">Open-source & Community</p>
                    <p className="text-sm text-white/70">Contributor · Ongoing</p>
                    <p className="mt-1 text-white/80 text-sm">
                      Libraries, docs, and templates that help teams bootstrap faster.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
