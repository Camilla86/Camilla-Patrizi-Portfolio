import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#05070F',
          900: '#0B1330',
          800: '#101B45',
          700: '#182658',
        },
        electric: {
          500: '#2F5CFF',
          400: '#5B7CFF',
          300: '#8FA6FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(47,92,255,0.25) 0%, rgba(5,7,15,0) 70%)',
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
