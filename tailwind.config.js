/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        'primary-blue': '#51d0de',
        'primary-purple': '#bf4aa8',
        'primary-white': '#d9d9d9',
        'primary-black': '#191923'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

