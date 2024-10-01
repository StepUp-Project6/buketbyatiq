/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // font untuk judul make font-serif
        playfair: ["Playfair Display", "sans-serif"], //font untuk body
        timesNewRoman: ["Times New Roman", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#193446",
      }
    },
  },
  plugins: [],
};