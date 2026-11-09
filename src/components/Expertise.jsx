import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillCategories, levelColors } from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

function SkillTag({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-default"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.19, 1, 0.22, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative border px-4 py-3 md:px-5 md:py-3.5 transition-all duration-300 ${
          hovered ? 'border-crimson/60 bg-graphite' : 'border-border'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <span className={`font-display font-semibold text-sm transition-colors duration-200 ${hovered ? 'text-warm-white' : 'text-muted'}`}>
            {skill.name}
          </span>
          <span
            className="text-label text-xs flex-shrink-0 transition-opacity duration-200"
            style={{ color: levelColors[skill.level], opacity: hovered ? 1 : 0.6 }}
          >
            {skill.level}
          </span>
        </div>

        {/* Hover note */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={hovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <p className="text-muted text-xs mt-2 font-mono">{skill.note}</p>
        </motion.div>

        {/* Left accent bar */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-crimson"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    const letters = headlineRef.current?.querySelectorAll('.expertise-word');
    if (letters && letters.length > 0) {
      gsap.fromTo(
        letters,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }
  }, { scope: sectionRef });

  const activeSkills = skillCategories.find(c => c.id === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="section-padding bg-charcoal relative overflow-hidden"
      aria-label="Technical expertise"
    >
      {/* Background vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-warm-white"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
          />
        ))}
      </div>

      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20 md:mb-28">
          <span className="text-label text-crimson">04</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Expertise</span>
        </div>

        {/* Large headline */}
        <div ref={headlineRef} className="mb-20 md:mb-28">
          <div className="overflow-hidden">
            <h2
              className="font-display font-bold text-warm-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 10vw, 10rem)' }}
            >
              {'TECH'.split('').map((letter, i) => (
                <span key={i} className="expertise-word inline-block">{letter}</span>
              ))}
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2
              className="font-display font-bold leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 10vw, 10rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(243,240,232,0.2)',
              }}
            >
              {'STACK'.split('').map((letter, i) => (
                <span key={i} className="expertise-word inline-block">{letter}</span>
              ))}
            </h2>
          </div>
        </div>

        {/* Category tabs + skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Category nav */}
          <div className="lg:col-span-3">
            <p className="text-label mb-6">Categories</p>
            <nav className="space-y-1" aria-label="Skill categories">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left flex items-center justify-between py-3 px-4 border-l-2 transition-all duration-200 group ${
                    activeCategory === category.id
                      ? 'border-crimson bg-graphite text-warm-white'
                      : 'border-transparent text-muted hover:text-warm-white hover:border-border'
                  }`}
                  aria-pressed={activeCategory === category.id}
                >
                  <span className="font-display font-medium text-sm">{category.label}</span>
                  <span className="text-label text-xs">{category.skills.length}</span>
                </button>
              ))}
            </nav>

            {/* Legend */}
            <div className="mt-10 space-y-2">
              <p className="text-label mb-3">Proficiency</p>
              {Object.entries(levelColors).map(([level, color]) => (
                <div key={level} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-label text-xs">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {/* Category headline */}
              <div className="mb-8">
                <h3 className="font-display font-bold text-warm-white text-2xl md:text-3xl mb-2">
                  {activeSkills.label}
                </h3>
                <p className="text-muted text-sm">{activeSkills.description}</p>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSkills.skills.map((skill, i) => (
                  <SkillTag key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>

            {/* All skills strip */}
            <div className="mt-16 pt-10 border-t border-border">
              <p className="text-label mb-6">All Technologies</p>
              <div className="flex flex-wrap gap-2">
                {skillCategories.flatMap(c => c.skills).map((skill, i) => (
                  <motion.span
                    key={`${skill.name}-${i}`}
                    className="text-label text-xs border border-border/50 px-3 py-1.5 hover:border-crimson/40 hover:text-warm-white transition-all duration-200 cursor-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03, duration: 0.4 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
