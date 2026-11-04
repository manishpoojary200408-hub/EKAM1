import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { EkamWordmark } from './EkamWordmark';
import { HeroFlames } from './HeroFlames';

interface HeroProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onStartProject }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#080706] text-[#F8F0E4]"
    >
      {/* Cinematic living flame horizon & glowing floating embers (inspired by Yatharth Social) */}
      <HeroFlames />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F8F0E4]/[0.02] blur-[160px] pointer-events-none -z-0" />

      {/* Decorative ambient subtle grid lines */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top Editorial Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11100E]/90 backdrop-blur-md border border-[#F8F0E4]/15 text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#F8F0E4] shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8F0E4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8F0E4]"></span>
            </span>
            <span className="font-semibold tracking-wider">INDEPENDENT CREATIVE &amp; DIGITAL AGENCY</span>
            <span className="text-[#F8F0E4]/30">•</span>
            <span className="text-[#A49B8F] hidden sm:inline">GLOBAL ROSTER</span>
          </div>
        </motion.div>

        {/* Supporting Editorial Headline from Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6"
        >
          <h2 className="font-editorial text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#A49B8F] uppercase">
            WE BUILD BRANDS THAT MEAN <span className="text-[#F8F0E4] font-black underline decoration-[#F8F0E4]/40 underline-offset-4">BUSINESS</span>
          </h2>
        </motion.div>
      </div>

      {/* MAJESTIC SCREEN-SPANNING BRAND NAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full my-2 sm:my-4 md:my-6 py-6 md:py-10 flex items-center justify-center border-y border-[#F8F0E4]/10 overflow-hidden z-10 px-4 sm:px-8"
      >
        {/* Subtle ambient back-glow behind the leaf logo */}
        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />

        {/* Full-width EKAM Wordmark */}
        <EkamWordmark size="hero" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Bottom Hero Layout (Inspired by Yatharth Social's bottom-split layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          {/* Left Column: Narrative & Explore Link */}
          <div className="lg:col-span-7 space-y-4">
            <p className="font-luxury italic text-2xl sm:text-3xl text-[#F8F0E4] leading-snug">
              "Where creativity meets digital growth."
            </p>
            <p className="text-base sm:text-lg text-[#E9DFD0]/85 max-w-xl font-normal leading-relaxed">
              We help ambitious brands build powerful digital identities through strategic social media management,
              creative content, and impactful marketing. From building brand awareness to creating meaningful
              engagement, we turn your social presence into a platform for growth, connection, and success.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="group inline-flex items-center gap-2 text-sm md:text-base font-bold font-mono tracking-wider text-[#F8F0E4] hover:text-[#FAF5EE] transition-colors border-b border-[#F8F0E4]/40 pb-1 hover:border-[#F8F0E4]"
              >
                <span>Explore Our Services</span>
                <ArrowDown className="w-4 h-4 text-[#A49B8F] transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#F8F0E4]" />
              </button>
            </div>
          </div>

          {/* Right Column: CTA Button & Pillars */}
          <div className="lg:col-span-5 flex flex-col sm:items-end justify-between space-y-6">
            <button
              onClick={onStartProject}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F8F0E4] text-[#080706] font-bold text-sm sm:text-base tracking-wide shadow-[0_4px_30px_rgba(248,240,228,0.25)] transition-all duration-300 hover:bg-[#FAF5EE] hover:scale-[1.02] active:scale-98"
            >
              <span>Start a Project</span>
              <span className="w-7 h-7 rounded-full bg-[#080706] flex items-center justify-center text-[#F8F0E4] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap sm:justify-end items-center gap-5 text-xs text-[#A49B8F] font-mono pt-2 border-t border-[#F8F0E4]/10 w-full">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F8F0E4]" />
                <span>Zero Outsourcing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#F8F0E4]" />
                <span>Strategy-Led Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F8F0E4]" />
                <span>High-Fidelity Craft</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Scroll Indicator in Cream */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center justify-between pt-6 border-t border-[#F8F0E4]/10 text-xs font-mono text-[#A49B8F] uppercase tracking-widest"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8F0E4]"></span>
            <span className="text-[#F8F0E4]">SCROLL TO EXPLORE</span>
          </div>
          <div className="animate-bounce">
            <ArrowDown className="w-4 h-4 text-[#F8F0E4]" />
          </div>
          <div className="hidden sm:block">
            <span>[ EKAM SOCIAL MEDIA AGENCY • 2026 ]</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
