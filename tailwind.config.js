/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ['Calibri', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}