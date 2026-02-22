"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* REPLACE: Hero image — use a wide cinematic shot of kids training on mats */}
      <Image
        src="/images/hero.jpg"
        alt="Youth jiu jitsu training on mats"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-guardian-black/60 via-guardian-black/50 to-guardian-black/80" />

      {/* Content */}
      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-8xl tracking-tight">
          Jiu Jitsu For All.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl leading-relaxed">
          {/* REPLACE: Subheadline — mission statement for Guardian Malaysia */}
          Guardian Malaysia provides free jiu jitsu scholarships to underserved
          youth, building confidence, discipline, and community through martial
          arts.
        </p>
        <div className="mt-10">
          <a
            href="https://givebutter.com/guardianmalaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-guardian-crimson px-10 py-4 text-lg font-bold text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95 shadow-lg shadow-guardian-crimson/30"
          >
            Donate Now
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
