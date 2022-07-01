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
        "greymouth": "#444444"
      }
    }
  },
  plugins: []
};
