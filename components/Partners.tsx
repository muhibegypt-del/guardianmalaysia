"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const partners = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/partners/partner-${i + 1}.png`,
  /* REPLACE: Partner/sponsor logos */
  alt: `Partner ${i + 1}`,
}));

export default function Partners() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section id="partners" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-black text-guardian-black sm:text-4xl">
          Our Partners
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-2"
            >
              {/* REPLACE: Partner/sponsor logos */}
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                className="h-12 w-auto object-contain grayscale opacity-60 transition-all hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
