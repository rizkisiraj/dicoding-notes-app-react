/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,js,jsx}",
    "./public/index.html"
  ],
  content: [
    "./src/**/*.{html,js}",
    "./src/components/**/*.{html,js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
