/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      backgroundImage: (theme) => ({
        "gradient-custom": `linear-gradient(98.37deg, ${theme(
          "colors.orange.500"
        )} 0.99%, ${theme("colors.pink.500")} 100%)`,
      }),
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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
