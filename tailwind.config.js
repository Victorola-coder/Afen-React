/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // hero: "url('/images/meta.png')",
      },
      colors: {
        primary: '#02083F',
        secondary: '#FFD92D',
        tet: '#b9bddf',
        grey: '#3d3d3d',
        complement: '0fbee4',
      },
      fontFamily: {
        sat: ['Satoshi', 'sans-serif'],
        coc: ['Cocogoose Classic Trial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
