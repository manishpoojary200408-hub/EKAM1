import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EkamWordmark } from './EkamWordmark';

interface LoadingScreenProps {
  onComplete: () => void;
}

const PHASES = [
  'INITIALIZING STRATEGY',
  'CURATING BRAND IDENTITY',
  'AMPLIFYING DIGITAL REACH',
  'WELCOME TO EKAM',
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // SVG Circle geometry
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2400; // 2.4s sleek animation

    const update = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // Custom smooth bezier easing: ease-out cubic
      const eased = 1 - Math.pow(1 - raw, 3);
      const currentProgress = Math.floor(eased * 100);
      setProgress(currentProgress);

      // Dynamically switch phase text
      if (currentProgress < 30) {
        setPhaseIndex(0);
      } else if (currentProgress < 65) {
        setPhaseIndex(1);
      } else if (currentProgress < 95) {
        setPhaseIndex(2);
      } else {
        setPhaseIndex(3);
      }

      if (raw < 1) {
        requestAnimationFrame(update);
      } else {
        // Hold briefly at 100% then trigger curtain reveal
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 950);
        }, 350);
      }
    };

    const animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [onComplete]);

  // 5 vertical columns for the luxury theatrical curtain reveal
  const columns = [0, 1, 2, 3, 4];

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none flex">
      {/* 5-Column Curtain Lift Effect */}
      {columns.map((col) => (
        <motion.div
          key={col}
          initial={{ y: '0%' }}
          animate={isFinished ? { y: '-100%' } : { y: '0%' }}
          transition={{
            duration: 0.85,
            delay: col * 0.07,
            ease: [0.77, 0, 0.175, 1], // Luxury cubic-bezier
          }}
          className="relative h-full flex-1 bg-[#080706] border-r border-[#F8F0E4]/[0.04] last:border-r-0 pointer-events-auto"
        />
      ))}

      {/* Centerpiece Content — fades smoothly right before curtains slide */}
      <AnimatePresence>
        {!isFinished && (
          <motion.div
            key="center-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Cinematic warm ambient background glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[450px] h-[450px] bg-[#B88746]/[0.08] blur-[150px] rounded-full" />
            </div>

            {/* Circular Orbit & Dial Centerpiece */}
            <div className="relative z-10 flex flex-col items-center">
              
              {/* Radial Dial with Spinning Geometry */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                
                {/* Outer Rotating Dotted Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#F8F0E4]/15"
                />

                {/* Counter-Rotating Micro Dots Accent */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-3 rounded-full border border-[#F8F0E4]/[0.06]"
                >
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F8F0E4]/60" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F8F0E4]/60" />
                </motion.div>

                {/* SVG Radial Progress Arc */}
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 160 160"
                >
                  {/* Track Circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#F8F0E4"
                    strokeWidth="1.5"
                    strokeOpacity="0.08"
                  />
                  {/* Active Animated Arc */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#F8F0E4"
                    strokeWidth="2.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-75 ease-out drop-shadow-[0_0_8px_rgba(248,240,228,0.5)]"
                  />
                </svg>

                {/* Center Content: EKAM Wordmark & Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="scale-75 sm:scale-90">
                    <EkamWordmark size="sm" />
                  </div>
                  <div className="font-mono text-sm sm:text-base font-bold tracking-widest text-[#F8F0E4] flex items-center">
                    <span>{String(progress).padStart(2, '0')}</span>
                    <span className="text-[10px] text-[#A49B8F] ml-0.5">%</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Phase Ticker */}
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="h-5 overflow-hidden flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={phaseIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[#E9DFD0]/90 uppercase font-medium"
                    >
                      {PHASES[phaseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Elegant Micro-Crosshair Indicator */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-[#A49B8F]/50 tracking-widest">
                  <span>+</span>
                  <span className="w-8 h-[1px] bg-[#F8F0E4]/15" />
                  <span>2026</span>
                  <span className="w-8 h-[1px] bg-[#F8F0E4]/15" />
                  <span>+</span>
                </div>
              </div>
            </div>

            {/* Bottom Stationary Monospace Caption */}
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.35em] text-[#A49B8F]/40 uppercase">
              <span>Social Media Agency</span>
              <span className="w-1 h-1 rounded-full bg-[#A49B8F]/30" />
              <span>Est. 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
