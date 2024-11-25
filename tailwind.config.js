/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins']
      },
      colors: {
        biru: '#2447F9',
        pink: '#F8549F',
        grey: '#222831'
      }
      // dropShadow: {
      //   "sm-shadow" : ""
      // }
    }
  },
  plugins: []
}
