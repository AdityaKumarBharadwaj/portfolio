import { useRef } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GitMerge, 
  GitPullRequest, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { openSourceContributions } from '../data/openSource';

gsap.registerPlugin(ScrollTrigger);

export default function OpenSource() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(
    () => {
      const letters = headlineRef.current?.querySelectorAll('.os-letter');
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
      id="open-source"
      className="section-padding bg-obsidian relative overflow-hidden"
      aria-label="Open Source Contributions"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 -left-48 w-[550px] h-[550px] opacity-15 pointer-events-none transform-gpu"
        style={{
          background:
            'radial-gradient(circle, rgba(215, 25, 53, 0.25) 0%, rgba(255, 212, 59, 0.08) 50%, transparent 70%)',
        }}
      />

      <div className="container-fluid relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16 md:mb-20">
          <span className="text-label text-crimson">06</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Open Source Work</span>
        </div>

        {/* Section title & Subtext */}
        <div ref={headlineRef} className="mb-14 md:mb-16 max-w-4xl">
          <h2
            className="font-display font-bold text-warm-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)' }}
          >
            {'OPEN SOURCE'.split('').map((letter, i) => (
              <span key={i} className="os-letter inline-block">
                {letter}
              </span>
            ))}
            <br />
            <span className="text-crimson">
              {'CONTRIBUTIONS.'.split('').map((letter, i) => (
                <span key={i} className="os-letter inline-block">
                  {letter}
                </span>
              ))}
            </span>
          </h2>
          <p className="text-body text-base md:text-lg leading-relaxed max-w-2xl text-text-secondary">
            Production-grade contributions merged into public community codebases — architecting
            cloud storage pipelines, optimizing server compute, and engineering resilient web interfaces.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
          {openSourceContributions.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative bg-gradient-to-b from-[#141414] via-[#101010] to-[#0a0a0a] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between group card-hover-bold transform-gpu"
            >
              {/* Luminous Silver Sheen top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#FFFFFF]" />

              <div>
                {/* Top Bar: Repository Info + Merged Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-warm-white transition-colors group/repo"
                  >
                    <Github size={15} className="text-warm-white/70 group-hover/repo:text-warm-white" />
                    <span className="truncate max-w-[200px] sm:max-w-none">{item.repo}</span>
                  </a>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-full bg-purple-950/50 text-purple-300 border border-purple-500/30 shadow-sm flex-shrink-0">
                    <GitMerge size={13} className="text-purple-400" />
                    <span>{item.status}</span>
                  </span>
                </div>

                {/* PR Title */}
                <h3 className="font-display font-bold text-warm-white text-lg sm:text-xl mb-2 leading-snug group-hover:text-warm-white transition-colors">
                  {item.title}
                </h3>

                {/* PR Number Tag */}
                <div className="mb-4">
                  <a
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-yellow bg-yellow/10 border border-yellow/25 hover:border-yellow/50 px-2.5 py-0.5 rounded transition-colors"
                  >
                    <GitPullRequest size={12} className="text-yellow" />
                    <span>Pull Request {item.prNumber}</span>
                  </a>
                </div>

                {/* Description */}
                <p className="text-body text-xs sm:text-sm leading-relaxed mb-5 text-text-secondary/90">
                  {item.description}
                </p>

                {/* Impact Highlight Box */}
                <div className="p-3.5 bg-[#161616] border-l-2 border-crimson rounded-r-lg mb-6">
                  <p className="text-xs font-mono text-warm-white/95 flex items-start gap-2">
                    <Sparkles size={13} className="text-yellow flex-shrink-0 mt-0.5" />
                    <span>{item.impact}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Section: Tech Tags & PR Action */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-mono text-[#D4D4D8] bg-[#171717] px-2.5 py-1 border border-white/15 group-hover:border-white/40 transition-colors duration-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-muted flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>Verified GitHub Merge</span>
                  </span>

                  <a
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-warm-white bg-[#191919] hover:bg-crimson btn-hover-bold rounded-lg group/link transition-all"
                    aria-label={`View Pull Request ${item.prNumber} on GitHub`}
                  >
                    <span>View Merged PR</span>
                    <ExternalLink
                      size={12}
                      className="text-[#C0C0C0] group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Global Pull Shark Banner */}
        <motion.div
          className="p-5 md:p-6 bg-gradient-to-r from-[#141414] via-[#0f0f0f] to-[#141414] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 card-hover-bold cursor-default"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 flex-shrink-0">
              <GitPullRequest size={18} />
            </div>
            <div>
              <p className="font-display font-semibold text-warm-white text-sm">
                Pull Shark · Verified Merged Contributions
              </p>
              <p className="text-muted text-xs font-mono mt-0.5">
                Active peer-reviewed pull requests merged into public open-source software repositories.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/pulls?q=is%3Apr+author%3AAdityaKumarBharadwaj+is%3Amerged+-user%3AAdityaKumarBharadwaj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#181818] text-xs font-mono text-warm-white hover:text-white hover:bg-crimson btn-hover-bold whitespace-nowrap self-start sm:self-auto transition-all"
          >
            <span>View All Merged PRs</span>
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
