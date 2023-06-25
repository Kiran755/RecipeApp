/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#ffb6b6',
        secondary: '#ff7474',
        navbar: "#ffb6B6",
        light: "rgba(247,140,140,0.3)"
      },
      boxShadow: {
        'md': '0 4px 10px 0px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
}

