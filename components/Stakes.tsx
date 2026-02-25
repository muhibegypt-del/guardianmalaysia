"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

export default function Stakes() {
    const ref = useFadeIn();

    return (
        <section id="stakes" className="relative py-32 sm:py-48 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/gallery-8.jpg')`,
                }}
                role="img"
                aria-label="Kids in gis group shot"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-guardian-black/70" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[640px] px-6 lg:px-8 text-center" ref={ref}>
                <p className="text-2xl sm:text-[28px] leading-[1.6] font-medium text-white mb-10">
                    Without this, these kids stay on the outside. No mentor, no team, no safe place after school. With you, they get on the mat.
                </p>
                <a
                    href="https://givebutter.com/guardianmalaysia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-sm bg-guardian-crimson px-12 py-5 text-lg font-bold tracking-widest uppercase text-white transition-all hover:bg-guardian-red hover:scale-105 active:scale-95 shadow-xl shadow-guardian-crimson/20"
                >
                    Sponsor a Kid
                </a>
            </div>
        </section>
    );
}
