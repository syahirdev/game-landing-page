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
        avenir: ["Avenir"]
      },
      colors: {
        "nz-black": "#121212",
        "nz-purple": "#A168DF",
        "nz-purple-dark": "#772BCB",
        "greymouth": "#444444"
      }
    }
  },
  plugins: [
    require("./src/plugins/scrollbar")
  ]
};
