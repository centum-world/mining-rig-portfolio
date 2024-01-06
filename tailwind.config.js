/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    
      fontFamily: {
        calibri: ['Calibri', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}