// src/pages/components/Projects.jsx
import React from "react";
import projects from "../data/projects";
import { Sparkles, FolderGit2, Code2, ExternalLink } from "lucide-react";

/**
 * Professional projects grid using lucide-react icons.
 * - Single, clean place to show the tech stack (chips). No duplication.
 * - Subtle glassmorphism + refined hover.
 * - Buttons only render when links exist; otherwise show a muted badge.
 */
export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            Selected Work
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Projects
          </h2>
          <p className="mt-2 text-white/75 max-w-2xl">
            A snapshot of current and past builds. First two include details; the rest are ready for
            you to fill in when you’re set.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const hasDetails = Boolean(p.description && p.description.trim().length);
            const hasTech = Array.isArray(p.tech) && p.tech.length > 0;
            const hasCode = Boolean(p.github && p.github.trim().length);
            const hasLive = Boolean(p.live && p.live.trim().length);

            return (
              <article
                key={p.slug}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.06] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5"
              >
                {/* subtle animated edge */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(800px_260px_at_0%_-10%,rgba(99,102,241,0.26),transparent_55%),radial-gradient(650px_240px_at_120%_120%,rgba(236,72,153,0.26),transparent_55%)]" />
                </div>

                {/* Card content */}
                <div className="relative">
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Icon avatar */}
                      <div className="relative shrink-0">
                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 text-white">
                          <FolderGit2 className="h-5 w-5 opacity-90" />
                        </div>
                        <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
                      </div>
                      <h3 className="truncate text-white font-semibold">{p.title}</h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Body */}
                  <div className="p-5">
                    {hasDetails ? (
                      <p className="text-sm text-white/85 leading-relaxed">{p.description}</p>
                    ) : (
                      <p className="text-sm text-white/55 italic">Details coming soon.</p>
                    )}

                    {/* Single place for the tech stack (chips) */}
                    {hasTech && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <li
                            key={t}
                            className="px-3 py-1.5 rounded-full text-xs text-white bg-white/10 border border-white/10"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer actions */}
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs">
                    <span className={hasDetails ? "text-white/70" : "text-white/50"}>
                      {hasDetails ? "Production-ready" : "Draft"}
                    </span>

                    <div className="flex items-center gap-2">
                      {/* GitHub / Code */}
                      {hasCode ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/85 hover:text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          title="View source on GitHub"
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          Code
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/40">
                          <Code2 className="h-3.5 w-3.5" />
                          Code — n/a
                        </span>
                      )}

                      {/* Live */}
                      {hasLive ? (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-sky-300 hover:text-sky-200 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
                          title="Open live demo"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/40">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live — n/a
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Keyboard focus ring */}
                <span className="absolute inset-0 rounded-2xl ring-0 ring-white/0 focus-within:ring-2 focus-within:ring-white/40 transition" />
              </article>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
