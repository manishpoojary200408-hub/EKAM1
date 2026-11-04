import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('brand-strategy');
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-[#11100E] text-[#F8F0E4] relative overflow-hidden border-t border-[#F8F0E4]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#F8F0E4]/40"></span>
              <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#A49B8F] uppercase">
                02 / WHAT WE DO
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F8F0E4] uppercase">
              CREATIVITY <br />
              <span className="font-luxury italic lowercase font-normal text-5xl sm:text-6xl md:text-7xl tracking-normal text-[#FAF5EE]">
                with a purpose.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base text-[#E9DFD0]/80 leading-relaxed">
            We deliver multi-disciplinary execution without agency bureaucracy.
            Every service is tailored to deliver maximum commercial resonance and lasting brand equity.
          </p>
        </div>

        {/* Monochromatic Horizontal Rows */}
        <div className="divide-y divide-[#F8F0E4]/15 border-y border-[#F8F0E4]/15">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const isOpen = activeServiceId === service.id;
            const isHovered = hoveredServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`group transition-all duration-300 ${
                  isOpen || isHovered ? 'bg-[#161513]' : 'bg-transparent'
                }`}
              >
                {/* Main Clickable Header Row */}
                <div
                  onClick={() => toggleService(service.id)}
                  className="py-8 md:py-10 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none transition-colors"
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-baseline gap-6 md:gap-12 md:w-5/12">
                    <span className="font-mono text-sm md:text-base font-bold text-[#A49B8F] group-hover:text-[#F8F0E4] transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8F0E4] uppercase tracking-tight group-hover:text-[#FAF5EE] transition-colors">
                        {service.title}
                      </h3>
                      <span className="inline-block mt-1 text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-[#F8F0E4]/10 text-[#F8F0E4] border border-[#F8F0E4]/15">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Center: Short Description */}
                  <div className="md:w-5/12">
                    <p className="text-sm md:text-base text-[#E9DFD0]/80 font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Toggle Icon & Action Arrow */}
                  <div className="flex items-center justify-end gap-3 md:w-2/12">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#F8F0E4] text-[#080706] rotate-45'
                          : 'bg-[#F8F0E4]/10 text-[#F8F0E4] group-hover:bg-[#F8F0E4] group-hover:text-[#080706]'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Expandable Warm Cream Deep-Dive Drawer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-[#F5EBDD] text-[#080706] rounded-2xl mx-2 md:mx-6 mb-6 p-6 md:p-8 shadow-2xl border border-[#F8F0E4]"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#080706]/70 uppercase tracking-widest mb-3">
                            <Sparkles className="w-4 h-4 text-[#080706]" />
                            <span>Core Capabilities &amp; Deliverables</span>
                          </div>
                          <h4 className="font-editorial text-xl md:text-2xl font-bold uppercase text-[#080706] mb-4">
                            What you can expect from {service.title}
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {service.deliverables.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2.5 text-xs sm:text-sm text-[#080706]/85 font-medium"
                              >
                                <CheckCircle className="w-4 h-4 text-[#080706] shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-between h-full border-t lg:border-t-0 lg:border-l border-[#080706]/15 pt-6 lg:pt-0 lg:pl-8">
                          <div>
                            <span className="text-[11px] font-mono text-[#080706]/60 uppercase tracking-widest block">
                              Engagement Cadence
                            </span>
                            <span className="text-base font-bold text-[#080706] mt-1 block">
                              {service.timeline}
                            </span>
                          </div>

                          <div className="mt-6">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectServiceForInquiry(service.title);
                              }}
                              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#080706] hover:bg-[#161513] text-[#F8F0E4] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg active:scale-95"
                            >
                              <span>Request {service.title}</span>
                              <ArrowUpRight className="w-4 h-4 text-[#F8F0E4]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
