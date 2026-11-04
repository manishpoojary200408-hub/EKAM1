import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { EkamWordmark } from './EkamWordmark';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'Why EKAM', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X (Twitter)', href: 'https://x.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Awwwards', href: 'https://awwwards.com' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080706] text-[#F8F0E4] pt-20 pb-12 border-t border-[#F8F0E4]/15 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#F8F0E4]/[0.025] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Section: Wordmark & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F8F0E4]/10">
          <div className="lg:col-span-6 space-y-5">
            {/* Authentic EKAM Wordmark from Image 2 */}
            <div className="flex items-center gap-2">
              <EkamWordmark size="md" />
            </div>

            {/* Short Brand Statement */}
            <p className="text-base sm:text-lg text-[#E9DFD0]/80 max-w-md font-normal leading-relaxed">
              An independent creative &amp; digital agency helping ambitious brands turn
              ideas into identities and digital experiences that make an impact.
            </p>
          </div>

          {/* Quick Links & Socials in Cream */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#A49B8F] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-sm text-[#E9DFD0]/75 hover:text-[#F8F0E4] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] text-[#F8F0E4] opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#A49B8F] block mb-4">
              Social Channels
            </span>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#E9DFD0]/75 hover:text-[#F8F0E4] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A49B8F] group-hover:text-[#F8F0E4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A49B8F]">
          <p className="text-center sm:text-left">
            © 2026 EKAM. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline-flex items-center gap-1 text-[#A49B8F]/80">
              Engineered with <span className="text-[#F8F0E4] font-bold">Precision</span> &amp; Creative Vigor
            </span>

            {/* Back to Top Interaction in Cream */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161513] hover:bg-[#1C1A17] border border-[#F8F0E4]/15 text-[#F8F0E4] transition-all text-xs uppercase tracking-wider shadow-md"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <div className="w-5 h-5 rounded-full bg-[#F8F0E4] text-[#080706] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUp className="w-3 h-3" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
