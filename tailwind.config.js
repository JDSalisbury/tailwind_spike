const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.green,
        cyan: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
