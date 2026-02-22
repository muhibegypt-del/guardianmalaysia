"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const blocks = [
  {
    number: "01",
    title: "Free Scholarships",
    description:
      "We provide fully funded jiu jitsu scholarships to underserved youth, removing financial barriers to martial arts training and personal development.",
  },
  {
    number: "02",
    title: "Character Development",
    description:
      "Through the discipline of jiu jitsu, students build confidence, resilience, and respect — skills that translate far beyond the mats.",
  },
  {
    number: "03",
    title: "Community Impact",
    description:
      "Guardian Malaysia creates a safe space where young people find mentorship, belonging, and a supportive community that believes in their potential.",
  },
];

export default function Mission() {
  const ref = useFadeIn({ stagger: true });

  return (
    <section id="mission" className="bg-guardian-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-black text-guardian-black sm:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-guardian-black/60 leading-relaxed">
            {/* REPLACE: Short mission overview paragraph */}
            Guardian Malaysia is part of a global network of academies providing
            free jiu jitsu to youth who need it most.
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blocks.map((block) => (
            <div key={block.number} className="group">
              <span className="text-5xl font-black text-guardian-crimson/20 group-hover:text-guardian-crimson/40 transition-colors">
                {block.number}
              </span>
              <h3 className="mt-2 text-xl font-bold text-guardian-black">
                {/* REPLACE: Block title */}
                {block.title}
              </h3>
              <p className="mt-3 text-guardian-black/60 leading-relaxed">
                {/* REPLACE: Block description */}
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
