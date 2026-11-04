import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Compass, TrendingUp } from 'lucide-react';
import { PRINCIPLES_DATA } from '../data';
import { PrincipleItem } from '../types';

export const WhyUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-[#F8F0E4]" />;
      case 1:
        return <Compass className="w-6 h-6 text-[#F8F0E4]" />;
      case 2:
      default:
        return <TrendingUp className="w-6 h-6 text-[#F8F0E4]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 md:py-36 bg-[#11100E] text-[#F8F0E4] relative overflow-hidden border-t border-[#F8F0E4]/10">
      {/* Ambient gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F8F0E4]/[0.025] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#F8F0E4]/40"></span>
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#A49B8F] uppercase">
              04 / WHY EKAM
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] text-[#F8F0E4]">
            NOT JUST <br />
            <span className="font-luxury italic lowercase font-normal text-5xl sm:text-7xl md:text-8xl tracking-normal text-[#FAF5EE]">
              another
            </span> <br />
            <span>AGENCY.</span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-[#E9DFD0]/85 font-normal leading-relaxed">
            We don't believe in one-size-fits-all solutions. We believe in ideas, collaboration,
            and work that creates a lasting impression.
          </p>
        </div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#F8F0E4]/15">
          {PRINCIPLES_DATA.map((principle: PrincipleItem, index: number) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 rounded-3xl bg-[#161513] hover:bg-[#1C1A17] border border-[#F8F0E4]/15 hover:border-[#F8F0E4]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-widest uppercase text-[#A49B8F] group-hover:text-[#F8F0E4] transition-colors">
                    PRINCIPLE / {principle.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#080706] border border-[#F8F0E4]/15 flex items-center justify-center group-hover:bg-[#F8F0E4]/10 group-hover:border-[#F8F0E4]/30 transition-all duration-300">
                    {getIcon(index)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#F8F0E4] mb-3">
                  {principle.title}
                </h3>

                {/* Statement required by prompt */}
                <p className="text-base font-semibold text-[#FAF5EE] mb-4">
                  {principle.statement}
                </p>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-[#A49B8F] leading-relaxed font-normal">
                  {principle.detail}
                </p>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="mt-8 pt-6 border-t border-[#F8F0E4]/10 flex items-center justify-between text-[11px] font-mono text-[#A49B8F]">
                <span>COMMITMENT {principle.number}</span>
                <span className="w-2 h-2 rounded-full bg-[#F8F0E4]/25 group-hover:bg-[#F8F0E4] group-hover:scale-125 transition-all"></span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Comparison / Manifesto Banner in Black & Cream */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#161513] border border-[#F8F0E4]/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F8F0E4] text-[#080706] flex items-center justify-center font-black shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-editorial text-lg md:text-xl font-bold uppercase text-[#F8F0E4]">
                The Non-Traditional Promise
              </h4>
              <p className="text-xs sm:text-sm text-[#A49B8F] mt-1 max-w-xl">
                No bloated account managers. No junior hand-offs. You partner directly with seasoned
                directors who craft, code, and care deeply about outcome over output.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#A49B8F] uppercase block">Typical Timeline</span>
              <span className="text-lg font-bold text-[#F8F0E4]">4 to 12 Weeks</span>
            </div>
            <div className="h-8 w-[1px] bg-[#F8F0E4]/20" />
            <div className="text-right">
              <span className="text-[10px] font-mono text-[#A49B8F] uppercase block">Global Reach</span>
              <span className="text-lg font-bold text-[#F8F0E4]">NYC • LON • BLR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
