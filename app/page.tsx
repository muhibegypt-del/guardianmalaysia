import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Plan from "@/components/Plan";
import Stakes from "@/components/Stakes";
import Gallery from "@/components/Gallery";
import ImageMarquee from "@/components/ImageMarquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImageMarquee />
        <Problem />
        <About />
        <Plan />
        <Stakes />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
