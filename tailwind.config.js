/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111827', // bg-gray-900
        'dark-card': '#1F2937', // bg-gray-800
        'brand-purple': '#8B5CF6',
        'brand-emerald': '#10B981',
        'brand-blue': '#3B82F6',
      }
    },
  },
  plugins: [],
}
