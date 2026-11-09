import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data/profile';
import { navLinks } from '../data/socialLinks';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  // High-performance scroll tracking via requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zero-reflow section tracking using IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((link) => link.href.slice(1))];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    if (href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      {/* Permanent Fixed Header Bar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] will-change-transform transform-gpu transition-all duration-300 ${
          scrolled
            ? 'bg-[#090909]/95 backdrop-blur-xl border-b border-[#303030]/80 shadow-2xl shadow-black/80 py-3.5'
            : 'bg-[#090909]/80 backdrop-blur-md border-b border-white/[0.08] py-4 md:py-5'
        }`}
        aria-label="Main navigation bar"
      >
        <div className="container-fluid flex items-center justify-between">
          {/* Brand Wordmark / Monogram */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-3 group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow"
            aria-label="Aditya Kumar — Back to top"
          >
            {/* AK Monogram Box */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#0c0c0c] border border-white/20 group-hover:border-white/60 rounded-md transition-colors duration-200 shadow-sm">
              <span className="font-display font-black text-lg tracking-tight select-none">
                <span className="text-crimson">A</span>
                <span className="text-warm-white">K</span>
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow rounded-full ring-2 ring-[#090909]" />
            </div>

            {/* ADITYA KUMAR Name */}
            <div className="hidden sm:block">
              <span className="font-display font-black text-sm md:text-base tracking-widest text-warm-white group-hover:text-crimson transition-colors duration-200 uppercase whitespace-nowrap">
                {profile.name}
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3.5 py-1.5 border-[1.5px] border-[#C0C0C0] hover:border-white bg-[#0e0e0e]/90 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(192,192,192,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full flex items-center gap-1.5 group ${
                    isActive
                      ? 'text-warm-white font-semibold'
                      : 'text-muted hover:text-warm-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {/* Active sliding pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-crimson rounded-full -z-10 shadow-lg shadow-crimson/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span
                    className={`text-[10px] font-mono transition-colors duration-200 ${
                      isActive
                        ? 'text-yellow'
                        : 'text-muted/60 group-hover:text-yellow'
                    }`}
                  >
                    {link.index}
                  </span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Resume & Quick CTA with Defined Borders) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#C0C0C0] hover:border-white bg-[#0e0e0e]/90 hover:bg-[#1a1a1a] text-warm-white font-mono text-xs tracking-wider rounded-full shadow-[0_0_18px_rgba(192,192,192,0.22),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 group"
            >
              <FileText
                size={13}
                className="text-yellow group-hover:text-warm-white transition-colors duration-200"
              />
              <span>Resume</span>
              <ArrowUpRight
                size={12}
                className="text-muted group-hover:text-warm-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
              />
            </a>

            <button
              onClick={() => handleNavClick('#contact')}
              className="relative inline-flex items-center justify-center px-5 py-2 border-[1.5px] border-[#C0C0C0] hover:border-white bg-crimson hover:bg-[#b5142b] text-warm-white font-mono text-xs tracking-wider rounded-full shadow-[0_0_20px_rgba(215,25,53,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 uppercase font-semibold"
            >
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 border-[1.5px] border-[#C0C0C0] bg-[#111] hover:border-white rounded-sm shadow-[0_0_12px_rgba(192,192,192,0.2)] transition-colors duration-200 p-2.5"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={20} className="text-crimson" />
            ) : (
              <Menu size={20} className="text-warm-white" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[95] bg-[#090909]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 lg:hidden overflow-y-auto"
          >
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-crimson via-yellow to-crimson" />

            <div className="flex flex-col space-y-6 my-auto">
              <span className="text-label text-crimson text-xs">Navigation</span>
              <ul className="space-y-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3, ease: 'easeOut' }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-baseline gap-4 py-2 text-left group"
                    >
                      <span className="font-mono text-sm text-yellow">
                        {link.index}
                      </span>
                      <span className="font-display font-bold text-3xl sm:text-4xl text-warm-white group-hover:text-crimson transition-colors duration-200">
                        {link.label}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mobile Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="pt-8 border-t border-[#303030] flex flex-col sm:flex-row gap-4"
            >
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline justify-center text-xs py-3 w-full"
                onClick={() => setMobileOpen(false)}
              >
                <FileText size={14} className="text-yellow" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary justify-center text-xs py-3 w-full"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
