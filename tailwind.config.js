/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const toRgba = (hexCode, opacity = 50) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const flattenColorPalette = (obj, sep = "-") =>
  Object.assign(
    {},
    ...(function _flatten(o, p = "") {
      return [].concat(
        ...Object.keys(o).map((k) =>
          typeof o[k] === "object" ? _flatten(o[k], k + sep) : { [p + k]: o[k] }
        )
      );
    })(obj)
  );

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
  plugins: [
    function ({ addUtilities, theme }) {
      const utilities = {
        ".bg-stripes": {
          backgroundImage:
            "linear-gradient(-45deg, var(--stripes-color) 12.50%, transparent 12.50%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.50%, transparent 62.50%, transparent 100%)",
          backgroundSize: "5.66px 5.66px",
        },
      };

      const addColor = (name, color) =>
        (utilities[`.bg-stripes-${name}`] = { "--stripes-color": color });

      const colors = flattenColorPalette(theme("backgroundColor"));
      for (let name in colors) {
        try {
          const [r, g, b, a] = toRgba(colors[name]);
          if (a !== undefined) {
            addColor(name, colors[name]);
          } else {
            addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`);
          }
        } catch (_) {
          addColor(name, colors[name]);
        }
      }

      addUtilities(utilities);
    },
  ],
};
