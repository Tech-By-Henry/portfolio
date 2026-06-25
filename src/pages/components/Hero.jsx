import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full-Stack Developer",
    "Software Architect",
    "Technical Lead",
    "Instructor",
    "Software Engineer",
  ];

  useEffect(() => {
    setIsVisible(true);

    // Respect users who prefer reduced motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) return; // don't auto-rotate roles

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      /* No page background color or gradient */
      className="relative min-h-[85vh] md:min-h-[90vh] lg:min-h-screen overflow-hidden"
      aria-label="Intro"
    >
      <div className="relative z-10 mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-12 gap-x-0 lg:gap-x-12 xl:gap-x-16 py-12 sm:py-16 lg:py-20">
          {/* ===== Left: Content ===== */}
          <div className="lg:col-span-7 w-full lg:pr-4 xl:pr-16 text-center lg:text-left">
            <div
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {/* Main Heading (bright) */}
              <h1 className="text-white font-bold leading-[1.05] tracking-tight 
                             text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                             [text-wrap:balance]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-sky-400">
                  Samson
                </span>
              </h1>

              {/* Dynamic Role (bright) */}
              <div
                className="mt-3 sm:mt-4 lg:mt-6 h-[2.25rem] sm:h-[3rem] lg:h-[3.5rem] flex items-center justify-center lg:justify-start"
                aria-live="polite"
              >
                <p className="text-white/90 font-light text-lg sm:text-2xl lg:text-3xl">
                  {roles[currentRole]}
                </p>
              </div>

              {/* Description (bright) */}
              <p className="mt-4 sm:mt-6 text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 
                            text-[0.975rem] sm:text-lg">
                I specialize in building scalable web applications and intuitive user interfaces.
                With expertise in modern technologies and a focus on clean, maintainable code,
                I deliver solutions that drive business growth.
              </p>

              {/* CTAs (bright) */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-xl mx-auto lg:mx-0">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 bg-gradient-to-r from-indigo-500 to-fuchsia-500"
                >
                  View My Work
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white border-2 border-white/40 hover:border-white hover:text-white transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get In Touch
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>

              {/* Professional Stats (bright) */}
              <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto lg:mx-0 border-t border-white/15 pt-6 sm:pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-white font-bold text-2xl sm:text-3xl">6+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-white font-bold text-2xl sm:text-3xl">3+</div>
                  <div className="text-white/70 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-white font-bold text-2xl sm:text-3xl">100%</div>
                  <div className="text-white/70 text-xs sm:text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right: Code Editor Mockup ===== */}
          <div className="lg:col-span-5 w-full">
            <div
              className={`relative transform transition-all duration-700 ease-out delay-150 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="mx-auto max-w-[30rem] sm:max-w-[34rem] lg:max-w-[28rem] xl:max-w-[32rem]">
                <div className="bg-white/95 border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="bg-slate-100 px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="text-slate-600 text-xs sm:text-sm ml-4 select-none">
                      portfolio.js
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-4 sm:p-6 font-mono leading-relaxed bg-white text-[11px] sm:text-[12px] md:text-[13px]">
                    <div className="text-fuchsia-600">
                      const <span className="text-indigo-600">developer</span> = {"{"}
                    </div>
                    <div className="text-slate-800 ml-4">
                      name: <span className="text-emerald-600">"Samson"</span>,
                    </div>
                    <div className="text-slate-800 ml-4">skills: [</div>
                    <div className="text-emerald-600 ml-8">"React", "Node.js",</div>
                    <div className="text-emerald-600 ml-8">"TypeScript", "MongoDB"</div>
                    <div className="text-slate-800 ml-4">],</div>
                    <div className="text-slate-800 ml-4">
                      passion: <span className="text-emerald-600">"Clean Code"</span>,
                    </div>
                    <div className="text-slate-800 ml-4">
                      goal: <span className="text-emerald-600">"Exceptional UX"</span>
                    </div>
                    <div className="text-fuchsia-600">{"};"}</div>

                    <div className="mt-4 text-slate-500">// Building the future</div>
                    <div className="text-slate-500">// one line at a time</div>
                  </div>
                </div>

                {/* Subtle helper: keep card inside viewport on very small screens */}
                <div className="mt-2 text-center text-white/50 text-xs select-none">
                  <span className="inline-block px-2 py-1">★</span>
                </div>
              </div>
            </div>
          </div>
          {/* ===== End Right ===== */}
        </div>
      </div>

      {/* Safe area padding for ultra-small devices (prevents crowding near edges) */}
      <div className="pointer-events-none h-2 sm:h-3" aria-hidden="true" />
    </section>
  );
}
