import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { journeyItems, journeyTypeColors } from '../data/journey';

gsap.registerPlugin(ScrollTrigger);

function JourneyItem({ item, index }) {
  const itemRef = useRef(null);
  const inView = useInView(itemRef, { once: true, margin: '-15%' });
  const isEven = index % 2 === 0;

  return (
    <div ref={itemRef} className="relative grid grid-cols-1 md:grid-cols-11 gap-0 items-start">

      {/* Left side — desktop */}
      <div className={`hidden md:block md:col-span-5 ${isEven ? 'pr-12 text-right' : 'order-last pl-12 text-left'}`}>
        {isEven ? (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-3 flex-row-reverse">
              <span
                className="text-label text-xs"
                style={{ color: journeyTypeColors[item.type] }}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              <span className="text-label">{item.year}</span>
            </div>
            <h3 className="font-display font-bold text-warm-white text-lg mb-1">{item.title}</h3>
            <p className="text-muted text-xs mb-3 font-mono">{item.subtitle}</p>
            <p className="text-body text-xs leading-relaxed max-w-sm ml-auto">{item.description}</p>
            {item.highlight && (
              <div className="mt-3 inline-block bg-crimson/10 border border-crimson/20 px-3 py-1">
                <span className="text-crimson text-xs font-mono">{item.highlight}</span>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2 justify-end">
              {item.tags.map(tag => (
                <span key={tag} className="text-label text-xs border border-border/50 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ) : null}
        {!isEven ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="text-label">{item.year}</span>
              <span
                className="text-label text-xs"
                style={{ color: journeyTypeColors[item.type] }}
              >
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
            <h3 className="font-display font-bold text-warm-white text-lg mb-1">{item.title}</h3>
            <p className="text-muted text-xs mb-3 font-mono">{item.subtitle}</p>
            <p className="text-body text-xs leading-relaxed max-w-sm">{item.description}</p>
            {item.highlight && (
              <div className="mt-3 inline-block bg-crimson/10 border border-crimson/20 px-3 py-1">
                <span className="text-crimson text-xs font-mono">{item.highlight}</span>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="text-label text-xs border border-border/50 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>

      {/* Center — Timeline spine */}
      <div className="hidden md:flex md:col-span-1 flex-col items-center">
        {/* Dot */}
        <motion.div
          className="relative z-10 w-3 h-3 rounded-full border-2 flex-shrink-0"
          style={{ borderColor: journeyTypeColors[item.type] || '#D71935' }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: 'back.out' }}
        >
          <div
            className="absolute inset-0.5 rounded-full"
            style={{ backgroundColor: journeyTypeColors[item.type] || '#D71935', opacity: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden col-span-1 pl-6 border-l-2 border-border">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-label">{item.year}</span>
          <span
            className="text-label text-xs"
            style={{ color: journeyTypeColors[item.type] }}
          >
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
        </div>
        <h3 className="font-display font-bold text-warm-white text-base mb-1">{item.title}</h3>
        <p className="text-muted text-xs mb-3 font-mono">{item.subtitle}</p>
        <p className="text-body text-xs leading-relaxed mb-4">{item.description}</p>
        {item.highlight && (
          <div className="mb-3 inline-block bg-crimson/10 border border-crimson/20 px-3 py-1">
            <span className="text-crimson text-xs font-mono">{item.highlight}</span>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="text-label text-xs border border-border/50 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    // Animate the timeline spine (fires once, then cleans up)
    gsap.fromTo(
      '.timeline-spine',
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top',
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="section-padding bg-obsidian relative overflow-hidden"
      aria-label="Journey and timeline"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F3F0E8 0px, #F3F0E8 1px, transparent 1px, transparent 50%)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20 md:mb-28">
          <span className="text-label text-crimson">07</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Journey</span>
        </div>

        {/* Title */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <h2
            className="font-display font-bold text-warm-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Building,
            <br />
            <span className="text-crimson">learning,</span>
            <br />
            growing.
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-sm">
            A timeline of milestones, projects and moments that have shaped 
            my growth as an engineer and developer.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Desktop spine */}
          <div
            className="timeline-spine hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            style={{ transformOrigin: 'top' }}
          />

          {/* Items */}
          <div className="space-y-16 md:space-y-20">
            {journeyItems.map((item, index) => (
              <JourneyItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
