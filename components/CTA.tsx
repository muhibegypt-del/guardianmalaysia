"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function CTA() {
  const ref = useFadeIn();

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background image */}
      {/* REPLACE: Wide action shot */}
      <Image
        src="/images/cta-bg.jpg"
        alt="Jiu jitsu training action"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-guardian-black/80 via-guardian-black/60 to-guardian-black/80" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-6xl">
          {/* REPLACE: CTA headline */}
          Join the Movement
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
          {/* REPLACE: CTA supporting text */}
          Your support helps provide free jiu jitsu scholarships to underserved
          youth across Malaysia. Every contribution makes a difference.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://givebutter.com/guardianmalaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-guardian-crimson px-10 py-4 text-lg font-bold text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95 shadow-lg shadow-guardian-crimson/30"
          >
            Donate
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-sm border-2 border-white px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-guardian-black active:scale-95"
          >
            {/* REPLACE: Secondary CTA link */}
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
