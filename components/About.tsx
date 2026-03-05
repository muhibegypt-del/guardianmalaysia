"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const stats = [
  { value: "34", label: "Academies Worldwide" },
  { value: "929", label: "Kids Currently Sponsored" },
  { value: "100%", label: "Of Your Donation Reaches Kids" },
];

export default function About() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section id="guide" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered text callout */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl font-black tracking-tight text-guardian-black sm:text-4xl lg:text-5xl mb-8">
            Mentorship through motion
          </h2>
          <p className="text-lg text-guardian-black/70 leading-[1.7] font-medium">
            Guardian Malaysia is part of a global nonprofit providing free jiu jitsu scholarships to underserved youth across 34 academies worldwide, with 929 kids currently sponsored. Every ringgit you give goes directly to kids. Gis, mats, coaches, and a safe space to train. No overhead. No waste.
          </p>
        </div>

        {/* Stat bar */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-5xl font-black text-guardian-black mb-3">
                {stat.value}
              </span>
              <span className="text-[13px] font-bold text-guardian-black/50 uppercase tracking-[0.2em] max-w-[200px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
