module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: {
          100: "#d1d6da",
          200: "#b6bdc4",
          300: "#9fa9b3",
          500: "#727d87",
          600: "#5c6874",
          700: "#4b5665",
          800: "#2c384a",
          900: "#212731",
          "600_01": "#626e79",
        },
        gray: { 50: "#f3f9ff", 100: "#f2f4f7", 300: "#e1e4e6", 400: "#babec3", "50_01": "#fbfcfd" },
        amber: { 500: "#ffb80f" },
        blue: { 500: "#1b88f4" },
        yellow: { 900: "#ff7724" },
        light_blue: { 900: "#074786" },
        red: { 50: "#fff4ed", 400: "#ef4c5d" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
