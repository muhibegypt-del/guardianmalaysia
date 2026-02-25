"use client";

import Image from "next/image";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Problem() {
    const ref = useFadeIn();

    return (
        <section id="problem" className="bg-guardian-offwhite py-20 sm:py-28">
            <div
                ref={ref}
                className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
                {/* Image (Left on desktop, Top on mobile) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src="/images/gallery-7.jpg"
                        alt="Candid photo of kids"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Text (Right) */}
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
                        The Problem
                    </p>
                    <h2 className="text-3xl font-black tracking-tight text-guardian-black sm:text-4xl mb-6">
                        The barrier to entry is too high
                    </h2>
                    <p className="text-lg text-guardian-black/70 leading-[1.7] font-medium">
                        In Malaysia, hundreds of kids, including those in care homes, are locked out of martial arts training simply because they cannot afford it. They do not just miss out on jiu jitsu. They miss out on community, mentorship, and a place where someone shows up for them consistently.
                    </p>
                </div>
            </div>
        </section>
    );
}
