/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        earthGreen: "#1E7F43",
        earthLight: "#E8F5EE",
        earthDark: "#0F3D2E",
        earthBlue: "#1E5EFF",
        earthGray: "#F5F7F6",
      },
    },
  },
  plugins: [],
};
