/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lol-gold': '#C8AA6E',
        'lol-blue': '#0AC8B9',
        'lol-dark': '#010A13',
        'tier-s': '#FFD700',
        'tier-a': '#22C55E',
        'tier-b': '#3B82F6',
        'tier-c': '#6B7280',
      }
    },
  },
  plugins: [],
}
