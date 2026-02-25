"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
    {
        number: "01",
        title: "You donate any amount",
        description: "100% goes to the kids."
    },
    {
        number: "02",
        title: "We fund a scholarship",
        description: "They get gear, coaching, and a consistent place to be."
    },
    {
        number: "03",
        title: "A life changes",
        description: "They gain confidence, discipline, friendships, and a community that has their back."
    },
];

export default function Plan() {
    const ref = useFadeIn({ stagger: true });

    return (
        <section id="plan" className="bg-guardian-black py-32 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
                        The Plan
                    </p>
                    <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl tracking-tight">
                        How You Can Help
                    </h2>
                </div>

                <div
                    ref={ref}
                    className="grid gap-16 lg:gap-24 sm:grid-cols-3 max-w-5xl mx-auto"
                >
                    {steps.map((step) => (
                        <div key={step.number} className="text-center group">
                            <span className="block text-7xl font-black text-white/5 sm:text-white/10 group-hover:text-guardian-crimson transition-colors duration-500 mb-6 tracking-tighter">
                                {step.number}
                            </span>
                            <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                                {step.title}
                            </h3>
                            <p className="text-base text-white/60 leading-[1.6] font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
