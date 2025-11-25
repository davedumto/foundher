/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#7D2638',
        burgundy: '#5C1A26',
        'rose-gold': '#D4A574',
        blush: '#F5E6E8',
        mauve: '#9B7B8A',
        'dusty-rose': '#C19A9A',
        champagne: '#F8F5F1',
        ivory: '#FFFBF5',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Cagliostro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}