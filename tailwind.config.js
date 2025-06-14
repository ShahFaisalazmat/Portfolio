/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00f0ff',
        secondary: '#111',
        accent: '#00f0ff',
        background: {
          dark: '#000',
          light: '#111',
          medium: '#222',
        },
        text: {
          primary: '#fff',
          secondary: '#ccc',
          accent: '#00f0ff',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      },
      transitionDuration: {
        '600': '600ms',
      }
    },
  },
  plugins: [],
};