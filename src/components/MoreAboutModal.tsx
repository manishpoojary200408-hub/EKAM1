import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Compass, Award, Globe2, Sparkles } from 'lucide-react';
import { EkamWordmark } from './EkamWordmark';

interface MoreAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject: () => void;
}

export const MoreAboutModal: React.FC<MoreAboutModalProps> = ({
  isOpen,
  onClose,
  onStartProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080706]/90 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#11100E] text-[#F8F0E4] rounded-3xl overflow-y-auto shadow-2xl border border-[#F8F0E4]/20 z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#11100E]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#F8F0E4]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EkamWordmark size="sm" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A49B8F] ml-2">
                / Agency Manifesto &amp; Origins
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#161513] hover:bg-[#1C1A17] text-[#F8F0E4] border border-[#F8F0E4]/15 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* Mission Statement */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#080706] bg-[#F8F0E4] px-3 py-1 rounded inline-block font-bold">
                Brand Positioning
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#F8F0E4] leading-tight">
                Singularity of Vision. <br />
                <span className="font-luxury italic lowercase font-normal text-4xl sm:text-5xl md:text-6xl text-[#FAF5EE]">
                  multiplicity of impact.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#E9DFD0]/90 font-normal leading-relaxed">
                In Sanskrit, <span className="font-bold text-[#F8F0E4]">EKAM</span> signifies oneness—the unified convergence of strategy, design, and technology. We exist because modern brands cannot thrive on disjointed agency handoffs where strategic thinkers, graphic designers, and technical developers work in isolated silos.
              </p>
            </div>

            {/* Three Pillars Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#161513] border border-[#F8F0E4]/15 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F0E4] flex items-center justify-center text-[#080706] font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg font-bold uppercase text-[#F8F0E4]">
                  Strategy First
                </h3>
                <p className="text-xs text-[#A49B8F] leading-relaxed">
                  Every typeface, color gradient, and layout decision is anchored in market economics, audience behavioral psychology, and positioning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161513] border border-[#F8F0E4]/15 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F0E4] flex items-center justify-center text-[#080706] font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg font-bold uppercase text-[#F8F0E4]">
                  Editorial Craft
                </h3>
                <p className="text-xs text-[#A49B8F] leading-relaxed">
                  We borrow the uncompromising aesthetic standards of European haute couture and Swiss brutalism, translating them into fluid interactive screens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161513] border border-[#F8F0E4]/15 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8F0E4] flex items-center justify-center text-[#080706] font-bold">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-lg font-bold uppercase text-[#F8F0E4]">
                  Global Velocity
                </h3>
                <p className="text-xs text-[#A49B8F] leading-relaxed">
                  Distributed studios in New York, London, and Bengaluru allow continuous 24-hour sprint execution without compromising deep creative synthesis.
                </p>
              </div>
            </div>

            {/* Studio Philosophy Grid */}
            <div className="p-8 rounded-3xl bg-[#080706] border border-[#F8F0E4]/15 text-[#F8F0E4] space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F8F0E4] uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-[#F8F0E4]" />
                <span>The EKAM Standard</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-[#E9DFD0]/85">
                <div className="border-l-2 border-[#F8F0E4] pl-4">
                  <strong className="text-[#F8F0E4] block font-editorial text-base uppercase">Bespoke Squads</strong>
                  We cap our roster to 6 active flagship accounts per quarter, ensuring partner-level immersion on every single deliverable.
                </div>
                <div className="border-l-2 border-[#F8F0E4] pl-4">
                  <strong className="text-[#F8F0E4] block font-editorial text-base uppercase">Future-Proof Architecture</strong>
                  From headless tech stacks to vectorized design systems, our work is engineered to scale seamlessly across decades.
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#F8F0E4]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#A49B8F]">
                Available for Q2 / Q3 2026 Mandates
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F8F0E4] text-[#080706] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#FAF5EE] transition-all"
              >
                <span>Initiate Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#080706]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
