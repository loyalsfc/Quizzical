/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey: "#F4F3F6",
        'grey-100': "#747475",        
        'green-100': "#31CD63",
        'dark-100': "#060710",
        'green-200': "#45C486",
        primary: "#EDE8E3",
      }
    },
  },
  plugins: [],
}
