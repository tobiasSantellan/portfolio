/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        custom: "0 10px 10px rgba(1, 190, 149, 0.439216)",
        // custom:  "0 10px 10px rgba(1,190,149,.317647)"
      },
      colors: {
        "deep-blue": "#010026",
        blue: "#191926",
        red: "#DC4492",
        green: "#01be96",
        secondgreen: "#01ae99",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(25,25,35,1) 0%, rgba(0,212,255,1) 100%)",

        "gradient-rainblue":
          "linear-gradient(90deg, rgba(0,169,143,1) 0%, rgba(25,25,35,1) 100%);",

        "gradient-blue":
          "linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
