"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

const narrativeImages = [
  {
    src: "/images/gallery-8.jpg",
    alt: "Focus and anticipation before the training session begins.",
  },
  {
    src: "/images/marquee-4.jpg",
    alt: "Elite coaches providing direct mentorship and breaking down techniques.",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Students building resilience and testing their skills on the mat.",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Shared exhaustion and quiet camaraderie between intense training rounds.",
  },
  {
    src: "/images/gallery-9.jpg",
    alt: "A team huddle reinforcing the core values of discipline and respect.",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "The expanding Guardian Malaysia family standing strong together.",
  }
];

export default function Gallery() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section id="gallery" className="bg-guardian-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
          The Community
        </p>
        <h2 className="mb-12 text-3xl font-black text-guardian-black sm:text-4xl lg:text-5xl tracking-tight">
          See Your Impact
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {narrativeImages.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
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
