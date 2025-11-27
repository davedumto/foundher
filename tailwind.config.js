/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#420806',
        burgundy: '#420806',
        'rose-gold': '#FDE59B',
        blush: '#F9F9F9',
        mauve: '#420806',
        'dusty-rose': '#F8D27F',
        champagne: '#F9F9F9',
        ivory: '#F9F9F9',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Cagliostro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}