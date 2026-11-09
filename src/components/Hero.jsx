import { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { profile } from '../data/profile';
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import SunEffect from './SunEffect';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const bgRef = useRef(null);
  const redLineRef = useRef(null);
  const metaRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    // 1. Background reveal from bottom
    tl.fromTo(bgRef.current,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power4.inOut',
      }
    );

    // 2. Red accent line left-to-right
    tl.from(redLineRef.current, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');

    // 3. Hero letters stagger up
    const letters = titleRef.current.querySelectorAll('.hero-letter');
    tl.from(letters, {
      y: '110%',
      opacity: 0,
      skewY: 6,
      duration: 1.1,
      stagger: { amount: 0.4 },
      ease: 'power4.out',
    }, '-=0.3');

    // 4. Subtitle
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');
    }

    // 5. Meta
    if (metaRef.current?.children) {
      tl.from(metaRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      }, '-=0.5');
    }

    // 6. CTA
    if (ctaRef.current?.children) {
      tl.from(ctaRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.4');
    }

    // 7. Scroll indicator
    tl.from(scrollIndicatorRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3');

    // Floating scroll indicator loop
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.8,
    });

  }, { scope: heroRef });

  const firstName = 'ADITYA';
  const lastName = 'KUMAR';

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layer */}
      <div ref={bgRef} className="absolute inset-0 bg-obsidian">
        {/* ☀ ADITYA = "THE SUN" — Authentic Sunrise in Space */}
        <SunEffect />
        {/* Very subtle grid over the canvas for the editorial feel */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(243,240,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,232,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Top location tag */}
      <div className="container-fluid relative z-10">
        <div
          ref={metaRef}
          className="flex items-center justify-start pt-2"
        >
          <div className="flex items-center gap-2 text-label">
            <MapPin size={12} className="text-crimson flex-shrink-0" />
            <span className="font-mono text-warm-white/80">{profile.location}</span>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative container-fluid z-10 flex-1 flex flex-col justify-end pt-6 md:pt-10">

        {/* Red accent line + Role label */}
        <div className="flex flex-col gap-3 mb-6 md:mb-8">
          <div ref={redLineRef} className="origin-left">
            <div className="w-16 md:w-24 h-px bg-crimson" />
          </div>

          <div ref={subtitleRef} className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="text-label tracking-[0.22em] text-warm-white">
              Software Engineer
            </span>
            <span className="text-crimson font-bold text-xs">·</span>
            <span className="text-label tracking-[0.22em] text-warm-white">
              Full-Stack Developer
            </span>
            <span className="text-crimson font-bold text-xs">·</span>
            <span className="text-label tracking-[0.22em] text-warm-white">
              Cloud Computing
            </span>
            <span className="text-crimson font-bold text-xs">·</span>
            <span className="text-label tracking-[0.22em] text-warm-white">
              Machine Learning
            </span>
          </div>
        </div>

        {/* MASSIVE display name with Metallic Silver Border Outline */}
        <div ref={titleRef} className="mb-8 md:mb-12 select-none relative inline-block">
          {/* First name row — ADITYA */}
          <div className="overflow-hidden leading-[0.86]">
            <div
              className="font-display font-black tracking-tighter text-warm-white"
              style={{
                fontSize: 'clamp(4.2rem, 15vw, 15rem)',
                lineHeight: '0.86',
                fontWeight: 900,
              }}
            >
              {firstName.split('').map((letter, i) => (
                <span
                  key={`fn-${i}`}
                  className="hero-letter inline-block"
                  style={{
                    WebkitTextStroke: '2.5px #E2E8F0',
                    filter: 'drop-shadow(0 0 25px rgba(226, 232, 240, 0.35))',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Last name row — K is red */}
          <div className="overflow-hidden leading-[0.86]">
            <div
              className="font-display font-black tracking-tighter"
              style={{
                fontSize: 'clamp(4.2rem, 15vw, 15rem)',
                lineHeight: '0.86',
                fontWeight: 900,
              }}
            >
              {lastName.split('').map((letter, i) => (
                <span
                  key={`ln-${i}`}
                  className={`hero-letter inline-block ${i === 0 ? 'text-crimson' : 'text-warm-white'}`}
                  style={{
                    WebkitTextStroke: i === 0 ? '2.5px #FF2E4D' : '2.5px #E2E8F0',
                    filter:
                      i === 0
                        ? 'drop-shadow(0 0 30px rgba(215, 25, 53, 0.55))'
                        : 'drop-shadow(0 0 25px rgba(226, 232, 240, 0.35))',
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Luminous Liquid Silver Border Accent Line */}
          <div className="mt-3 w-full max-w-sm h-[2px] bg-gradient-to-r from-crimson via-[#FFFFFF] to-transparent shadow-[0_0_15px_#FFFFFF]" />
        </div>

        {/* Bottom two-column zone */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-20">

          {/* Bio text */}
          <div className="max-w-sm">
            <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
              Building elegant, performant software at the intersection of{' '}
              <span className="text-warm-white">technical excellence</span> and{' '}
              <span className="text-crimson">creative execution.</span>
            </p>
            <p className="text-label text-xs">
              B.Tech CSE &nbsp;·&nbsp; VIT Bhopal &nbsp;·&nbsp; CGPA {profile.education.cgpa}
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() =>
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Selected Work</span>
              <ArrowRight size={15} />
            </motion.button>
            <motion.button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Get In Touch</span>
            </motion.button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute -bottom-6 md:-bottom-8 right-0 flex flex-col items-center gap-3"
        >
          <div
            className="text-label text-xs"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.15em' }}
          >
            scroll
          </div>
          <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>

      {/* Bottom edge yellow line — animated in */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-yellow"
        initial={{ width: 0 }}
        animate={{ width: '25%' }}
        transition={{ duration: 1.4, delay: 2.4, ease: [0.19, 1, 0.22, 1] }}
      />

      {/* Section index — bottom left */}
      <div className="absolute bottom-6 left-6 md:left-16 xl:left-24 select-none">
        <span className="text-label opacity-20 font-mono">01 / 08</span>
      </div>

      {/* Vertical tagline — far right, desktop only */}
      <div
        className="hidden xl:flex absolute right-6 bottom-32 items-center gap-3 text-label opacity-30"
        style={{ writingMode: 'vertical-rl' }}
      >
        {profile.location}
      </div>
    </section>
  );
}
