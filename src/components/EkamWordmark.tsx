import React from 'react';
import logoCreamHd from '../assets/ekam-logo-cream-hd.png';
import logoDarkHd from '../assets/ekam-logo-dark-hd.png';

interface EkamWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'cream' | 'dark';
  children?: React.ReactNode;
}

export const EkamWordmark: React.FC<EkamWordmarkProps> = ({
  className = '',
  size = 'md',
  variant = 'cream',
  children,
}) => {
  const logoSrc = variant === 'dark' ? logoDarkHd : logoCreamHd;

  if (size === 'sm') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={logoSrc}
          alt="EKAM"
          className="h-6 sm:h-7 w-auto object-contain pointer-events-none"
          draggable={false}
        />
      </div>
    );
  }

  if (size === 'md') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={logoSrc}
          alt="EKAM"
          className="h-9 sm:h-11 w-auto object-contain pointer-events-none"
          draggable={false}
        />
      </div>
    );
  }

  if (size === 'lg') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={logoSrc}
          alt="EKAM"
          className="h-14 sm:h-18 md:h-20 w-auto object-contain pointer-events-none"
          draggable={false}
        />
      </div>
    );
  }

  // Hero Size: Grand, screen-spanning, breathtaking presentation inspired by Yatharth Social
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="EKAM"
        className="block h-auto w-auto max-w-[84vw] sm:max-w-[86vw] md:max-w-[88vw] max-h-[260px] sm:max-h-[340px] md:max-h-[440px] lg:max-h-[520px] xl:max-h-[580px] pointer-events-none drop-shadow-[0_12px_45px_rgba(248,240,228,0.2)] transition-transform duration-700 hover:scale-[1.01]"
        style={{ imageRendering: '-webkit-optimize-contrast' }}
        loading="eager"
      />
      {children}
    </div>
  );
};
