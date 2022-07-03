/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        avenir: ["Avenir"],
        "avenir-bold": ["Avenir Bold"]
      },
      colors: {
        "nz-black": "#121212",
        lupin: {
          normal: "#772BCB",
          dark: "#A168DF"
        },
        poroporo: "#430E7D",
        moeraki: "#BABABA",
        mawheranui: "#767676",
        alto: "#DADADA",
        greymouth: "#444444"
      },
      keyframes: {
        move: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "20%": { transform: "translateX(3px) translateY(-3px)" },
          "40%": { transform: "translateX(-2px) translateY(-1px)" },
          "60%": { transform: "translateX(3px) translateY(4px)" },
          "80%": { transform: "translateX(-4px) translateY(7px)" }
        }
      },
      animation: {
        move: "move 7s ease-in-out infinite",
        "move-alt": "move 10s ease-in-out infinite"
      }
    }
  },
  plugins: [
    require("./src/plugins/scrollbar")
  ]
};
