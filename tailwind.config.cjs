/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      container: {
        xl: "1220px",
      },
      colors: {
        neutral: {
          800: "#333333",
        },
      },
    },
  },
  plugins: [require(`@tailwindcss/line-clamp`)],
};
