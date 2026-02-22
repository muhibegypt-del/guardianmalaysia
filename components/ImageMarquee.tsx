"use client";

import Image from "next/image";

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/marquee-${i + 1}.jpg`,
  /* REPLACE: Authentic photos — kids in gis, training moments, community, coaches, mats */
  alt: `Guardian Malaysia training moment ${i + 1}`,
}));

export default function ImageMarquee() {
  return (
    <section className="overflow-hidden py-8 bg-guardian-black">
      <div className="marquee-strip flex animate-marquee w-max gap-4">
        {/* First set */}
        {images.map((img, i) => (
          <div
            key={`a-${i}`}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80 lg:h-64 lg:w-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {images.map((img, i) => (
          <div
            key={`b-${i}`}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-80 lg:h-64 lg:w-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
