/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-green': '#4EE1A0',
        'portfolio-black': '#151515',
        'portfolio-bg-grey': '#242424',
        'portfolio-grey': '#D9D9D9',
      },
    },
  },
  plugins: [],
};
