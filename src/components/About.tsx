import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';
import { AGENCY_STATS } from '../data';

interface AboutProps {
  onOpenMoreAbout: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenMoreAbout }) => {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#F5EBDD] text-[#080706] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#080706]/40"></span>
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#080706]/60 uppercase">
            01 / WHO WE ARE
          </span>
        </div>

        {/* Section Grid: Heading on left, Description & Link on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#080706] uppercase leading-[1.05]">
              GOOD BRANDS <br className="hidden sm:inline" />
              DON'T HAPPEN <br className="hidden sm:inline" />
              <span className="font-luxury italic lowercase font-normal text-5xl sm:text-6xl md:text-7xl tracking-normal text-[#080706] block sm:inline">
                by accident.
              </span>
            </h2>

            {/* Supporting Creative Graphic Box in Black & Cream */}
            <div className="mt-10 relative rounded-3xl overflow-hidden border border-[#080706]/10 bg-[#FAF5EE] p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9DFD0]/40 rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#080706] flex items-center justify-center shrink-0 text-[#F8F0E4] shadow-md">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-editorial text-lg font-bold text-[#080706] uppercase tracking-wide">
                    The EKAM Methodology
                  </h3>
                  <p className="mt-1 text-sm text-[#080706]/75 leading-relaxed">
                    We strip away corporate clutter to build brands with razor-sharp cultural relevance,
                    immaculate craft, and clear commercial velocity.
                  </p>
                </div>
              </div>

              {/* Core Pillars Pills */}
              <div className="mt-6 pt-6 border-t border-[#080706]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#080706]">
                  <CheckCircle2 className="w-4 h-4 text-[#080706] shrink-0" />
                  <span>Strategic Clarity</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#080706]">
                  <CheckCircle2 className="w-4 h-4 text-[#080706] shrink-0" />
                  <span>Aesthetic Mastery</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#080706]">
                  <CheckCircle2 className="w-4 h-4 text-[#080706] shrink-0" />
                  <span>Measurable Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-[#080706] font-normal leading-relaxed tracking-tight">
                We believe every brand has a story worth telling. At EKAM, we combine
                strategic thinking, creative direction, and digital expertise to transform
                ideas into meaningful brand experiences.
              </p>

              <p className="text-sm sm:text-base text-[#080706]/70 leading-relaxed">
                Born at the intersection of European editorial design and agile Silicon Valley
                speed, we work intimately with founders and executives who refuse to blend into
                the background. We curate bespoke squads for every mandate—ensuring senior-level
                focus from initial concept to launch day.
              </p>
            </div>

            {/* Small text link required by prompt */}
            <div className="mt-10">
              <button
                onClick={onOpenMoreAbout}
                className="group inline-flex items-center gap-3 text-sm md:text-base font-bold font-mono tracking-widest text-[#080706] uppercase hover:text-[#080706]/80 transition-colors border-b-2 border-[#080706] pb-1 hover:border-[#080706]/60"
              >
                <span>MORE ABOUT EKAM</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#080706]" />
              </button>
            </div>
          </div>
        </div>

        {/* Agency Metrics Strip in Black on Cream */}
        <div className="mt-20 pt-12 border-t border-[#080706]/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <div className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080706] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#080706] uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#080706]/60 font-mono">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
