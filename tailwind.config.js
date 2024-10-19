/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f51b5',
        'primary-dark': '#303f9f',
      },
    },
  },
  plugins: [],
}

