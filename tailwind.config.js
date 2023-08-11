/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        markazi: ['Markazi', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-img': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '75%': { transform: 'rotate(-270deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 13s linear infinite',
        'rotate-img': 'rotate-img 13s linear infinite',
      },
      colors: {
        "mountain-meadow": {
          DEFAULT: "#10B981",
          50: "#D7FCEF",
          100: "#C4FAE8",
          200: "#9EF7D9",
          300: "#79F3CB",
          400: "#53F0BC",
          500: "#2EEDAE",
          600: "#13DF9B",
          700: "#10B981",
          800: "#0C855D",
          900: "#075239",
          950: "#053827",
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
