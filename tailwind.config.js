/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // Pure Midnight
        'pixel-text': '#00f2ff', // Neon Cyan
        'pixel-accent': '#00f2ff',
        'pixel-pink': '#ff0055',
        'pixel-border': '#1a1a1a',
        'pixel-card': '#0c0c0c',
        'terminal-text': '#00f2ff',
        'terminal-dim': '#444444',
        'terminal-border': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['Silkscreen', 'cursive'],
        retro: ['VT323', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px 0px #000000',
        'pixel-hover': '2px 2px 0px 0px #000000',
        'neon': '0 0 10px rgba(0, 242, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
