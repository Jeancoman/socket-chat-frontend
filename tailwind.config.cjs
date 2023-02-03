/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "right-to-center": {
          "0%": { right: "50%" },
          "25%": { right: "25%" },
          "50%": { right: "12%" },
          "75%": { right: "6%" },
          "100%": { right: "0%" },
        },
        "right-to-left": {
          "0%": { right: "0%" },
          "6%": { right: "6%" },
          "12%": { right: "12%" },
          "25%": { right: "25%" },
          "50%": { right: "50%" },
          "75%": { right: "75%" },
          "100%": { right: "100%"},
        },
      },
      animation: {
        "right-to-center": "right-to-center 0.1s ease-in-out",
        "right-to-left": "right-to-left 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
