/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pokeFont': ['pokeFont']
    },
    extend: {
    width: {
      '160': '160px',
      '37': '37rem'
    },
    height: {
      '219': '219px'
    }
  }},
  plugins: [],
}
