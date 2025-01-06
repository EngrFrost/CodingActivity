/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#913FE2',
        tertiary: '#222222',
      },
      textColor: {
        primary: '#FFFFFF',
        secondary: '#913FE2',
        muted: '#888888',
      }
    },
  },
  plugins: [],
} 