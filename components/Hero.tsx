"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Cinematic Filters */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat saturate-[0.8] contrast-[1.1] brightness-[0.9]"
        style={{
          backgroundImage: `url('/images/hero-featured.jpg')`,
        }}
        aria-label="Kids training jiu jitsu on the mat"
      />
      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Vignette effect (darker edges) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center mt-12">
        <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-6">
          Guardian Malaysia
        </p>
        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
          Give a kid a fighting chance.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed font-medium">
          Every child deserves a safe place to train, grow, and belong. No matter their background.
        </p>
        <div className="mt-12">
          <a
            href="https://givebutter.com/guardianmalaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-guardian-crimson px-12 py-5 text-lg font-bold tracking-widest uppercase text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95 shadow-xl shadow-guardian-crimson/20"
          >
            Sponsor a Kid
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
