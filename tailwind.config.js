/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primitive tokens
        'obsidian': '#090909',
        'charcoal': '#111111',
        'graphite': '#1B1B1B',
        'crimson': '#D71935',
        'yellow': '#FFD43B',
        'warm-white': '#F3F0E8',
        'muted': '#A5A5A5',
        'border': '#303030',
        // Semantic aliases
        'bg-primary': '#090909',
        'bg-secondary': '#111111',
        'surface': '#1B1B1B',
        'accent-red': '#D71935',
        'accent-yellow': '#FFD43B',
        'text-primary': '#F3F0E8',
        'text-secondary': '#A5A5A5',
        'border-default': '#303030',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.75rem, 1vw, 0.875rem)',
        'fluid-base': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-lg': 'clamp(1rem, 2vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 7vw, 5rem)',
        'fluid-5xl': 'clamp(3rem, 10vw, 8rem)',
        'fluid-6xl': 'clamp(4rem, 15vw, 12rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
