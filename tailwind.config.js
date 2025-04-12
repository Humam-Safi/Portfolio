/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-secondary': '#1f1f1f',
        'accent': '#6366f1'
      }
    },
  },
  plugins: [],
}