/**
 * SunEffect — High-Performance Cinematic Sunrise in Deep Space
 * Represents "Aditya" (The Sun) with natural 360-degree radiant dawn light.
 *
 * Performance optimizations:
 * - IntersectionObserver: Completely sleeps (0 FPS, 0 CPU) when scrolled offscreen
 * - Batched canvas draw calls: Single master gradient for all 24 rays (1 draw call instead of 24)
 * - Batched star rendering: Grouped path rendering (3 draw calls instead of 150)
 * - Throttled passive mouse tracking
 */
import { useRef, useEffect } from 'react';

export default function SunEffect() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let isIntersecting = true;
    let width = 0;
    let height = 0;

    // Mouse tracking for subtle parallax
    const handleMouseMove = (e) => {
      if (!isIntersecting) return;
      const nx = e.clientX / width - 0.5;
      const ny = e.clientY / height - 0.5;
      mouseRef.current.targetX = nx * 20;
      mouseRef.current.targetY = ny * 12;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle high DPI and responsive sizing
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap at 1.5 for silky 120fps performance
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // ── 1. Starfield Initialization ─────────────────────────────────
    const STAR_COUNT = 140;
    const stars = Array.from({ length: STAR_COUNT }, () => {
      const type = Math.random() > 0.35 ? 0 : Math.random() > 0.5 ? 1 : 2;
      return {
        x: Math.random(),
        y: Math.pow(Math.random(), 1.3),
        radius: 0.4 + Math.random() * 1.0,
        baseAlpha: 0.25 + Math.random() * 0.55,
        twinkleSpeed: 0.012 + Math.random() * 0.02,
        twinklePhase: Math.random() * Math.PI * 2,
        type, // 0: warm white, 1: gold, 2: blue
      };
    });

    const starColors = [
      '243, 240, 232', // warm white
      '255, 212, 59',  // soft gold
      '190, 215, 255', // starlight blue
    ];

    // ── 2. Shooting Star / Meteor State ─────────────────────────────
    let shootingStar = null;
    let nextShootingStarTime = 160 + Math.random() * 240;

    const spawnShootingStar = () => {
      const startX = width * (0.05 + Math.random() * 0.6);
      const startY = height * (0.04 + Math.random() * 0.2);
      const angle = Math.PI * 0.24 + (Math.random() - 0.5) * 0.2;
      const speed = 14 + Math.random() * 6;
      const length = 65 + Math.random() * 55;
      shootingStar = {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        life: 1.0,
        decay: 0.028 + Math.random() * 0.015,
      };
    };

    // ── 3. Full 360-Degree Volumetric Dawn Rays ─────────────────────
    const RAY_COUNT = 20;
    const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
      const baseAngle = (i / RAY_COUNT) * Math.PI * 2;
      return {
        angle: baseAngle,
        width: 0.12 + Math.random() * 0.1,
        reach: 2.2 + Math.random() * 1.6,
        driftSpeed: (Math.random() - 0.5) * 0.0003,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // ── Animation Loop ──────────────────────────────────────────────
    let frame = 0;

    const render = () => {
      if (!isIntersecting) {
        animationFrameId = null;
        return;
      }

      frame++;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Sun position
      const sunBaseX = width >= 1024 ? width * 0.72 : width * 0.76;
      const sunBaseY = width >= 1024 ? height * 0.28 : height * 0.24;
      const sunX = sunBaseX + mouseRef.current.x;
      const sunY = sunBaseY + mouseRef.current.y;
      const sunR = Math.max(44, Math.min(width * 0.07, 78));

      // ── Layer 1: Batched Starfield (Grouped by Color) ─────────────
      const extinctionRadius = sunR * 3.6;
      for (let c = 0; c < 3; c++) {
        ctx.beginPath();
        let hasStarsInBucket = false;

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          if (star.type !== c) continue;

          const sx = star.x * width + mouseRef.current.x * 0.25;
          const sy = star.y * height + mouseRef.current.y * 0.25;

          const dx = sx - sunX;
          const dy = sy - sunY;
          const distSq = dx * dx + dy * dy;

          if (distSq < extinctionRadius * extinctionRadius) continue;

          hasStarsInBucket = true;
          ctx.moveTo(sx + star.radius, sy);
          ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        }

        if (hasStarsInBucket) {
          const twinkle = 0.5 + Math.sin(frame * 0.02 + c) * 0.3;
          ctx.fillStyle = `rgba(${starColors[c]}, ${twinkle.toFixed(2)})`;
          ctx.fill();
        }
      }

      // ── Layer 2: Occasional Shooting Star ──────────────────────────
      if (!shootingStar) {
        nextShootingStarTime--;
        if (nextShootingStarTime <= 0) {
          spawnShootingStar();
          nextShootingStarTime = 260 + Math.random() * 300;
        }
      } else {
        const ss = shootingStar;
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= ss.decay;

        if (ss.life > 0) {
          const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length;
          const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length;

          const meteorGrad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          meteorGrad.addColorStop(0, 'rgba(255, 212, 59, 0)');
          meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${(ss.life * 0.85).toFixed(2)})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = meteorGrad;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          shootingStar = null;
        }
      }

      // ── Layer 3: Ambient Sunrise Atmosphere ────────────────────────
      const dawnMaxRadius = Math.max(width, height) * 0.85;
      const dawnGradient = ctx.createRadialGradient(
        sunX,
        sunY,
        sunR * 0.4,
        sunX,
        sunY,
        dawnMaxRadius
      );
      dawnGradient.addColorStop(0.0, 'rgba(255, 215, 80, 0.22)');
      dawnGradient.addColorStop(0.14, 'rgba(255, 140, 35, 0.14)');
      dawnGradient.addColorStop(0.32, 'rgba(215, 25, 53, 0.07)');
      dawnGradient.addColorStop(0.60, 'rgba(160, 20, 45, 0.02)');
      dawnGradient.addColorStop(1.0, 'rgba(9, 9, 9, 0)');

      ctx.fillStyle = dawnGradient;
      ctx.beginPath();
      ctx.arc(sunX, sunY, dawnMaxRadius, 0, Math.PI * 2);
      ctx.fill();

      // ── Layer 4: Batched 360-Degree Volumetric Dawn Rays ───────────
      // Single master gradient and single path fill for all rays
      const maxBeamLength = sunR * 4.0;
      const rayMasterGrad = ctx.createRadialGradient(
        sunX,
        sunY,
        sunR * 0.7,
        sunX,
        sunY,
        maxBeamLength
      );
      const pulseFactor = 0.85 + Math.sin(frame * 0.015) * 0.15;
      rayMasterGrad.addColorStop(0.0, `rgba(255, 225, 120, ${(0.05 * pulseFactor).toFixed(3)})`);
      rayMasterGrad.addColorStop(0.3, `rgba(255, 160, 45, ${(0.03 * pulseFactor).toFixed(3)})`);
      rayMasterGrad.addColorStop(0.7, `rgba(215, 25, 53, ${(0.01 * pulseFactor).toFixed(3)})`);
      rayMasterGrad.addColorStop(1.0, 'rgba(9, 9, 9, 0)');

      ctx.beginPath();
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        ray.angle += ray.driftSpeed;
        const currentAngle = ray.angle + Math.sin(frame * 0.007 + ray.phase) * 0.03;
        const beamLength = sunR * ray.reach * 3.5;

        const p1x = sunX + Math.cos(currentAngle - ray.width) * beamLength;
        const p1y = sunY + Math.sin(currentAngle - ray.width) * beamLength;
        const p2x = sunX + Math.cos(currentAngle + ray.width) * beamLength;
        const p2y = sunY + Math.sin(currentAngle + ray.width) * beamLength;

        ctx.moveTo(sunX, sunY);
        ctx.lineTo(p1x, p1y);
        ctx.lineTo(p2x, p2y);
        ctx.closePath();
      }
      ctx.fillStyle = rayMasterGrad;
      ctx.fill();

      // ── Layer 5: Concentric Sunrise Corona & Halos ─────────────────
      const coronaRadius = sunR * 3.5;
      const coronaGrad = ctx.createRadialGradient(
        sunX,
        sunY,
        sunR * 0.75,
        sunX,
        sunY,
        coronaRadius
      );
      coronaGrad.addColorStop(0.0, 'rgba(255, 235, 150, 0.42)');
      coronaGrad.addColorStop(0.22, 'rgba(255, 165, 40, 0.25)');
      coronaGrad.addColorStop(0.50, 'rgba(215, 25, 53, 0.10)');
      coronaGrad.addColorStop(0.80, 'rgba(160, 20, 40, 0.025)');
      coronaGrad.addColorStop(1.0, 'rgba(9, 9, 9, 0)');

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, coronaRadius, 0, Math.PI * 2);
      ctx.fill();

      // Intermediate bright halo
      const haloRadius = sunR * 1.8;
      const haloGrad = ctx.createRadialGradient(
        sunX,
        sunY,
        sunR * 0.85,
        sunX,
        sunY,
        haloRadius
      );
      haloGrad.addColorStop(0.0, 'rgba(255, 245, 190, 0.50)');
      haloGrad.addColorStop(0.4, 'rgba(255, 185, 60, 0.28)');
      haloGrad.addColorStop(1.0, 'rgba(215, 25, 53, 0.0)');

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, haloRadius, 0, Math.PI * 2);
      ctx.fill();

      // ── Layer 6: Incandescent Sunrise Orb ───────────────────────────
      const coreGrad = ctx.createRadialGradient(
        sunX - sunR * 0.12,
        sunY - sunR * 0.12,
        sunR * 0.05,
        sunX,
        sunY,
        sunR
      );
      coreGrad.addColorStop(0.0, 'rgba(255, 255, 250, 1.0)');
      coreGrad.addColorStop(0.26, 'rgba(255, 242, 180, 0.98)');
      coreGrad.addColorStop(0.56, 'rgba(255, 200, 50, 0.95)');
      coreGrad.addColorStop(0.82, 'rgba(255, 120, 25, 0.92)');
      coreGrad.addColorStop(0.96, 'rgba(225, 45, 30, 0.88)');
      coreGrad.addColorStop(1.0, 'rgba(180, 15, 20, 0.0)');

      ctx.save();
      ctx.shadowColor = 'rgba(255, 200, 60, 0.85)';
      ctx.shadowBlur = 30;
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    // ── IntersectionObserver: Sleep when scrolled offscreen ────────
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !animationFrameId) {
          animationFrameId = requestAnimationFrame(render);
        } else if (!isIntersecting && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
}
