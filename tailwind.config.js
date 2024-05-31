/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "ranking-first":
          "linear-gradient(90deg, #161225 0%, #F19C4D 40.5%, #F19C4D 60.5%, #161225 100%)",
        "ranking-second":
          "linear-gradient(90deg, #30255D 0%, #DF8055 40.5%, #DF8055 60.5%, #30255D 100%)",
        "ranking-third":
          "linear-gradient(90deg, #161225 0%, #798BB4 40.5%, #798BB4 60.5%, #161225 100%)",
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
          "card-bg": "#181429",
          "timer-bg": "#1C1730",
          "timer-text": "#69698D",
        },
        sky: {
          10: "#08A0E9",
          text: "#1387BF",
          btnBg: "#08A0E9",
        },
        lime: {
          10: "#00E701",
          text: "#11A912",
          btnBg: "#00E701",
        },
        light: {
          text: "#CDCCD7",
        },
      },
    },
  },
  plugins: [],
};
