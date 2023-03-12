/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:`480px`,
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {

      colors:{

      },
      fontFamily:{
        sans:['Josein Sans','sans-serif'],
        alata:['Alata'],
      },
      letterSpacing: {
        widest:'.3em'
      },
    },
  },
  plugins: [],
}
