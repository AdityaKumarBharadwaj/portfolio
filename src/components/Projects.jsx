import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  Github, 
  X, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ImageIcon 
} from 'lucide-react';
import { visibleProjects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

function ProjectSlider({ screenshots, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!screenshots || screenshots.length === 0) return null;

  const current = screenshots[currentIndex];
  const total = screenshots.length;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goToSlide = (idx) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, total]);

  return (
    <div className="mb-8 select-none">
      {/* Main Image Slider Viewport */}
      <div className="relative aspect-[16/10] bg-[#0a0a0d] border border-border/80 rounded-xl overflow-hidden flex items-center justify-center group/slider shadow-2xl">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 35 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -35 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full flex items-center justify-center p-3 sm:p-5"
          >
            <img
              src={current.url}
              alt={current.title || `${projectTitle} screenshot ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain filter drop-shadow-2xl rounded-md pointer-events-none"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter Badge */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-obsidian/85 backdrop-blur-md border border-border/80 px-3 py-1.5 rounded-full text-xs font-mono text-warm-white shadow-lg">
          <ImageIcon size={13} className="text-crimson" />
          <span>
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Navigation Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-obsidian/85 backdrop-blur-md border border-border/80 text-warm-white hover:text-white hover:bg-crimson hover:border-crimson flex items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover/slider:opacity-100 hover:scale-110 focus:outline-none"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-obsidian/85 backdrop-blur-md border border-border/80 text-warm-white hover:text-white hover:bg-crimson hover:border-crimson flex items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover/slider:opacity-100 hover:scale-110 focus:outline-none"
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1a1a20] z-20">
          <motion.div
            className="h-full bg-crimson"
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Caption & Description Bar */}
      <div className="mt-3.5 px-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-4">
        <div>
          <h4 className="font-display font-semibold text-warm-white text-sm sm:text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-crimson" />
            {current.title}
          </h4>
          {current.description && (
            <p className="text-muted text-xs sm:text-sm mt-1 font-body leading-relaxed max-w-2xl">
              {current.description}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {total > 1 && (
        <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {screenshots.map((s, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-200 bg-[#0c0c10] ${
                  isActive
                    ? 'border-crimson ring-2 ring-crimson/50 scale-105 opacity-100'
                    : 'border-border/60 opacity-50 hover:opacity-90 hover:border-border'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
              >
                <img
                  src={s.url}
                  alt={s.title || `Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-obsidian/90 text-[10px] font-mono text-warm-white px-1 rounded">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, { scope: cardRef });

  const isEven = index % 2 === 0;

  return (
    <article
      ref={cardRef}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center group border-b border-border pb-16 md:pb-20 ${
        index === 0 ? 'pt-0' : 'pt-16 md:pt-20'
      }`}
    >
      {/* Project number */}
      <div
        className={`hidden md:block md:col-span-1 ${isEven ? 'order-1' : 'order-3'}`}
      >
        <span
          className="font-display font-bold opacity-20 group-hover:opacity-50 transition-opacity duration-300 select-none"
          style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
        >
          {project.index}
        </span>
      </div>

      {/* Project image */}
      <div
        ref={imageRef}
        className={`md:col-span-6 relative overflow-hidden aspect-video md:aspect-[16/10] bg-graphite cursor-pointer rounded-xl border border-border/60 group-hover:border-crimson/50 transition-colors duration-300 ${
          isEven ? 'order-2' : 'order-2 md:order-2'
        }`}
        onClick={() => onClick(project)}
      >
        {project.image ? (
          <div className="w-full h-full bg-[#0e0e0e] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-xl"
              loading="lazy"
            />
          </div>
        ) : (
          /* Placeholder visual */
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, #1B1B1B 0%, #0D0D0D 50%, #111 100%)`,
              }}
            />
            <div className="relative z-10 text-center px-8">
              <div
                className="font-display font-bold leading-none mb-4 select-none"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(215,25,53,0.3)',
                }}
              >
                {project.index}
              </div>
              <p className="text-label text-xs text-crimson">{project.category}</p>
            </div>
            <div className="absolute top-4 left-4 w-8 h-px bg-crimson" />
            <div className="absolute top-4 left-4 w-px h-8 bg-crimson" />
            <div className="absolute bottom-4 right-4 w-8 h-px bg-yellow" />
            <div className="absolute bottom-4 right-4 w-px h-8 bg-yellow" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-crimson/0 group-hover:bg-crimson/5 transition-colors duration-500 pointer-events-none" />

        {/* Click to expand hint */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex items-center gap-2 bg-obsidian/90 backdrop-blur-md px-3.5 py-2 rounded-lg text-xs font-mono text-warm-white border border-border/80 shadow-xl">
            <span>View screenshots &amp; details</span>
            <ArrowRight size={12} className="text-crimson" />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div
        className={`md:col-span-5 ${isEven ? 'order-3 md:pl-6' : 'order-1 md:order-3 md:pl-6'}`}
      >
        {/* Category + year */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-label text-crimson">{project.category}</span>
          <span className="text-label">{project.year}</span>
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-warm-white mb-3 leading-tight tracking-tight cursor-pointer hover:text-crimson transition-colors duration-200"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          onClick={() => onClick(project)}
        >
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-muted text-sm mb-4 font-body">{project.subtitle}</p>

        {/* Short description */}
        <p className="text-body text-sm leading-relaxed mb-6 max-w-sm">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map(tech => (
            <span key={tech} className="text-label text-xs border border-border px-3 py-1 hover:border-crimson/50 transition-colors duration-200 rounded">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onClick(project)}
            className="text-label text-xs text-warm-white hover:text-crimson transition-colors duration-200 flex items-center gap-2 group/btn"
          >
            <span>View Details &amp; Gallery</span>
            <ArrowRight size={12} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-warm-white transition-colors duration-200"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-crimson transition-colors duration-200"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Compile list of screenshots, fallback to project.image
  const screenshots = (project.screenshots && project.screenshots.length > 0)
    ? project.screenshots
    : project.image
      ? [{ url: project.image, title: project.title, description: project.shortDescription }]
      : [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 w-full md:max-w-4xl max-h-[92vh] bg-charcoal border border-border rounded-t-2xl md:rounded-2xl overflow-y-auto shadow-2xl"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Modal header */}
          <div className="sticky top-0 bg-charcoal/95 backdrop-blur-md border-b border-border flex items-center justify-between p-6 z-30">
            <div>
              <span className="text-label text-crimson">{project.category}</span>
              <h2 className="font-display font-bold text-warm-white text-2xl mt-1">{project.title}</h2>
              <p className="text-muted text-xs font-body mt-0.5">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-warm-white hover:bg-white/5 transition-colors duration-200 p-2.5 rounded-full border border-border/60"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal content */}
          <div className="p-6 md:p-10">
            {/* Interactive Image Slider */}
            <ProjectSlider screenshots={screenshots} projectTitle={project.title} />

            {/* Description */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pt-4">
              <div className="md:col-span-2">
                <h3 className="text-label mb-4">About this project</h3>
                <p className="text-body text-sm leading-relaxed">{project.longDescription}</p>
              </div>
              <div>
                <h3 className="text-label mb-4">Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-label text-xs text-crimson mb-1">Year</p>
                    <p className="text-warm-white text-sm">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-label text-xs text-crimson mb-1">Status</p>
                    <p className="text-warm-white text-sm">{project.status}</p>
                  </div>
                  <div>
                    <p className="text-label text-xs text-crimson mb-1">Category</p>
                    <p className="text-warm-white text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-label mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-2 flex-shrink-0" />
                    <p className="text-muted text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <h3 className="text-label mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span key={tech} className="text-label text-xs border border-border px-3 py-2 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-3 px-6 rounded-lg"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-3 px-6 rounded-lg"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding bg-obsidian relative"
      aria-label="Selected projects"
    >
      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20 md:mb-28">
          <span className="text-label text-crimson">03</span>
          <div className="h-px flex-1 bg-border max-w-16" />
          <span className="text-label">Selected Work</span>
        </div>

        {/* Title */}
        <div className="mb-20 md:mb-28 max-w-2xl">
          <h2
            className="font-display font-bold text-warm-white leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Things I've
            <br />
            <span className="text-crimson">built.</span>
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-md">
            A collection of production full-stack systems, civic platforms, and algorithmic engineering architectures.
          </p>
        </div>

        {/* Projects list */}
        <div>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
