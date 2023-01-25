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
        'active': {
          black: '#434356',
          red: '#FF9393'
        },
        white: '#FFFFFF'
      },
      maxWidth: {
        'mobile': 'calc(100% - 24px * 2)'
      },
      fontSize: {
        base: ['15px', '25px']
      },
      keyframes: {
        'opacity-100': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'opacity-0': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        }
      },
      animation: {
        'opacity-100': 'opacity-100 .3s ease-in-out',
        'opacity-0': 'opacity-0 .3s ease-in-out'
      }
    },
  },
  plugins: [],
}
