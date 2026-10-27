/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#080a10',
          panel: '#111520',
          'panel-dark': '#0d111a',
          card: '#151b28',
          blue: '#63d6ff',
          'blue-dark': '#10263a',
          'blue-deep': '#183047',
          line: '#252c3b',
          'line-border': '#25475c',
          muted: '#9aa4b7',
          text: '#f4f7ff',
        },
        charcoal: {
          950: '#080a10',
          900: '#0d111a',
          850: '#111520',
          800: '#151b28',
          700: '#1e2536',
          600: '#252c3b',
        },
        neon: {
          lime: '#63d6ff', // re-pointed to theme blue for seamless branding
          'lime-dim': '#4ab0d9',
          cyan: '#63d6ff',
          blue: '#38bdf8',
          purple: '#818cf8',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        display: ['Syne', 'Clash Display', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        }
      }
    },
  },
  plugins: [],
}

