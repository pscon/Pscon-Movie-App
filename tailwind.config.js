/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      colors: {
        primary: {
          black: "#04152d",
          black2: "#041226",
          black3: "#020c1b",
          blackLighter: "#1c4b91",
          blackLight: "#173d77",
        },
        secondary: {
          pink: "#da2f68",
          orange: "#f89e00",
        },
      },
    },
  },
  plugins: [],
};
