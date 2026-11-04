/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Black & Cream Palette
        'brand-black': '#080706',         // Primary Black
        'brand-black-deep': '#11100E',    // Deep Black
        'brand-black-card': '#161513',    // Elevated Card Black
        'brand-black-subtle': '#1F1D1A',  // Subtle Black Border/Surface
        'brand-cream-logo': '#F8F0E4',    // EKAM Logo Cream
        'brand-cream': '#F5EBDD',         // Soft Cream
        'brand-cream-secondary': '#E9DFD0', // Secondary Cream
        'brand-cream-light': '#FAF5EE',   // Bright Cream Highlight
        'brand-cream-muted': '#A49B8F',   // Muted Cream / Warm Grey
        'brand-cream-dark': '#38342E',    // Deep Warm Border in Black Mode
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.25em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
