/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#228b22",
        "custom-yellow": "#BAA333",
      },
      backgroundImage: {
        "hero-background": "url('/assets/global-worming.webp')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
