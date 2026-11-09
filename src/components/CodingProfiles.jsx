import { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Trophy } from 'lucide-react';
import { codingProfiles } from '../data/codingProfiles';

import leetcodeIcon from '../assets/icons/leetcode.svg';
import gfgIcon from '../assets/icons/geeksforgeeks.svg';
import codeforcesIcon from '../assets/icons/codeforces.svg';
import codechefIcon from '../assets/icons/codechef.svg';
import atcoderIcon from '../assets/icons/atcoder.svg';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  leetcode: leetcodeIcon,
  gfg: gfgIcon,
  codeforces: codeforcesIcon,
  codechef: codechefIcon,
  atcoder: atcoderIcon,
};

// Render original platform name styling
function renderPlatformName(id, name) {
  switch (id) {
    case 'leetcode':
      return (
        <>
          Leet<span className="text-[#FFA116]">Code</span>
        </>
      );
    case 'gfg':
      return (
        <>
          Geeksfor<span className="text-[#0F9D58]">Geeks</span>
        </>
      );
    case 'codeforces':
      return (
        <>
          <span className="text-[#1F8ACB]">Code</span>
          <span className="text-[#D71935]">forces</span>
        </>
      );
    case 'codechef':
      return (
        <>
          Code<span className="text-[#B57A42]">Chef</span>
        </>
      );
    case 'atcoder':
      return (
        <>
          At<span className="text-[#6BBAEF]">Coder</span>
        </>
      );
    default:
      return name;
  }
}

export default function CodingProfiles() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(
    () => {
      const letters = headlineRef.current?.querySelectorAll('.profile-letter');
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

  return (
    <section
      ref={sectionRef}
      id="coding-profiles"
      className="section-padding bg-[#090909] relative overflow-hidden"
      aria-label="Competitive Programming and Coding Profiles"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 -left-48 w-[550px] h-[550px] opacity-15 pointer-events-none transform-gpu"
        style={{
          background:
            'radial-gradient(circle, rgba(215, 25, 53, 0.25) 0%, rgba(255, 212, 59, 0.08) 45%, transparent 70%)',
        }}
      />

      <div className="container-fluid relative z-10">
        {/* Section header index */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="text-label text-crimson">06</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Algorithmic Arenas</span>
        </div>

        {/* Section title */}
        <div ref={headlineRef} className="mb-14 md:mb-16 max-w-4xl">
          <h2
            className="font-display font-bold text-warm-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)' }}
          >
            {'CODING'.split('').map((letter, i) => (
              <span key={i} className="profile-letter inline-block">
                {letter}
              </span>
            ))}
            <br />
            <span className="text-crimson">
              {'PROFILES.'.split('').map((letter, i) => (
                <span key={i} className="profile-letter inline-block">
                  {letter}
                </span>
              ))}
            </span>
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed max-w-2xl text-text-secondary">
            Continuous problem solving, timed algorithmic contests, and competitive programming
            benchmarks across LeetCode, GeeksforGeeks, Codeforces, CodeChef, and AtCoder.
          </p>
        </div>

        {/* Coding Profiles Cards Grid - 4 Columns in one row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
          {codingProfiles.map((platform, idx) => {
            const iconSrc = iconMap[platform.id];
            const hasLink = Boolean(platform.url);
            return (
              <motion.article
                key={platform.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative bg-gradient-to-b from-[#141414] via-[#101010] to-[#0a0a0a] rounded-2xl overflow-hidden p-5 flex flex-col justify-between group card-hover-bold transform-gpu ${
                  hasLink ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Luminous Silver Sheen top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#FFFFFF]" />

                <div>
                  {/* Header: Platform Icon + Name & Badge Beside It */}
                  <div className="flex items-center gap-3.5 mb-4">
                    {/* Original Icon in Rounded Box with Thin Border, Bold on Hover */}
                    <div
                      className="relative w-13 h-13 sm:w-14 sm:h-14 p-2.5 bg-gradient-to-b from-[#1f1f1f] to-[#121212] box-hover-bold rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                      style={{
                        boxShadow: `0 0 20px ${platform.accentColor}20, inset 0 0 12px rgba(255, 255, 255, 0.05)`,
                      }}
                    >
                      <img
                        src={iconSrc}
                        alt={`${platform.name} official logo`}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                        loading="lazy"
                      />
                    </div>

                    {/* Beside the Icon: Platform Name & Badge */}
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-display font-bold text-warm-white text-lg sm:text-xl tracking-tight group-hover:text-white transition-colors duration-200 truncate">
                        {renderPlatformName(platform.id, platform.name)}
                      </h3>
                      <div>
                        <span className="inline-block text-[9px] font-mono tracking-wider text-yellow bg-yellow/10 border border-yellow/30 px-2 py-0.5 rounded-full font-semibold uppercase truncate max-w-full">
                          {platform.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Username Highlight Section */}
                  <div className="mb-5 px-3 py-2 bg-[#141414] border border-white/10 group-hover:border-white/30 rounded-xl flex items-center justify-between gap-2 shadow-inner transition-colors duration-300">
                    <span className="text-[11px] font-mono text-[#A1A1AA]">User:</span>
                    <span className="font-mono text-xs text-yellow font-semibold tracking-wide bg-[#1c1c1c] px-2 py-0.5 border border-white/20 group-hover:border-yellow/50 rounded-lg select-all truncate transition-colors duration-300">
                      @{platform.handle}
                    </span>
                  </div>
                </div>

                {/* Bottom Action Footer: Only show clickable link for LeetCode and GFG */}
                <div className="pt-3 border-t border-white/10">
                  {hasLink ? (
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold text-warm-white bg-gradient-to-r from-[#1c1c1c] to-[#141414] hover:bg-crimson hover:from-crimson hover:to-[#B3142B] btn-hover-bold rounded-xl group/btn"
                      aria-label={`Open ${platform.name} profile in new tab`}
                    >
                      <span>Open Profile</span>
                      <ExternalLink
                        size={13}
                        className="text-[#C0C0C0] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                      />
                    </a>
                  ) : (
                    <div className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono text-[#71717A] bg-[#121212]/60 border border-white/5 rounded-xl select-none cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span>Practice Arena</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Assurance Banner */}
        <motion.div
          className="mt-14 p-5 md:p-6 bg-gradient-to-r from-[#141414] via-[#0f0f0f] to-[#141414] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover-bold cursor-default"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow/10 border border-yellow/30 flex items-center justify-center text-yellow flex-shrink-0">
              <Trophy size={18} />
            </div>
            <div>
              <p className="font-display font-semibold text-warm-white text-sm">
                Continuous Algorithmic Growth &amp; Problem Solving
              </p>
              <p className="text-muted text-xs font-mono mt-0.5">
                Targeting clean mathematical proofs, optimal space-time complexities, and contest-tested execution.
              </p>
            </div>
          </div>

          <a
            href={codingProfiles[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#181818] text-xs font-mono text-yellow hover:text-white btn-hover-bold whitespace-nowrap self-start sm:self-auto"
          >
            <span>Primary Profile // LeetCode</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
