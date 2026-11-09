import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  FileCheck,
} from 'lucide-react';
import { visibleCertifications } from '../data/certifications';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  'All Credentials',
  'Cloud Architecture',
  'Machine Learning',
  'Artificial Intelligence',
  'Computer Science Core',
];

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All Credentials');
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(
    () => {
      const letters = headlineRef.current?.querySelectorAll('.cert-letter');
      if (letters && letters.length > 0) {
        gsap.fromTo(
          letters,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const filteredCerts =
    activeFilter === 'All Credentials'
      ? visibleCertifications
      : visibleCertifications.filter(
          (c) =>
            c.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            activeFilter.toLowerCase().includes(c.category.toLowerCase())
        );

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section-padding bg-[#090909] relative overflow-hidden"
      aria-label="Certifications and Credentials"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 -right-48 w-[600px] h-[600px] opacity-15 pointer-events-none transform-gpu"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 212, 59, 0.25) 0%, rgba(215, 25, 53, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className="container-fluid relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="text-label text-crimson">05</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Verified Certifications</span>
        </div>

        {/* Section title & Subtext */}
        <div ref={headlineRef} className="mb-14 md:mb-16 max-w-4xl">
          <h2
            className="font-display font-bold text-warm-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)' }}
          >
            {'VALIDATED'.split('').map((letter, i) => (
              <span key={i} className="cert-letter inline-block">
                {letter}
              </span>
            ))}
            <br />
            <span className="text-crimson">
              {'CREDENTIALS.'.split('').map((letter, i) => (
                <span key={i} className="cert-letter inline-block">
                  {letter}
                </span>
              ))}
            </span>
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed max-w-2xl text-text-secondary">
            Industry-recognized cloud architecture, machine learning engineering, and distributed
            systems credentials officially verified through Amazon Web Services and IIT/NPTEL.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((category) => {
            const count =
              category === 'All Credentials'
                ? visibleCertifications.length
                : visibleCertifications.filter(
                    (c) =>
                      c.category.toLowerCase().includes(category.toLowerCase()) ||
                      category.toLowerCase().includes(c.category.toLowerCase())
                  ).length;

            if (count === 0 && category !== 'All Credentials') return null;

            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 font-mono text-xs tracking-wider transition-all duration-300 rounded-xl flex items-center gap-2 ${
                  isActive
                    ? 'border border-crimson bg-[#181818] text-warm-white shadow-[0_0_0_1.5px_#D71935,0_0_15px_rgba(215,25,53,0.35)]'
                    : 'border border-white/15 bg-[#111] text-muted hover:text-warm-white hover:border-white hover:shadow-[0_0_0_1px_#ffffff,0_0_12px_rgba(255,255,255,0.2)]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-crimson text-warm-white' : 'bg-[#1e1e1e] text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.article
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="relative bg-gradient-to-b from-[#141414] via-[#101010] to-[#0a0a0a] rounded-2xl overflow-hidden p-5 md:p-6 flex flex-col justify-between group card-hover-bold transform-gpu cursor-pointer"
              >
                {/* Luminous Silver Sheen top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#FFFFFF]" />

                {/* Subtle Background Watermark Number */}
                <div
                  className="absolute top-3 right-4 text-3xl md:text-4xl font-display font-bold select-none pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(243, 240, 232, 0.6)',
                  }}
                >
                  {cert.index}
                </div>

                <div>
                  {/* Top Badge & Issuer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4 md:mb-5">
                    {/* Badge Spotlight Box with Thin Border, Bold on Hover */}
                    <div className="relative p-2 bg-gradient-to-b from-[#1c1c1c] to-[#121212] box-hover-bold rounded-xl overflow-hidden w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
                      {/* Radial glow behind badge */}
                      <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle, rgba(215, 25, 53, 0.4) 0%, transparent 70%)',
                        }}
                      />
                      <img
                        src={cert.badge}
                        alt={`${cert.title} badge`}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata Header Pills */}
                    <div className="flex flex-col items-end gap-1.5 text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] md:text-[10px] font-mono tracking-widest text-yellow bg-yellow/10 border border-yellow/25 uppercase font-semibold rounded-full">
                        <ShieldCheck size={10} />
                        {cert.issuerCode}
                      </span>

                      <span className="text-[10px] md:text-[11px] font-mono text-[#E2E8F0] bg-[#161616] px-2 py-0.5 border border-white/15 shadow-sm rounded-md">
                        {cert.validity}
                      </span>
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="font-display font-bold text-warm-white text-base md:text-lg mb-1.5 leading-snug group-hover:text-warm-white transition-colors duration-200">
                    {cert.title}
                  </h3>

                  {/* Issuer Subtitle */}
                  <p className="text-muted text-[11px] font-mono mb-2.5 flex items-center gap-1.5">
                    <span className="text-crimson">ISSUER:</span>
                    <span className="text-warm-white font-medium">{cert.issuer}</span>
                  </p>

                  {/* Description */}
                  <p className="text-body text-xs leading-relaxed mb-4 text-text-secondary/85 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Section: Skills & Certificate CTA */}
                <div className="pt-3.5 border-t border-white/10">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono text-[#D4D4D8] bg-[#171717] px-2 py-0.5 border border-white/15 group-hover:border-white/40 transition-colors duration-200 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1 text-[10px] md:text-[11px] font-mono text-emerald-400 font-medium">
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span>Official Credential</span>
                    </div>

                    {cert.certificatePdf && (
                      <a
                        href={cert.certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono text-warm-white bg-[#191919] hover:bg-crimson btn-hover-bold rounded-lg group/btn"
                        aria-label={`View official certificate for ${cert.title}`}
                      >
                        <FileCheck size={12} className="text-yellow group-hover/btn:text-white" />
                        <span>Certificate</span>
                        <ExternalLink
                          size={11}
                          className="text-[#C0C0C0] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Verification Assurance Banner */}
        <motion.div
          className="mt-14 p-5 md:p-6 bg-gradient-to-r from-[#141414] via-[#0f0f0f] to-[#141414] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover-bold cursor-default"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow/10 border border-yellow/30 flex items-center justify-center text-yellow flex-shrink-0">
              <Award size={18} />
            </div>
            <div>
              <p className="font-display font-semibold text-warm-white text-sm">
                100% Authenticated Credentials &amp; Examination Records
              </p>
              <p className="text-muted text-xs font-mono mt-0.5">
                All credentials verified through Amazon Web Services (AWS) and NPTEL IIT examination portals.
              </p>
            </div>
          </div>

          <a
            href="https://aws.amazon.com/verification"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181818] text-xs font-mono text-yellow hover:text-white btn-hover-bold whitespace-nowrap self-start sm:self-auto"
          >
            <span>AWS Verification Portal</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
