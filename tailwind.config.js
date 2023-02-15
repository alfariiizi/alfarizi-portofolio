/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        pixel: '"Press Start 2P"',
        aboreto: "Aboreto",
        "roboto-mono": '"Roboto Mono"',
      },
    },
  },
  plugins: [],
};
