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
        "permanent-marker": '"Permanent Marker"',
      },
      colors: {
        primary: {
          100: "#ced3db",
          200: "#9da6b6",
          300: "#6d7a92",
          400: "#3c4d6d",
          500: "#0b2149",
          600: "#091a3a",
          700: "#07142c",
          800: "#040d1d",
          900: "#02070f",
        },
      },
    },
  },
  plugins: [],
};
