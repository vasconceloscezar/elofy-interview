/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      "e-primary": "#0D54DF",
      "e-secondary": "#FD4FC4",
      "e-text": "#233043",
    },
    extend: {
      fontFamily: {
        sans: ["Circular Std Book", "sans-serif"],
      },
    },
  },
  plugins: [],
};
