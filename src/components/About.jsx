import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../data/profile';
import {
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function AnimatedLine({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(
    () => {
      // Image reveal on scroll (fires once)
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Stats counter animation (fires once)
      const statEls = statsRef.current?.querySelectorAll('.stat-number');
      if (statEls && statEls.length > 0) {
        statEls.forEach((el) => {
          const target = parseFloat(el.dataset.target);
          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.8,
              ease: 'power2.out',
              snap: { textContent: target % 1 === 0 ? 1 : 0.01 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 85%',
                once: true,
              },
              onUpdate: function () {
                const val = parseFloat(this.targets()[0].textContent);
                if (target % 1 !== 0) {
                  this.targets()[0].textContent = val.toFixed(2);
                } else {
                  this.targets()[0].textContent = Math.round(val);
                }
              },
            }
          );
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-charcoal relative overflow-hidden"
      aria-label="About Aditya Kumar"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-px h-full opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #D71935, transparent)',
        }}
      />

      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16 md:mb-24">
          <span className="text-label text-crimson">02</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">About Me</span>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column — Clean Editorial Paragraphs */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-body text-base md:text-lg leading-relaxed text-text-secondary">
            {/* Large headline */}
            <div className="mb-6">
              <AnimatedLine delay={0}>
                <h2
                  className="font-display font-bold text-warm-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                >
                  Engineering
                </h2>
              </AnimatedLine>
              <AnimatedLine delay={0.08}>
                <h2
                  className="font-display font-bold text-crimson leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                >
                  with intent.
                </h2>
              </AnimatedLine>
            </div>

            {/* Paragraph 1: Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5 }}
            >
              Hey, I'm <span className="text-warm-white font-semibold">Aditya Kumar</span>, a Computer Science and Engineering undergraduate at{' '}
              <span className="text-warm-white font-semibold">VIT Bhopal University</span>, specializing in{' '}
              <span className="text-yellow font-medium">Cloud Computing and Automation</span>.
            </motion.p>

            {/* Paragraph 2: Technical Interests & Stack */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              My technical interests span <span className="text-warm-white font-medium">Full-Stack Web Development</span>,{' '}
              <span className="text-warm-white font-medium">Machine Learning</span>, and{' '}
              <span className="text-warm-white font-medium">Cloud Computing</span>. I work with technologies including{' '}
              <span className="text-warm-white font-medium">
                C++, JavaScript, React.js, Node.js, Express.js, MongoDB, Python, and SQL
              </span>
              . I also spend time working on{' '}
              <span className="text-warm-white font-medium">Data Structures and Algorithms</span> to strengthen my programming and problem-solving skills.
            </motion.p>

            {/* Paragraph 3: Community & Certifications */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              I'm actively involved in the developer community and regularly contribute to open-source software, architecting cloud integrations and building user-facing features for collaborative codebases. I have also pursued certifications and technical learning in areas such as{' '}
              <span className="text-yellow font-medium">AWS</span>, programming, and software development.
            </motion.p>

            {/* Paragraph 4: Schooling & Background */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              Before university, I completed my schooling at{' '}
              <span className="text-warm-white font-medium">Surendranath Centenary School</span>. My academic journey has given me a foundation in computer science, while my interests outside academics include competitive cricket, which has been an important part of my life.
            </motion.p>

            {/* Paragraph 5: Current Expansion */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              I'm currently expanding my knowledge of software engineering, machine learning, and cloud technologies while continuing to improve as a developer.
            </motion.p>

            {/* Subtle Divider */}
            <div className="pt-4 pb-2">
              <div className="h-px bg-gradient-to-r from-crimson/50 via-[#303030] to-transparent" />
            </div>

            {/* Subsection: Beyond Technology */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="space-y-4 pt-2"
            >
              <h3 className="font-display font-bold text-warm-white text-2xl md:text-3xl flex items-center gap-2.5">
                <span className="text-crimson">#</span>
                <span>Beyond Technology</span>
              </h3>

              <p>
                Outside the technical world, cricket has been a significant part of my life. I've represented my school in{' '}
                <span className="text-warm-white font-semibold">U-16, U-17, and U-19 inter-school tournaments</span> and competed at higher levels of the game. Some of my match-winning performances have also received recognition in print newspapers.
              </p>

              <p>
                Playing competitive cricket has taught me to handle pressure, take responsibility, work with a team, and stay consistent over long periods. These experiences have shaped the way I approach challenges, both on the cricket field and while working on technical problems.
              </p>

              <p className="text-warm-white/95 italic border-l-2 border-crimson pl-4 py-2 text-base md:text-lg bg-crimson/[0.04] rounded-r">
                "Whether it's a long innings or a debugging session at 2 AM, I enjoy the process of figuring things out and seeing them through."
              </p>
            </motion.div>
          </div>

          {/* Right Column — Portrait, Stats & Education */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
            {/* Portrait container */}
            <div
              ref={imageRef}
              className="relative max-w-[310px] sm:max-w-[350px] aspect-[4/5] mx-auto bg-graphite overflow-hidden border border-[#303030] group shadow-2xl rounded-xl"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            >
              {/* Actual Portrait Image */}
              <img
                src="/portrait.jpg"
                alt="Aditya Kumar — Software Engineer"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  if (e.target.src.indexOf('aditya-portrait.jpg') === -1) {
                    e.target.src = '/aditya-portrait.jpg';
                  } else {
                    e.target.style.display = 'none';
                  }
                }}
              />

              {/* Cinematic Vignette & Bottom Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(9,9,9,0.95) 0%, rgba(9,9,9,0.35) 45%, transparent 70%)',
                }}
              />

              {/* Decorative initial behind/overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ fontSize: '13rem', lineHeight: 1 }}
              >
                <span
                  className="font-display font-bold leading-none select-none opacity-10 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(215, 25, 53, 0.4)',
                  }}
                >
                  AK
                </span>
              </div>

              {/* Red corner accents (top right) */}
              <div className="absolute top-0 right-0 w-12 h-1 bg-crimson" />
              <div className="absolute top-0 right-0 w-1 h-12 bg-crimson" />

              {/* Yellow micro-bracket (bottom left) */}
              <div className="absolute bottom-0 left-0 w-6 h-1 bg-yellow" />
              <div className="absolute bottom-0 left-0 w-1 h-6 bg-yellow" />

              {/* Badge & Metadata at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-yellow uppercase block mb-0.5">
                    ENGINEERING PROFILE
                  </span>
                  <p className="font-display font-bold text-warm-white text-base">Aditya Kumar</p>
                  <p className="text-muted text-[11px] font-mono">
                    VIT Bhopal University &nbsp;·&nbsp; CSE
                  </p>
                </div>
                <div className="text-right font-mono text-[10px] text-muted">
                  <span className="text-crimson font-bold block text-xs">CGPA</span> 8.79 / 10
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-px bg-border">
              {[
                { label: 'CGPA', value: '8.79', suffix: '/10' },
                { label: 'AWS Valid Through', value: '2026', suffix: '' },
                { label: 'Open Source', value: '2', suffix: '+' },
                { label: 'Coding Platforms', value: '5', suffix: '' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-charcoal p-5 hover:bg-graphite transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-1">
                    <span
                      className="stat-number font-display font-bold text-xl md:text-2xl text-crimson"
                      data-target={parseFloat(stat.value) || 0}
                    >
                      {stat.value}
                    </span>
                    <span className="text-muted text-xs font-mono">{stat.suffix}</span>
                  </div>
                  <p className="text-label text-[11px] mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              className="bg-[#141414] p-6 border-l-2 border-crimson border-y border-r border-[#303030] rounded-r-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-label mb-3 text-crimson font-mono">
                <GraduationCap size={15} />
                <span>Formal Education</span>
              </div>

              {/* College / University Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-display font-bold text-warm-white text-base">
                    {profile.education.degree}
                  </h4>
                  <span className="text-[10px] font-mono text-yellow bg-yellow/10 border border-yellow/30 px-2 py-0.5 rounded font-semibold uppercase">
                    College
                  </span>
                </div>
                <p className="text-muted text-xs font-mono mb-2">
                  <span className="text-warm-white font-medium">{profile.education.university}</span> &nbsp;·&nbsp; {profile.education.year}
                </p>
                <p className="text-body text-xs text-muted/90 leading-relaxed">
                  Specializing in <span className="text-warm-white font-medium">Cloud Computing &amp; Automation</span>, with deep focus on Data Structures &amp; Algorithms and Machine Learning.
                </p>
              </div>

              {/* Schooling Section */}
              {profile.education.school && (
                <div className="pt-3 border-t border-[#252525]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h5 className="font-display font-semibold text-warm-white text-sm">
                      {profile.education.school}
                    </h5>
                    <span className="text-[10px] font-mono text-muted bg-[#1c1c1c] border border-border px-2 py-0.5 rounded uppercase">
                      Schooling
                    </span>
                  </div>
                  <p className="text-muted text-xs font-mono">
                    High School &amp; Secondary Education
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
