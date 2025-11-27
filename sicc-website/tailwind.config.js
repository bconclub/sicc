/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mother-pearl': '#F5EBD7',
        'red-inferno': '#4C2828',
        'mystic-navy': '#1B3A52',
        'chocolate-cremoso': '#6B4E3D',
        'muted-blue-gray': '#6B8399',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
