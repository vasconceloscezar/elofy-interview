/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
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
