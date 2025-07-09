/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cottage-cream': '#FEF7E0',
        'warm-brown': '#8B4513',
        'sage-green': '#9CAF88',
        'rose-pink': '#F4C2C2',
        'lavender': '#E6E6FA',
        'honey-yellow': '#F4E4BC',
        'rust-red': '#B7410E',
      },
      fontFamily: {
        'handwriting': ['Dancing Script', 'cursive'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

