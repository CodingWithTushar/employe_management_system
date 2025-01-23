/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007BFF",
        red: "#FF5733",
        green: "#6BAA75",
        yellow: "#FFD700",
      },
    },
  },
  plugins: [],
}

