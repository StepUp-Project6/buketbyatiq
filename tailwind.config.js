/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // font untuk judul make font-serif
        playfair: ["Playfair Display", serif], //font untuk body
      },
    },
  },
  plugins: [],
};