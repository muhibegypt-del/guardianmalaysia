import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Partners() {
    return (
        <>
            <Navbar />
            <main className="bg-guardian-offwhite pt-32 pb-20 sm:pt-40 sm:pb-28 min-h-screen">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-24">
                        <p className="text-sm font-bold tracking-[0.3em] text-guardian-crimson uppercase mb-4">
                            Our Network
                        </p>
                        <h1 className="text-5xl font-black tracking-tight text-guardian-black sm:text-6xl lg:text-7xl">
                            Our Partners
                        </h1>
                        <p className="mt-8 text-xl font-medium leading-relaxed text-guardian-black/60">
                            We do not fight alone. True impact requires a collective effort. We are proud to stand alongside world-class organizations that share our uncompromising standards and commitment to youth empowerment.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {/* Guardian Project */}
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
                            <div className="relative aspect-[4/3] sm:aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 overflow-hidden rounded-xl bg-white shadow-2xl flex items-center justify-center p-8 sm:p-12">
                                <Image
                                    src="/images/logo-guardian-gym.jpg"
                                    alt="Guardian Project Logo"
                                    fill
                                    unoptimized
                                    className="object-contain p-8 sm:p-12"
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
                                />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold tracking-widest text-guardian-crimson uppercase mb-4">
                                    The Parent Organization
                                </h2>
                                <h3 className="text-4xl font-black tracking-tight text-guardian-black sm:text-5xl">
                                    Guardian Project
                                </h3>
                                <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed text-guardian-black/60">
                                    <p>
                                        Founded in 2015 in Oakland, California, Guardian Project pioneered the 501(c)(3) model of providing free, elite martial arts training to youth who need it most.
                                    </p>
                                    <p>
                                        In 2020, they launched the Guardian Scholarship—a global initiative designed to scale their impact by partnering with existing academies. Guardian Malaysia exists because of this blueprint. We are honored to carry the Guardian name and bring this standard of excellence to our local community.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Fair Fight Foundation */}
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-sm font-bold tracking-widest text-guardian-crimson uppercase mb-4">
                                    Global Partner
                                </h2>
                                <h3 className="text-4xl font-black tracking-tight text-guardian-black sm:text-5xl">
                                    Fair Fight Foundation
                                </h3>
                                <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed text-guardian-black/60">
                                    <p>
                                        Launched in 2024 by the CEO of B-Team Jiu Jitsu, the Fair Fight Foundation is a 501(c)(3) organization dedicated to elevating the sport and using it as a global force for good.
                                    </p>
                                    <p>
                                        Known for organizing monumental events like the Craig Jones Invitational (CJI), they actively support charities and initiatives that provide life-changing opportunities for children in underprivileged communities worldwide. Their backing amplifies our reach and impact.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative aspect-[4/3] sm:aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto lg:ml-auto overflow-hidden rounded-xl bg-guardian-black shadow-2xl flex items-center justify-center p-8 sm:p-12">
                                <Image
                                    src="/images/logo-fair-fight.jpg"
                                    alt="Fair Fight Foundation Logo"
                                    fill
                                    unoptimized
                                    className="object-contain p-8 sm:p-12"
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
                                />
                            </div>
                        </div>

                        {/* AJJFP */}
                        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
                            <div className="relative aspect-[4/3] sm:aspect-square w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 overflow-hidden rounded-xl bg-guardian-black shadow-2xl flex items-center justify-center p-8 sm:p-12">
                                <Image
                                    src="/images/logo-ajjfp.png"
                                    alt="AJJFP Australian Jiu-Jitsu Futures Program Logo"
                                    fill
                                    unoptimized
                                    className="object-contain p-8 sm:p-12"
                                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
                                />
                            </div>
                            <div>
                                <h2 className="text-sm font-bold tracking-widest text-guardian-crimson uppercase mb-4">
                                    Development Partner
                                </h2>
                                <h3 className="text-4xl font-black tracking-tight text-guardian-black sm:text-5xl">
                                    AJJFP
                                </h3>
                                <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed text-guardian-black/60">
                                    <p>
                                        The Australian Jiu-Jitsu Futures Program (AJJFP) is dedicated to cultivating the next generation of jiu jitsu athletes. Through youth development camps led by world-class coaches and world champions, AJJFP provides young athletes with elite-level training, mentorship, and the tools to reach their full potential both on and off the mats.
                                    </p>
                                    <p>
                                        Their partnership amplifies our mission by connecting Guardian Malaysia scholars with a global pathway for growth, discipline, and athletic excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <CTA />
            <Footer />
        </>
    );
}
