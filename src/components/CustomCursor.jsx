import { useEffect, useRef } from 'react';

/**
 * Ultra-performance ambient cursor follower.
 * Preserves the native hardware cursor for instant 0ms pointing and clicking,
 * while rendering an elegant, GPU-composited trailing aura ring.
 *
 * Uses direct transform manipulation on requestAnimationFrame (no React state re-renders).
 */
export default function CustomCursor() {
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable entirely on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        ring.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      ring.style.opacity = '0';
    };

    const onPointerOver = (e) => {
      const target = e.target;
      if (target && target.closest && target.closest('a, button, [data-cursor="pointer"], article, .card-hover-bold, input, textarea')) {
        if (!isHovered) {
          isHovered = true;
          ring.classList.add('cursor-hovered');
        }
      } else {
        if (isHovered) {
          isHovered = false;
          ring.classList.remove('cursor-hovered');
        }
      }
    };

    // Smooth 60-120Hz lerp loop running entirely outside React render cycle
    const loop = () => {
      // Snappy 0.22 lerp factor: smooth follow without sluggish lag
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('mouseover', onPointerOver, { passive: true });

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onPointerOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block will-change-transform opacity-0"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.2s ease',
      }}
      aria-hidden="true"
    >
      {/* Outer ambient follower ring */}
      <div
        className="relative -top-3.5 -left-3.5 w-7 h-7 rounded-full border border-warm-white/40 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          boxShadow: '0 0 10px rgba(215, 25, 53, 0.2)',
        }}
      />
    </div>
  );
}
