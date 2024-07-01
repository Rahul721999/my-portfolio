/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-theme': '#081b29',
      'light-theme' : '#ffffff',
      'navbar-font-color' : '#ededed',
      'navbar-font-hover' : '#00abf0'
    },
  },
  plugins: [],
}
