"use client";

import Image from "next/image";

const validIndices = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const images = validIndices.map((num) => ({
  src: `/images/marquee-${num}.jpg`,
  alt: `Guardian Malaysia training moment ${num}`,
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
