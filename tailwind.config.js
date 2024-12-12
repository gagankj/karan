/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        
        "register":"url('register.png')",
        "registerm":"url('register-mobile.png')",
        "footer":"url('footer.png')",
        "footerm":"url('footerm.png')"
      }
    },
  },
  plugins: [],
}