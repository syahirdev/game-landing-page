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
      }
    }
  },
  plugins: [
    require("./src/plugins/scrollbar")
  ]
};
