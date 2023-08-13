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
        'mountain-meadow': {
          DEFAULT: '#10B981',
          50: '#D7FCEF',
          100: '#C4FAE8',
          200: '#9EF7D9',
          300: '#79F3CB',
          400: '#53F0BC',
          500: '#2EEDAE',
          600: '#13DF9B',
          700: '#10B981',
          800: '#0C855D',
          900: '#075239',
          950: '#053827',
        },
      },
      backgroundImage: {
        cat: 'url(https://i.pinimg.com/736x/69/2f/35/692f3538fe4e900312f06bae72cef852.jpg)',
        cats: 'url(https://t3.ftcdn.net/jpg/04/53/92/04/360_F_453920448_yMcff4E8ctdXQQegdaQ7WcXnHM3y3aMM.jpg)',
        portfolio1: 'url(https://fleurbudget.com/fleur_website.png)',
        portfolio2:
          'url(https://www.masterslider.com/wp-content/uploads/sites/5/2017/10/Mobile-App-Presentation-1.jpg)',
        portfolio3:
          'url(https://www.masterslider.com/wp-content/uploads/sites/5/2017/10/Mobile-App-Presentation-1.jpg)',
        portfolio4:
          'url(https://elements-cover-images-0.imgix.net/7fce7a4e-bf52-4408-8406-f5370f5e22cb?auto=compress%2Cformat&fit=max&w=433&s=c71b01c32e339a9ff7818285b4dc32f9)',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
