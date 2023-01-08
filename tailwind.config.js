/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        inter:  ["Inter","sans-serif"],
        mako:["mako","sans-serif"]
      }
    },
  },
  plugins: [],
}