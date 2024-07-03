/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {colors: {
      'dark-theme': '#081b29',
      'light-theme' : '#ededed',
      'cyan' : '#00abf0'
    },
    letterSpacing:{
      'widest' : '1px',
    },
    zIndex:{
      '1':'1',
    },
    screens:{
      'mobile' : '576px',
      'tablet' : '860px',
      'laptop' : '1024px',
      'desktop' : '1280px',
    }}
  },
  plugins: [],
}
