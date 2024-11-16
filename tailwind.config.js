/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/heroimage.jpg')",
        'vector1':"url('/Vector1.png')"
      }
    },
  },
  plugins: [],
}