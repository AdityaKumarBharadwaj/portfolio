import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

/**
 * AnimatedText — renders text with line-masked reveal on scroll.
 * Wraps each child in a clip container for a "wipe up" effect.
 *
 * Usage:
 *   <AnimatedText tag="h2" className="...">
 *     Your headline here
 *   </AnimatedText>
 */
export function AnimatedText({
  children,
  tag: Tag = 'div',
  delay = 0,
  duration = 0.9,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-10% 0px' });

  return (
    <div ref={ref} className="overflow-hidden">
      <Tag className={className}>
        <motion.span
          className="inline-block"
          initial={{ y: '110%', skewY: 4 }}
          animate={inView ? { y: 0, skewY: 0 } : {}}
          transition={{
            duration,
            delay,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          {children}
        </motion.span>
      </Tag>
    </div>
  );
}

/**
 * SectionReveal — fade + translate reveal for section content blocks.
 */
export function SectionReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...initial }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer — wraps children and stagger-reveals them.
 */
export function StaggerContainer({ children, className = '', staggerDelay = 0.08 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
