/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        gray: '#a3a3a3',
      }
    },
    screens: {
      xs: '425px',
      // small mobile

      sm: '576px',
      // mobile

      md: '768px',
      // tablet

      lg: '992px',
      // big tablet + small laptop

      xl: '1200px',
      // laptop

      mxl: '1366px',
      // laptop

      xxl: '1500px'
      // big laptop + desktop
    }
  },
  plugins: [],
}
