import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="grain relative">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
