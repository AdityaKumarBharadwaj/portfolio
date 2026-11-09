import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useGSAP(() => {
    // Big headline reveal (fires once, then cleans up)
    const letters = headlineRef.current?.querySelectorAll('.contact-word');
    if (letters && letters.length > 0) {
      gsap.fromTo(
        letters,
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
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

    // Red underline
    gsap.fromTo(
      '.contact-underline',
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: 'left',
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSendEmail = (e) => {
    const subject = encodeURIComponent('Portfolio Collaboration / Opportunity');
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${subject}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = mailtoUrl;
      return;
    }

    e.preventDefault();
    // Redirect directly to webmail composer in a new tab so user can send mail immediately
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const headline = ["LET'S", 'BUILD', 'SOMETHING'];
  const headline2 = ['THAT', 'MATTERS.'];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-charcoal relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(215, 25, 53, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Large decorative 07 */}
      <div
        className="absolute right-0 top-0 bottom-0 flex items-center justify-end pr-8 pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display font-bold opacity-5"
          style={{
            fontSize: 'clamp(8rem, 25vw, 25rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(243,240,232,0.1)',
          }}
        >
          07
        </span>
      </div>

      <div className="container-fluid relative">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20 md:mb-28">
          <span className="text-label text-crimson">08</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Contact</span>
        </div>

        {/* Massive headline */}
        <div ref={headlineRef} className="mb-16 md:mb-20">
          <div>
            {headline.map((word, i) => (
              <div key={word} className="overflow-hidden inline-block mr-4 md:mr-8">
                <span
                  className="contact-word font-display font-bold text-warm-white inline-block leading-none tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            {headline2.map((word, i) => (
              <div key={word} className="overflow-hidden inline-block mr-4 md:mr-8">
                <span
                  className={`contact-word font-display font-bold inline-block leading-none tracking-tight ${
                    i === 0 ? 'text-crimson' : 'text-warm-white'
                  }`}
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
                >
                  {word}
                </span>
              </div>
            ))}
            {/* Red underline */}
            <div
              className="contact-underline absolute -bottom-4 left-0 h-1 bg-crimson"
              style={{ width: '12rem' }}
            />
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start pt-8">

          {/* Left — CTA */}
          <div>
            <motion.p
              className="text-body text-sm md:text-base leading-relaxed mb-10 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8 }}
            >
              I'm actively looking for new opportunities where I can contribute, 
              learn and grow. If you have an interesting project or role, 
              I'd love to hear about it.
            </motion.p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Portfolio Collaboration / Opportunity')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSendEmail}
                className="btn-primary w-full md:w-auto justify-center md:justify-start cursor-pointer"
                aria-label="Send email via your mail client"
              >
                <Mail size={16} />
                <span>Send me an email</span>
                <ArrowRight size={16} />
              </a>
              <div className="flex items-center gap-3">
                <span className="text-muted text-xs font-mono break-all">{profile.email}</span>
                <button
                  onClick={copyEmail}
                  className="text-muted hover:text-warm-white transition-colors duration-200 flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right — Social links */}
          <div>
            <p className="text-label mb-6">Find me on</p>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={
                    link.id === 'email'
                      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Portfolio Collaboration / Opportunity')}`
                      : link.url
                  }
                  target={link.id !== 'phone' ? '_blank' : undefined}
                  rel={link.id !== 'phone' ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between p-5 border border-border hover:border-crimson/50 hover:bg-graphite group transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div>
                    <p className="font-display font-semibold text-warm-white text-sm mb-1 group-hover:text-crimson transition-colors duration-200">
                      {link.label}
                    </p>
                    <p className="text-muted text-xs">{link.handle}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-muted group-hover:text-crimson group-hover:translate-x-1 transition-all duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom yellow accent */}
        <motion.div
          className="mt-20 h-px bg-yellow"
          initial={{ width: 0 }}
          whileInView={{ width: '20%' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        />
      </div>
    </section>
  );
}
