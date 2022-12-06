/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'supa' : '0 100px 100px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}
