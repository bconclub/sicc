/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F5EBD7',
        'red-inferno': '#4C2828',
        'mystic-navy': '#1B3A52',
        'chocolate': '#6B4E3D',
        'blue-gray': '#6B8399',
        // Keep old names for backward compatibility
        'mother-pearl': '#F5EBD7',
        'chocolate-cremoso': '#6B4E3D',
        'muted-blue-gray': '#6B8399',
      },
      fontFamily: {
        sans: ['Arimo', 'sans-serif'],
        heading: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
