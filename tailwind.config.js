/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./script/*.js",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // Added path for Relume UI
  ],
  theme: {
    extend: {
      colors: {
        color1: "#00A3E0", // Solid light blue
        color2: "#4D4D4D", // Solid dark gray
        color3: "#A6A6A6", // Solid light gray
        color4: "#3E065F", // Gradient start color from image1
        color5: "#000000", // Gradient end color from image1 and image2
        color6: "#434343", // Second gradient end color from image2
      },
      backgroundImage: {
        'color4-gradient': 'linear-gradient(to bottom, #3E065F, #000000)', // Gradient from image1
        'color5-gradient': 'linear-gradient(to bottom right, #000000, #434343)', // Gradient from image2
      },
      fontSize: {
        'h1': '8.5vw',
        'h2': '6.75vw',
        'h3': '5.25vw',
        'h4': '3.95vw',
        'h5': '2.95vw',
        'h6': '2.25vw',
        'p': '1.5vw',
        'small': '1vw',
        'xs': '0.75vw',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  presets: [
    require("@relume_io/relume-tailwind"), // Added preset for Relume UI
  ],
  plugins: [],
};
