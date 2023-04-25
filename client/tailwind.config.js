/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx, tsx, js, ts}",
    "./public/index.html",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js, tsx, jsx, ts}",
    "./src/**/*.{html,js, tsx, jsx, ts}",
    "./storybook/**/*.{html,js, tsx, jsx, ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
