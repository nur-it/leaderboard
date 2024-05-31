/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100vw",
          "1180px": "1180px",
        },
      },
      fontSize: {
        11: "11px",
      },
      colors: {
        primary: {
          DEFAULT: "#161225",
          active: "#1B162D",
          para: "#433D57",
          bg: "#1C1526",
        },
        sky: {
          10: "#08A0E9",
          text: "#1387BF",
          btnBg: "rgba(8, 160, 233, 0.5)",
        },
        lime: {
          10: "#00E701",
          text: "#11A912",
          btnBg: " rgba(0, 231, 1, 0.5)",
        },
      },
    },
  },
  plugins: [],
};
