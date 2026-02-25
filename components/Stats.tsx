"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const stats = [
  { value: "XX", label: "Students Sponsored" },
  { value: "XX", label: "Dedicated Coaches" },
  { value: "YYYY", label: "Year Founded" },
  { value: "XX", label: "Community Partners" },
];

export default function Stats() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section className="bg-guardian-black py-16 sm:py-20">
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-black text-guardian-crimson sm:text-5xl lg:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-bold text-white/70 uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
