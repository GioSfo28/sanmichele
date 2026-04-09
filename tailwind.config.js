// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sacra: {
          primary: "#800020", // Bordeaux scuro
          hover: "#5C0017",   // Bordeaux hover
          accent: "#FFD700",  // Giallo CTA
          secondary: "#688e26", // Verde Valle
        }
      }
    },
  },
  plugins: [],
}