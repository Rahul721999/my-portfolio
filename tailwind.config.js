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
    screens: {
      'mobile' : '850px',
      'tablet' : '1023px',
      'laptop' : '1279px',
      'desktop' : '1535px',
    },
  }
  },
  plugins: [],
}
