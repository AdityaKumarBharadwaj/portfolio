import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Ultra-smooth, responsive Lenis scroll configuration
    const lenis = new Lenis({
      lerp: 0.14, // Snappy, instantaneous response with natural momentum
      wheelMultiplier: 1.1,
      touchMultiplier: 1.0,
      syncTouch: false, // Maintain native 120Hz touch scrolling on mobile/trackpad
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    // Disable GSAP lag smoothing to prevent tick jitter with Lenis
    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => setIsLoaded(true), 50);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative bg-obsidian text-warm-white overflow-x-clip">
      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Marquee speed={28} />
        <About />
        <Projects />
        <Marquee speed={22} reverse />
        <Expertise />
        <Certifications />
        <CodingProfiles />
        <OpenSource />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
