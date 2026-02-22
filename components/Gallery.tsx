"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const images = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  /* REPLACE: Community photos, training, events */
  alt: `Guardian Malaysia community photo ${i + 1}`,
}));

export default function Gallery() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section id="gallery" className="bg-guardian-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-black text-guardian-black sm:text-4xl lg:text-5xl">
          Our Community
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-guardian-black/0 transition-colors duration-300 group-hover:bg-guardian-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
