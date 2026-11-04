import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { EkamWordmark } from './EkamWordmark';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080706]/95 backdrop-blur-md border-b border-[#F8F0E4]/10 py-4 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Authentic EKAM Wordmark Logo from Image 2 */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2 cursor-pointer select-none text-[#F8F0E4] hover:text-[#FAF5EE] transition-colors"
            aria-label="EKAM Creative Agency Home"
          >
            <EkamWordmark size="sm" />
            <span className="hidden sm:inline-block text-[10px] tracking-widest font-mono text-[#A49B8F] uppercase border-l border-[#F8F0E4]/15 pl-2.5 py-0.5 ml-1">
              Social Media Agency
            </span>
          </a>

          {/* Desktop Navigation Links in Cream */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11100E]/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#F8F0E4]/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-xs md:text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#F8F0E4] font-semibold'
                      : 'text-[#A49B8F] hover:text-[#F8F0E4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F8F0E4]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Cream Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                else onOpenContact();
              }}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F8F0E4] text-[#080706] text-xs md:text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:bg-[#FAF5EE] hover:shadow-[0_0_20px_rgba(248,240,228,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let's Talk
                <ArrowUpRight className="w-4 h-4 text-[#080706] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#11100E] border border-[#F8F0E4]/15 text-[#F8F0E4] hover:bg-[#161513] transition-colors focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer in Black & Cream */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080706]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-28 pb-10 px-8 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F8F0E4]/10">
              <div className="flex items-center gap-2">
                <EkamWordmark size="sm" />
                <span className="text-[9px] tracking-widest font-mono text-[#A49B8F] uppercase border-l border-[#F8F0E4]/15 pl-2 py-0.5">
                  Social Media Agency
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#A49B8F] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#F8F0E4]" />
                <span>Menu</span>
              </div>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-editorial text-3xl font-bold tracking-tight text-[#F8F0E4] hover:text-[#FAF5EE] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#A49B8F] group-hover:text-[#F8F0E4]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#F8F0E4]/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#F8F0E4] text-[#080706] font-semibold text-base shadow-lg hover:bg-[#FAF5EE]"
            >
              Let's Talk
              <ArrowUpRight className="w-5 h-5 text-[#080706]" />
            </button>

            <div className="flex items-center justify-between text-xs text-[#A49B8F] pt-2 font-mono">
              <span>ekamagency01@gmail.com</span>
              <span>Available Q2 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
