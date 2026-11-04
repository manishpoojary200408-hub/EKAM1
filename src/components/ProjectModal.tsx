import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProjectWithContext: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartProjectWithContext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080706]/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#11100E] text-[#F8F0E4] rounded-3xl overflow-y-auto shadow-2xl border border-[#F8F0E4]/20 z-10 flex flex-col"
        >
          {/* Sticky Header Bar */}
          <div className="sticky top-0 z-20 bg-[#11100E]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#F8F0E4]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A49B8F]">
                {project.category}
              </span>
              <span className="text-[#F8F0E4]/30">•</span>
              <span className="font-mono text-xs font-bold text-[#F8F0E4]">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#161513] hover:bg-[#1C1A17] text-[#F8F0E4] border border-[#F8F0E4]/15 transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* Title & Tagline */}
            <div>
              <span className="font-mono text-xs text-[#080706] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#F8F0E4] inline-block mb-3">
                Case Study Archive
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold uppercase text-[#F8F0E4]">
                {project.title}
              </h2>
              <p className="mt-2 text-lg sm:text-xl text-[#E9DFD0]/90 font-normal">
                {project.tagline}
              </p>
            </div>

            {/* Hero Image Showcase */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full bg-[#080706] border border-[#F8F0E4]/15 shadow-inner">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover filter grayscale-[15%] contrast-[105%]"
              />
            </div>

            {/* Impact Highlights Grid in Monochromatic Black & Cream */}
            <div className="p-6 rounded-2xl bg-[#161513] border border-[#F8F0E4]/15 text-[#F8F0E4]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F8F0E4] uppercase tracking-widest mb-4">
                <TrendingUp className="w-4 h-4 text-[#F8F0E4]" />
                <span>Verified Impact &amp; Results</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.impact.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#080706] border border-[#F8F0E4]/15">
                    <span className="text-xs font-mono text-[#A49B8F] block">Key Result 0{idx + 1}</span>
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#FAF5EE] mt-1 block">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A49B8F] font-bold block">
                  01 / The Challenge
                </span>
                <p className="text-sm sm:text-base text-[#E9DFD0]/85 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A49B8F] font-bold block">
                  02 / The Strategic Solution
                </span>
                <p className="text-sm sm:text-base text-[#E9DFD0]/85 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Pills */}
            <div className="pt-6 border-t border-[#F8F0E4]/10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F8F0E4] font-bold mb-3">
                <Layers className="w-4 h-4 text-[#F8F0E4]" />
                <span>Engineered Deliverables</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#161513] border border-[#F8F0E4]/15 text-xs font-medium text-[#F8F0E4] flex items-center gap-1.5 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F8F0E4]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Modal CTA in Cream */}
            <div className="pt-8 border-t border-[#F8F0E4]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-[#A49B8F]">
                  Ready to create category-defining work like this?
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartProjectWithContext(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F8F0E4] text-[#080706] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#FAF5EE] transition-all"
              >
                <span>Request Similar Mandate</span>
                <ArrowUpRight className="w-4 h-4 text-[#080706]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
