/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        primary: "var(--color-primary)",
        "gray-back": "var(--color-gray-back)",
        "gray-dark": "var(--color-gray-dark)",
        "gray-medium": "var(--color-gray-medium)",
        "gray-light": "var(--color-gray-light)",
      }
    },
  },
  plugins: [],
}

