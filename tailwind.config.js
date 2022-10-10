/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#191921',
          red: '#F94F4F'
        },
        white: '#FFFFFF'
      }
    },
  },
  plugins: [],
}
