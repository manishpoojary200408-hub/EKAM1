import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Instagram, Mail, MessageCircle } from 'lucide-react';

interface ContactProps {
  selectedServicePreset?: string | null;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ekamagency01@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#080706] text-[#F8F0E4] relative overflow-hidden border-t border-[#F8F0E4]/10">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#F8F0E4]/[0.025] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#F8F0E4]/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-[1px] bg-[#F8F0E4]/40" />
          <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#A49B8F] uppercase">
            05 / INITIATE CONTACT
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F8F0E4] uppercase leading-[1.02] mb-6"
        >
          HAVE A BIG IDEA?{' '}
          <span className="font-luxury italic lowercase font-normal tracking-normal text-[#FAF5EE]">
            let's make
          </span>{' '}
          IT HAPPEN.
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-[#E9DFD0]/80 leading-relaxed max-w-2xl mb-14"
        >
          Have a project in mind? Let's talk about what we can create together.
        </motion.p>

        {/* Contact Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8"
        >
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/35 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#161513] border border-[#F8F0E4]/15 flex items-center justify-center text-[#F8F0E4] group-hover:bg-[#F8F0E4] group-hover:text-[#080706] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A49B8F] uppercase tracking-wider block mb-0.5">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:ekamagency01@gmail.com"
                  className="font-editorial text-lg font-bold text-[#F8F0E4] hover:underline"
                >
                  ekamagency01@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2.5 rounded-lg bg-[#161513] hover:bg-[#1C1A17] text-[#F8F0E4] border border-[#F8F0E4]/10 transition-colors text-xs font-mono flex items-center gap-1.5"
              title="Copy email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#F8F0E4]" />
                  <span className="text-[#F8F0E4] font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A49B8F]" />
                  <span className="text-[#A49B8F]">Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/ekam.in_"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/35 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#161513] border border-[#F8F0E4]/15 flex items-center justify-center text-[#F8F0E4] group-hover:bg-[#F8F0E4] group-hover:text-[#080706] transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A49B8F] uppercase tracking-wider block mb-0.5">
                  Follow Us
                </span>
                <span className="font-editorial text-lg font-bold text-[#F8F0E4] uppercase">
                  Instagram
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#A49B8F] group-hover:text-[#F8F0E4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/917349122646"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/35 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#161513] border border-[#F8F0E4]/15 flex items-center justify-center text-[#F8F0E4] group-hover:bg-[#F8F0E4] group-hover:text-[#080706] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#A49B8F] uppercase tracking-wider block mb-0.5">
                  Chat With Us
                </span>
                <span className="font-editorial text-lg font-bold text-[#F8F0E4] uppercase">
                  WhatsApp
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-[#A49B8F] group-hover:text-[#F8F0E4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 text-[#F8F0E4] flex items-center gap-4 max-w-xl"
        >
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8F0E4] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F8F0E4]" />
          </span>
          <p className="text-xs font-mono tracking-wide text-[#E9DFD0]">
            Currently booking select projects for{' '}
            <span className="text-[#F8F0E4] font-bold">Q2 / Q3 2026</span>.
            Average response: &lt; 4 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
