/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
      },
      colors: {
        primary: '#10b981',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

