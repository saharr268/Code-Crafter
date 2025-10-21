/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["BYekan", "sans-serif"],
      },
      colors: {
        primary: {
          dark: "#009C9D",
          deep: "#03C0C1",
          DEFAULT: "#00B6B8",
          soft: "#03DFDC",
          light: "#06FFFF",
          muted: "#E9FDFD",
        },
        background: {
          dark: "#0F1010",
          card: "#F5F5F5",
        },
        text: {
          heading: "#1A1D1D",
          body: "#2A2D2D",
          light: "#EBFBFB",
        },
        grey: {
          soft: "#EEEEEE",
        },
        accent: {
          deep: "#9638AE",
          DEFAULT: "#BC58D9",
          soft: "#B890F6",
          light: "#EEC4F9",
        },
      },
      keyframes: {
        voicebar: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        voicebar: "voicebar 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
