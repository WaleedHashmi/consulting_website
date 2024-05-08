/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          '50': '#f3f6f3',
          '100': '#e3e9e2',
          '200': '#c9d3c7',
          '300': '#a2b4a1',
          '400': '#789178',
          '500': '#577258',
          '600': '#425943',
          '700': '#354737',
          '800': '#2b3a2c',
          '900': '#243025',
          '950': '#141a15',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

