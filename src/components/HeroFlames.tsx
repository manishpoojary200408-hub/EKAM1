import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroFlames: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 380);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Luxury 4-Pointed Sparkle Star Interface
    interface SparkleStar {
      x: number;
      y: number;
      radius: number;
      armLength: number;
      rotation: number;
      rotationSpeed: number;
      vy: number;
      vx: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      life: number;
      maxLife: number;
      color: string;
      swaySpeed: number;
      swayOffset: number;
      isSparkle: boolean; // true = 4-point star, false = ambient micro-star dot
    }

    // Pure Luxury Cream Palette
    const creamPalette = [
      '248, 240, 228', // EKAM Logo Cream (#F8F0E4)
      '245, 235, 221', // Soft Cream (#F5EBDD)
      '233, 223, 208', // Secondary Cream (#E9DFD0)
      '255, 252, 246', // Glistening Diamond White-Cream
      '220, 208, 192', // Warm Champagne
    ];

    const createStar = (initialScatter = false): SparkleStar => {
      const maxLife = 180 + Math.random() * 240;
      const life = initialScatter ? Math.random() * maxLife : 0;
      const isSparkle = Math.random() > 0.42; // ~60% 4-point sparkle stars, 40% micro-stars
      const radius = isSparkle ? 1.4 + Math.random() * 2.8 : 0.6 + Math.random() * 1.2;

      return {
        x: Math.random() * width,
        y: initialScatter
          ? height - Math.random() * (height * 0.9)
          : height - Math.random() * 25,
        radius,
        armLength: radius * (2.8 + Math.random() * 2.2),
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.008,
        vy: 0.2 + Math.random() * 0.45, // Gentle celestial rise
        vx: (Math.random() - 0.5) * 0.2,
        baseAlpha: 0.4 + Math.random() * 0.55,
        twinkleSpeed: 0.025 + Math.random() * 0.05,
        twinkleOffset: Math.random() * Math.PI * 2,
        life,
        maxLife,
        color: creamPalette[Math.floor(Math.random() * creamPalette.length)],
        swaySpeed: 0.012 + Math.random() * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        isSparkle,
      };
    };

    const starCount = 52;
    const stars: SparkleStar[] = Array.from({ length: starCount }, () => createStar(true));

    // Function to draw a 4-pointed luxury lens-flare diamond star
    const drawLuxuryStar = (
      x: number,
      y: number,
      arm: number,
      color: string,
      alpha: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Star halo glow
      ctx.shadowBlur = arm * 2.8;
      ctx.shadowColor = `rgba(${color}, ${alpha * 0.9})`;
      ctx.fillStyle = `rgba(${color}, ${alpha})`;

      // Draw 4-pointed star flare with curved bezier waists
      ctx.beginPath();
      const waist = arm * 0.16;

      ctx.moveTo(0, -arm);
      ctx.quadraticCurveTo(0, -waist, waist, 0);
      ctx.quadraticCurveTo(0, waist, 0, arm);
      ctx.quadraticCurveTo(0, waist, -waist, 0);
      ctx.quadraticCurveTo(0, -waist, 0, -arm);
      ctx.fill();

      // Horizontal cross arms (slightly wider flare)
      ctx.beginPath();
      ctx.moveTo(-arm, 0);
      ctx.quadraticCurveTo(-waist, 0, 0, waist);
      ctx.quadraticCurveTo(waist, 0, arm, 0);
      ctx.quadraticCurveTo(waist, 0, 0, -waist);
      ctx.quadraticCurveTo(-waist, 0, -arm, 0);
      ctx.fill();

      // Bright white-cream pin-point diamond core
      ctx.beginPath();
      ctx.arc(0, 0, Math.max(1, arm * 0.18), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 1.2)})`;
      ctx.fill();

      ctx.restore();
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick++;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.life++;
        s.y -= s.vy;
        s.x += s.vx + Math.sin(s.life * s.swaySpeed + s.swayOffset) * 0.3;
        s.rotation += s.rotationSpeed;

        // Life curve: fade in, twinkle smoothly, fade out at top
        const progress = s.life / s.maxLife;
        let currentAlpha: number;

        if (progress < 0.15) {
          currentAlpha = (progress / 0.15) * s.baseAlpha;
        } else if (progress > 0.8) {
          currentAlpha = ((1 - progress) / 0.2) * s.baseAlpha;
        } else {
          // Dynamic star shimmer / twinkle
          const twinkle = Math.sin(tick * s.twinkleSpeed + s.twinkleOffset) * 0.35;
          currentAlpha = Math.max(0.12, Math.min(1, s.baseAlpha + twinkle));
        }

        if (s.isSparkle) {
          // 4-pointed luxury star
          const arm = s.armLength * (0.8 + Math.sin(tick * s.twinkleSpeed + s.twinkleOffset) * 0.25);
          drawLuxuryStar(s.x, s.y, Math.max(2, arm), s.color, currentAlpha, s.rotation);
        } else {
          // Ambient micro-star glow dot
          ctx.save();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color}, ${currentAlpha})`;
          ctx.shadowBlur = s.radius * 6;
          ctx.shadowColor = `rgba(${s.color}, ${currentAlpha})`;
          ctx.fill();
          ctx.restore();
        }

        // Recycle star
        if (s.life >= s.maxLife || s.y < -20) {
          stars[i] = createStar(false);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[320px] sm:h-[380px] pointer-events-none select-none overflow-hidden z-0">
      
      {/* 1. Deep Cream Light Fog Gradient (No orange, perfectly cream & black) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(248, 240, 228, 0.10) 0%, rgba(233, 223, 208, 0.04) 45%, transparent 100%)',
        }}
      />

      {/* 2. Soft Luminous Cream Central Light Pool */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[75%] h-[240px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(248, 240, 228, 0.16) 0%, rgba(233, 223, 208, 0.07) 50%, transparent 80%)',
        }}
      />

      {/* 3. Undulating Cream Silk Aurora Breathing */}
      <motion.div
        animate={{
          opacity: [0.55, 0.85, 0.6, 0.9, 0.55],
          scaleY: [1, 1.15, 0.98, 1.12, 1],
          scaleX: [1, 1.03, 1, 0.98, 1],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 right-0 h-[160px] origin-bottom pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(248, 240, 228, 0.14) 0%, rgba(233, 223, 208, 0.04) 60%, transparent 100%)',
          filter: 'blur(28px)',
        }}
      />

      {/* 4. Elegant Cream Horizon Hairline Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F8F0E4]/30 to-transparent" />

      {/* 5. 60fps Floating Cream Luxury Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};
