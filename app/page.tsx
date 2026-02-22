import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ImageMarquee from "@/components/ImageMarquee";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ImageMarquee />
        <Mission />
        <About />
        <Gallery />
        <CTA />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
