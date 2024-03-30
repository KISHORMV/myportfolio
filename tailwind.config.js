/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(85, 81, 227)',
        'secondary':'rgb(2, 15, 39)'
      }
    },
    fontFamily:{
      'hero-font':'Sriracha'
    }
  },
  plugins: [],
}

