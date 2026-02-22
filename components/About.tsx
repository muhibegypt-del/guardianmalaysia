"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="bg-guardian-black py-20 sm:py-28">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          {/* REPLACE: Photo of the Malaysia academy / team */}
          <Image
            src="/images/about.jpg"
            alt="Guardian Malaysia academy team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
            <p>
              {/* REPLACE: Paragraph 1 — founding story of Guardian Malaysia */}
              Guardian Malaysia was founded with a simple belief: every child
              deserves access to the transformative power of jiu jitsu,
              regardless of their financial situation. As part of the global
              Guardian network, we bring world-class martial arts instruction to
              communities across Malaysia.
            </p>
            <p>
              {/* REPLACE: Paragraph 2 — growth, community impact */}
              What started as a single class has grown into a thriving community
              of dedicated coaches, passionate volunteers, and resilient young
              athletes. Every day on the mats, our students learn more than
              technique — they learn to believe in themselves.
            </p>
            <p>
              {/* REPLACE: Paragraph 3 — vision for the future */}
              Our vision is to expand across Malaysia, reaching more underserved
              communities and giving more young people the chance to discover
              their potential through jiu jitsu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
