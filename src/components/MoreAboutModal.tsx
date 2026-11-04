import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
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
          className="relative w-full max-w-3xl max-h-[85vh] bg-[#11100E] text-[#F8F0E4] rounded-3xl overflow-y-auto shadow-2xl border border-[#F8F0E4]/20 z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#11100E]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#F8F0E4]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EkamWordmark size="sm" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A49B8F] ml-2">
                / About Us
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

          {/* Clean Content Area */}
          <div className="p-6 sm:p-8 md:p-10 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#080706] bg-[#F8F0E4] px-3 py-1 rounded inline-block font-bold">
                Social Media Agency
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#F8F0E4] leading-tight">
                Where Creativity Meets <br />
                <span className="font-luxury italic lowercase font-normal text-4xl sm:text-5xl md:text-6xl text-[#FAF5EE]">
                  digital growth.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#E9DFD0]/90 font-normal leading-relaxed pt-2">
                We help ambitious brands build powerful digital identities through strategic social media management, creative content, and impactful marketing. From building brand awareness to creating meaningful engagement, we turn your social presence into a platform for growth, connection, and success.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-[#F8F0E4]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#A49B8F]">
                Available for 2026 Collaborations
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartProject();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F8F0E4] text-[#080706] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#FAF5EE] transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-[#080706]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
