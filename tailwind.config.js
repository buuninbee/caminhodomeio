/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk'], 
        'serif': ['Lexend']
      },
      colors: {
        primary: '#ffffff',
        onPrimary: '#000000',
        onSurface: '#212121',
        segundary: '#E1BF09'
      }
    },
  },
  plugins: [],
}

