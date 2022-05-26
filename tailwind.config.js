module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },

    extend: {
      colors: {
        current: "var(--text-color)",
      },
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var( --fil-color-indicator)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--fill-color)",
        },
      },
    },
  },
  plugins: [],
};
