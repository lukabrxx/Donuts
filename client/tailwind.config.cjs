/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '794px',
      'lg': '1024px',
      'xl': '1280px',
      "xxl": "1500px",
    },
    extend: {
      colors: {
        mainPink: "#e2619f",
        mainPinkHoverButton: "#d24787",
        mainText: "#313131"
      },
      fontFamily: {
        navbar:  ['Itim', 'cursive']
      },
      backgroundImage: {
        "bg": "url('../imges/bg.svg')"
      }
    },
  },
  plugins: [],
}