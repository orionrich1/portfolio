/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        cBlack: "#101014",
        cMain: "#7B4DFF",
        cMainSoft: "rgba(123, 77, 255, 0.16)",
        cSurface: "#1A1A20",
        cBorder: "#2B2B33",
      },
      fontFamily: {
        montserrat: ["Pretendard", "sans-serif"],
        noto: ["Pretendard", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
