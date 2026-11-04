import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Instagram, Linkedin, Mail, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ContactFormData } from '../types';

interface ContactProps {
  selectedServicePreset?: string | null;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    services: selectedServicePreset ? [selectedServicePreset] : ['Brand Strategy'],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Available service tags
  const serviceOptions = [
    'Brand Strategy',
    'Digital Marketing',
    'Content & Storytelling',
    'Creative Direction',
    'Social Media Management',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.company.trim()) {
      errs.company = 'Please enter your company or brand name.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please tell us briefly about your project or goals.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic sleek submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory luxury black & cream confetti
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#F8F0E4', '#F5EBDD', '#E9DFD0', '#D6C7B2', '#080706'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@ekam.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      services: ['Brand Strategy'],
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#080706] text-[#F8F0E4] relative overflow-hidden border-t border-[#F8F0E4]/10">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8F0E4]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headings & Direct Contact Information */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#F8F0E4]/40"></span>
              <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-[#A49B8F] uppercase">
                05 / INITIATE CONTACT
              </span>
            </div>

            {/* Heading required by prompt */}
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F8F0E4] uppercase leading-[1.02]">
              HAVE A BIG IDEA? <br />
              <span className="font-luxury italic lowercase font-normal text-5xl sm:text-6xl md:text-7xl tracking-normal text-[#FAF5EE]">
                let's make
              </span> <br />
              IT HAPPEN.
            </h2>

            {/* Supporting text required by prompt */}
            <p className="mt-6 text-base sm:text-lg text-[#E9DFD0]/85 leading-relaxed">
              Have a project in mind? Let's talk about what we can create together.
            </p>

            {/* Direct Channel Cards in Black & Cream */}
            <div className="mt-10 space-y-4">
              {/* Email Card with Copy Action */}
              <div className="p-5 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/30 transition-all">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#161513] border border-[#F8F0E4]/15 flex items-center justify-center text-[#F8F0E4] group-hover:bg-[#F8F0E4] group-hover:text-[#080706] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#A49B8F] uppercase tracking-wider block">
                      Direct Inquiries
                    </span>
                    <a
                      href="mailto:hello@ekam.com"
                      className="font-editorial text-base sm:text-lg font-bold text-[#F8F0E4] hover:underline"
                    >
                      hello@ekam.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-[#161513] hover:bg-[#1C1A17] text-[#F8F0E4] border border-[#F8F0E4]/10 transition-colors text-xs font-mono flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#F8F0E4]" />
                      <span className="text-[#F8F0E4] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A49B8F]" />
                      <span className="hidden sm:inline text-[#A49B8F]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels Required by Prompt */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/30 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#F8F0E4] group-hover:text-[#FAF5EE] transition-colors" />
                    <span className="text-xs font-bold text-[#F8F0E4] uppercase">Instagram</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A49B8F] group-hover:text-[#F8F0E4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 shadow-sm flex items-center justify-between group hover:border-[#F8F0E4]/30 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#F8F0E4] group-hover:text-[#FAF5EE] transition-colors" />
                    <span className="text-xs font-bold text-[#F8F0E4] uppercase">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A49B8F] group-hover:text-[#F8F0E4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Availability Badge in Cream & Black */}
            <div className="mt-8 p-4 rounded-2xl bg-[#11100E] border border-[#F8F0E4]/15 text-[#F8F0E4] flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8F0E4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F8F0E4]"></span>
              </span>
              <p className="text-xs font-mono tracking-wide text-[#E9DFD0]">
                Currently booking select projects for <span className="text-[#F8F0E4] font-bold">Q2 / Q3 2026</span>. Average response: &lt; 4 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form in Deep Black & Cream */}
          <div className="lg:col-span-7">
            <div className="bg-[#11100E] rounded-3xl p-8 sm:p-10 border border-[#F8F0E4]/20 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success Feedback Banner */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#F8F0E4] flex items-center justify-center text-[#080706] shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="max-w-md space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#A49B8F]">
                        Inquiry Received
                      </span>
                      <h3 className="font-editorial text-3xl font-extrabold uppercase text-[#F8F0E4]">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-[#E9DFD0]/85 leading-relaxed">
                        We have logged your briefing for <span className="font-bold text-[#F8F0E4]">{formData.company}</span>. Our partners will review your requirements and reach out at <span className="underline font-mono text-xs text-[#F8F0E4]">{formData.email}</span> within 24 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#161513] border border-[#F8F0E4]/10 text-xs font-mono text-[#A49B8F] max-w-sm w-full text-left">
                      <div><strong className="text-[#F8F0E4]">Selected Disciplines:</strong> {formData.services.join(', ') || 'General Consultation'}</div>
                      <div className="mt-1"><strong className="text-[#F8F0E4]">Status:</strong> Queued for Creative Review</div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#F8F0E4] text-[#080706] text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF5EE] transition-colors"
                    >
                      Submit Another Brief
                    </button>
                  </motion.div>
                ) : (
                  /* Main Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-[#F8F0E4]/10">
                      <h3 className="font-editorial text-xl font-bold uppercase text-[#F8F0E4]">
                        Project Briefing
                      </h3>
                      <span className="text-[11px] font-mono text-[#A49B8F] uppercase">
                        Fields marked * are required
                      </span>
                    </div>

                    {/* Services Multi-Select Interest Pills in Black & Cream */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F0E4] font-semibold mb-3">
                        Services of Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((svc) => {
                          const isSelected = formData.services.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSelected
                                  ? 'bg-[#F8F0E4] text-[#080706] font-bold shadow-sm'
                                  : 'bg-[#161513] text-[#F8F0E4]/70 border border-[#F8F0E4]/15 hover:bg-[#1C1A17] hover:text-[#F8F0E4]'
                              }`}
                            >
                              {svc} {isSelected ? '✓' : '+'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Two-Column Name & Email Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F0E4] font-semibold mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="Elena Vance"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#161513] border text-[#F8F0E4] placeholder:text-[#A49B8F]/50 text-sm focus:outline-none focus:border-[#F8F0E4] transition-all ${
                            errors.name ? 'border-red-400 bg-red-950/20' : 'border-[#F8F0E4]/20'
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F0E4] font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="elena@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#161513] border text-[#F8F0E4] placeholder:text-[#A49B8F]/50 text-sm focus:outline-none focus:border-[#F8F0E4] transition-all ${
                            errors.email ? 'border-red-400 bg-red-950/20' : 'border-[#F8F0E4]/20'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Company Input */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F0E4] font-semibold mb-2">
                        Company or Brand *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: undefined });
                        }}
                        placeholder="Vance Technologies / Solo Venture"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#161513] border text-[#F8F0E4] placeholder:text-[#A49B8F]/50 text-sm focus:outline-none focus:border-[#F8F0E4] transition-all ${
                          errors.company ? 'border-red-400 bg-red-950/20' : 'border-[#F8F0E4]/20'
                        }`}
                      />
                      {errors.company && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.company}</p>
                      )}
                    </div>

                    {/* Project Details Textarea */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#F8F0E4] font-semibold mb-2">
                        Project Details *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Briefly describe your objectives, timeline, vision, or current bottlenecks..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#161513] border text-[#F8F0E4] placeholder:text-[#A49B8F]/50 text-sm focus:outline-none focus:border-[#F8F0E4] transition-all resize-none ${
                          errors.message ? 'border-red-400 bg-red-950/20' : 'border-[#F8F0E4]/20'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button Required by Prompt: "SEND INQUIRY ↗" in Cream */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#F8F0E4] text-[#080706] font-bold text-sm sm:text-base uppercase tracking-wider shadow-2xl transition-all duration-300 hover:bg-[#FAF5EE] hover:scale-[1.01] active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#080706] border-t-transparent rounded-full animate-spin" />
                            <span>TRANSMITTING BRIEF...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span>SEND INQUIRY</span>
                            <span className="w-6 h-6 rounded-full bg-[#080706] flex items-center justify-center text-[#F8F0E4] transition-transform duration-300 group-hover:rotate-45">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        )}
                      </button>

                      <p className="mt-3 text-center text-[11px] font-mono text-[#A49B8F]">
                        🔒 Frontend Demonstration: Submissions are validated and handled client-side.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
