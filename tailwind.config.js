/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.{liquid, json}",
    "./layout/*.{liquid, json}",
    "./section/*.{liquid, json}",
    "./snippents/*.{liquid, json}",
    "./templates/*.{liquid, json}",
    "./templates/ustomers*.{liquid, json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
