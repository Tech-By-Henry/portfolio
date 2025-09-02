// src/pages/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";

const links = ["home", "about", "stack", "projects", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // Detect scroll depth to toggle background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Follow the section in view
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const options = { root: null, rootMargin: "-40% 0px -50% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting && id) setActiveSection(id);
      });
    }, options);

    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen((o) => !o);

  const getNavOffset = () => {
    // Add a small cushion so content isn't tight under the nav
    const base = navRef.current?.offsetHeight ?? 72;
    return base + 8;
  };

  const scrollToSection = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(section);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - getNavOffset();

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
    setIsOpen(false);
    scrollToSection(section);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 overflow-x-clip ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="group flex items-center space-x-3"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-indigo-500 to-fuchsia-500">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                {/* contained glow */}
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 blur opacity-20 group-hover:opacity-35 transition-opacity duration-200"></div>
              </div>
              <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-sky-400 text-lg sm:text-2xl">
                Techy Sam
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {links.map((link) => {
                const active = activeSection === link;
                return (
                  <a
                    key={link}
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative px-4 py-2 text-sm font-medium capitalize rounded-lg transition-all duration-200 ${
                      active
                        ? "text-white bg-white/10"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link}
                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-500" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center px-5 py-2 rounded-lg text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 bg-gradient-to-r from-indigo-500 to-fuchsia-500"
            >
              Let's Talk
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 top-3" : "top-1"}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 top-3" : "top-5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="pt-4 space-y-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl">
            {links.map((link) => {
              const active = activeSection === link;
              return (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-4 py-3 text-base font-medium capitalize rounded-lg transition-all duration-200 ${
                    active ? "text-white bg-white/10 border-l-4 border-indigo-400" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link}
                </a>
              );
            })}

            {/* Mobile CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="flex items-center justify-center w-full px-5 py-3 rounded-lg text-white font-semibold text-base shadow-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500"
              >
                Let's Talk
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
