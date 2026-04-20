/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        cBlack: "#121212",
        cMain: "#A3E635",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
