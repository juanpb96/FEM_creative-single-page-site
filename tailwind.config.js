/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255, 255, 255, .1) 15%, rgba(255, 255, 255, .4) 80%, rgba(255, 255, 255, 1) 100%)',
        'design-gradient': 'linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 5%, rgba(255,255,255,0.3) 6%, rgb(255, 255, 255) 7%)',
        'image-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%);'
      },
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
      width: {
        'screen-absolute': 'calc(100vw + 23px)' 
      },
      maxWidth: {
        'primary': '1110px',
        'mobile': 'calc(100% - 24px * 2)',
        'tablet': '768px',
        'desktop': '1440px'
      },
      spacing: {
        'screen-center': 'calc(-50vw + 50%)'
      },
      fontSize: {
        base: ['15px', '25px'],
        'lg': ['32px', '40px'],
        '2xl': ['80px', '88px'],
        'base-desktop': ['18px', '32px'],
        'lg-desktop': ['56px', '64px']
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
