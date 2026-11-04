import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

interface WorkProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'strategy' | 'digital' | 'creative' | 'social'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.categorySlug === activeFilter);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Brand Strategy', value: 'strategy' },
    { label: 'Digital Platforms', value: 'digital' },
    { label: 'Creative Direction', value: 'creative' },
    { label: 'Social Architecture', value: 'social' },
  ];

  return (
    <section id="work" className="py-24 md:py-36 bg-[#F5EBDD] text-[#080706] relative overflow-hidden border-t border-[#080706]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#080706]/40"></span>
              <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#080706]/60 uppercase">
                03 / SELECTED WORK
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#080706] uppercase">
              MADE TO <br />
              <span className="font-luxury italic lowercase font-normal text-5xl sm:text-6xl md:text-7xl tracking-normal text-[#080706]">
                stand out.
              </span>
            </h2>
          </div>

          {/* Editorial Category Filter Pills in Black & Cream */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#080706] text-[#F8F0E4] shadow-md'
                      : 'bg-[#FAF5EE] hover:bg-white text-[#080706]/70 hover:text-[#080706] border border-[#080706]/10'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Varied Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project: ProjectItem, index: number) => {
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';
            const imageHeight = isWide ? 'h-[360px] sm:h-[480px]' : 'h-[360px] sm:h-[420px]';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                className={`${colSpan} group cursor-pointer flex flex-col`}
                onClick={() => onSelectProject(project)}
              >
                {/* Image Card Container */}
                <div
                  className={`relative w-full ${imageHeight} rounded-3xl overflow-hidden bg-[#080706] border border-[#080706]/15 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#080706]/30`}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] contrast-[105%]"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Tags Bar in Monochromatic Black & Cream */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-[#080706]/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-[#F8F0E4] border border-[#F8F0E4]/15">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F8F0E4] backdrop-blur-md text-[11px] font-mono font-bold text-[#080706]">
                      {project.year}
                    </span>
                  </div>

                  {/* Center Floating Hover Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F0E4] text-[#080706] font-bold text-xs uppercase tracking-wider shadow-2xl">
                      <Eye className="w-4 h-4" />
                      <span>View Case Study</span>
                    </div>
                  </div>

                  {/* Bottom Mobile Project Name on Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 md:hidden">
                    <span className="font-editorial text-xl font-bold text-[#F8F0E4]">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Card Meta Details Below Image */}
                <div className="mt-4 pt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-[#080706] uppercase group-hover:text-[#080706]/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#080706]/65 mt-0.5 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-[#080706]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#080706] group-hover:border-[#080706] group-hover:text-[#F8F0E4]">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fictional Showcase Notice Badge */}
        <div className="mt-16 text-center">
          <p className="text-[11px] font-mono text-[#080706]/50 uppercase tracking-widest">
            ✦ PROPRIETARY DEMONSTRATION ARCHIVE • CRAFTED EXCLUSIVELY FOR EKAM SOCIAL MEDIA AGENCY
          </p>
        </div>
      </div>
    </section>
  );
};
