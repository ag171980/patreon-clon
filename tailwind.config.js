/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    listStyleType:{
      circle:'circle'
    },
    extend: {},
    screens: {
      'xxs': '320px',
      'xs': '425px',
      'xsm': '550px',
      'sm': '640px',
      'md': '768px',
      'tablet': '965px',
      'lg': '1024px',
      'mxl': '1165px',
      'xl': '1290px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}