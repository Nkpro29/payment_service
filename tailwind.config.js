/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-light": "#CDBFDD",
        "br-color": "#00002F26",
        "bg-color": "#F1F0F2",
        "dark-bg": "#725690",
        "btn-br-color": "#43038C3B",
        "car-br-color": "#CDBFDD"
      },
    },
  },
  plugins: [],
};
