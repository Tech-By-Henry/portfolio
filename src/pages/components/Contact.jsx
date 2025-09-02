// src/pages/components/Contact.jsx
import React, { useState } from "react";
import contact from "../data/contact";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Send,
  Globe,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";

export default function Contact() {
  const { email, phone, location, socials = {} } = contact || {};

  // small UX: copy-to-clipboard feedback
  const [copied, setCopied] = useState(null);
  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1400);
    } catch (_) {
      // noop
    }
  };

  // map common social keys to icons + nice labels
  const socialIcon = (k) => {
    const key = (k || "").toLowerCase();
    if (key.includes("github")) return <Github className="h-4.5 w-4.5" />;
    if (key.includes("twitter") || key === "x") return <Twitter className="h-4.5 w-4.5" />;
    if (key.includes("linkedin")) return <Linkedin className="h-4.5 w-4.5" />;
    if (key.includes("instagram")) return <Instagram className="h-4.5 w-4.5" />;
    if (key.includes("facebook")) return <Facebook className="h-4.5 w-4.5" />;
    if (key.includes("youtube")) return <Youtube className="h-4.5 w-4.5" />;
    if (key.includes("telegram")) return <Send className="h-4.5 w-4.5" />;
    if (key.includes("whatsapp")) return <MessageCircle className="h-4.5 w-4.5" />;
    if (key.includes("site") || key.includes("portfolio") || key.includes("web")) return <Globe className="h-4.5 w-4.5" />;
    return <ExternalLink className="h-4.5 w-4.5" />;
  };

  const socialLabel = (k) => {
    const key = (k || "").toLowerCase();
    if (key === "x") return "Twitter (X)";
    return k.charAt(0).toUpperCase() + k.slice(1);
  };

  return (
    <section id="contact" className="relative border-t border-white/10 py-16">
      {/* Ambient backdrop (very subtle, matches your dark theme) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-24 h-60 w-60 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-indigo-600/40 to-fuchsia-600/30" />
        <div className="absolute -bottom-24 -right-20 h-60 w-60 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-500/40 to-sky-500/30" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage:
              "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Let’s work together
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact
          </h2>
          <p className="mt-2 text-white/75 max-w-2xl">
            Reach out for collaborations, freelance work, or just to say hi. I respond quickly.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="group relative rounded-2xl p-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_300px_at_0%_-10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(700px_300px_at_120%_120%,rgba(236,72,153,0.35),transparent_55%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Mail className="h-5 w-5 text-sky-300" /> Email
                </h4>
                {email && (
                  <button
                    onClick={() => copy(email, "email")}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80 hover:bg-white/10 transition"
                    title="Copy email"
                  >
                    {copied === "email" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied === "email" ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
              <p className="mt-2">
                {email ? (
                  <a className="text-sky-300 underline break-all hover:text-sky-200" href={`mailto:${email}`}>
                    {email}
                  </a>
                ) : (
                  <span className="text-white/50">Not provided</span>
                )}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="group relative rounded-2xl p-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_300px_at_0%_-10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(700px_300px_at_120%_120%,rgba(236,72,153,0.35),transparent_55%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-emerald-300" /> Phone
                </h4>
                {phone && (
                  <button
                    onClick={() => copy(phone, "phone")}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/80 hover:bg-white/10 transition"
                    title="Copy phone"
                  >
                    {copied === "phone" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied === "phone" ? "Copied" : "Copy"}
                  </button>
                )}
              </div>
              <p className="mt-2">
                {phone ? (
                  <a className="text-emerald-300 underline hover:text-emerald-200" href={`tel:${phone}`}>
                    {phone}
                  </a>
                ) : (
                  <span className="text-white/50">Not provided</span>
                )}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="group relative rounded-2xl p-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_300px_at_0%_-10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(700px_300px_at_120%_120%,rgba(236,72,153,0.35),transparent_55%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-fuchsia-300" /> Location
              </h4>
              <p className="mt-2 text-white/80">{location || <span className="text-white/50">Not provided</span>}</p>
            </div>
          </div>

          {/* Socials (dynamic) */}
          {Object.entries(socials).map(([key, url]) => (
            <div key={key} className="group relative rounded-2xl p-0.5">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(900px_300px_at_0%_-10%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(700px_300px_at_120%_120%,rgba(236,72,153,0.35),transparent_55%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <span className="text-white/90">{socialIcon(key)}</span> {socialLabel(key)}
                </h4>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sky-300 hover:text-sky-200 underline break-all"
                    title={`Open ${socialLabel(key)}`}
                  >
                    {url}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <p className="mt-2 text-white/50">Not provided</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">Have a project in mind?</h3>
            <p className="text-white/70 text-sm">
              I’m open to freelance, contracts, and collaborations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition"
              >
                <Mail className="h-4.5 w-4.5" />
                Email me
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4.5 w-4.5" />
                Call
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
