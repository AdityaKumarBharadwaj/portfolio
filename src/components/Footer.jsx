import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';
import { navLinks, socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-border" role="contentinfo">
      <div className="container-fluid py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">

          {/* Wordmark + tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              {/* AK Monogram Box */}
              <div className="relative flex items-center justify-center w-10 h-10 bg-[#0c0c0c] border border-white/20 rounded-md">
                <span className="font-display font-black text-lg tracking-tight select-none">
                  <span className="text-crimson">A</span>
                  <span className="text-warm-white">K</span>
                </span>
              </div>

              {/* ADITYA KUMAR Name */}
              <div>
                <span className="font-display font-black text-base md:text-lg text-warm-white tracking-wider uppercase whitespace-nowrap">
                  {profile.name}
                </span>
              </div>
            </div>
            <p className="text-body text-sm max-w-xs mb-6">
              Software Engineer & Full-Stack Developer based in {profile.location}.
            </p>
            {/* Availability */}
            {profile.availabilityStatus && (
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-label text-xs">{profile.availability}</span>
              </div>
            )}
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <p className="text-label mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted text-sm hover:text-warm-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="text-label mb-5">Connect</p>
            <ul className="space-y-3">
              {socialLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target={link.id !== 'email' && link.id !== 'phone' ? '_blank' : undefined}
                    rel={link.id !== 'email' && link.id !== 'phone' ? 'noopener noreferrer' : undefined}
                    className="text-muted text-sm hover:text-crimson transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="flex flex-col items-center gap-2 group"
              aria-label="Back to top"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson/10 transition-all duration-300">
                <ArrowUp size={16} className="text-muted group-hover:text-crimson transition-colors duration-200" />
              </div>
              <span className="text-label text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <p className="text-label text-xs">
              © {profile.copyrightYear} {profile.name}. All rights reserved.
            </p>
            <span className="hidden md:block text-border">|</span>
            <p className="text-label text-xs">
              Designed & built with React, Tailwind CSS, GSAP & Motion
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-crimson rounded-full" />
            <p className="text-label text-xs">{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
