/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        'background-secondary': '#111111',
        gold: '#D4AF37',
        beige: '#E7D8C9',
        'soft-white': '#F5F5F5',
        emerald: '#0E3B2E'
      },
      fontFamily: {
        heading: ['Clash Display', 'General Sans', 'Satoshi', 'sans-serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(to bottom, transparent, #0B0B0B)',
      }
    },
  },
  plugins: [],
}
