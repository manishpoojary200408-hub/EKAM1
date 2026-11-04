import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'BRAND STRATEGY',
    'DIGITAL EXPERIENCES',
    'CREATIVE DIRECTION',
    'PERFORMANCE MARKETING',
    'EDITORIAL CONTENT',
    'SOCIAL ARCHITECTURE',
    'IDENTITY SYSTEMS',
    'IMMERSIVE ECOMMERCE',
  ];

  return (
    <div className="w-full py-5 bg-[#080706] overflow-hidden border-y border-[#F8F0E4]/10 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 4 }).map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center gap-8 mx-4">
            {items.map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className="font-editorial text-base md:text-lg font-bold tracking-wider text-[#F8F0E4]/90 uppercase">
                  {item}
                </span>
                <span className="text-[#F8F0E4]/40 text-xs font-mono">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
