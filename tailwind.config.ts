import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // Bagliore teal usato negli hero e nelle sezioni chiave del design "bianco + teal + nero".
        'radial-glow': 'radial-gradient(60% 60% at 50% 0%, rgba(20,184,166,0.16) 0%, rgba(255,255,255,0) 70%)',
        'radial-glow-dark': 'radial-gradient(60% 60% at 50% 0%, rgba(45,212,191,0.22) 0%, rgba(10,10,10,0) 70%)',
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
