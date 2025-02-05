const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [], // Ensure paths to your files using Tailwind classes are included
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        popBlob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "flip-words": {
          "10%": { transform: "translateY(-112%)" },
          "25%": { transform: "translateY(-100%)" },
          "35%": { transform: "translateY(-212%)" },
          "50%": { transform: "translateY(-200%)" },
          "60%": { transform: "translateY(-312%)" },
          "75%": { transform: "translateY(-300%)" },
          "85%": { transform: "translateY(-412%)" },
          "100%": { transform: "translateY(-400%)" },
        },
      },
      animation: {
        "pop-blob": "popBlob 5s infinite ease-in-out",
        "flip-words": "flip-words 8s infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({});
    }),
  ],
};