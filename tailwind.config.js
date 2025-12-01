/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          dark: 'rgba(15, 23, 42, 0.45)',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        accent: {
          1: '#3DD6C9',
          2: '#A78BFA',
        },
        text: {
          light: '#E8EEF6',
          dark: '#0F1724',
        },
      },
      backgroundColor: {
        'glass-light': 'var(--glass-light)',
        'glass-dark': 'var(--glass-dark)',
      },
      borderColor: {
        'glass-border': 'var(--glass-border)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};