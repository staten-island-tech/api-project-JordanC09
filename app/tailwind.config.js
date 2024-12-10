// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };
/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "night"],
  },
};
