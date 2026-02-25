"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function CTA() {
  const ref = useFadeIn();

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cta-bg.jpg"
        alt="Jiu jitsu training action"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-guardian-black/80 via-guardian-black/60 to-guardian-black/80" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
          Make It Happen
        </p>
        <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-7xl tracking-tight">
          Fund a scholar today
        </h2>
        <p className="mt-6 text-lg text-white/60 font-medium">
          Your donation changes a life. 100% goes directly to the kids.
        </p>
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="https://givebutter.com/guardianmalaysia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-guardian-crimson px-12 py-5 text-lg font-bold tracking-widest uppercase text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95 shadow-xl shadow-guardian-crimson/20"
          >
            Donate
          </a>
          <a
            href="mailto:info@guardianmalaysia.com"
            className="inline-flex items-center rounded-sm border-[3px] border-white px-12 py-5 text-lg font-bold tracking-widest uppercase text-white transition-all hover:bg-white hover:text-guardian-black active:scale-95"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
