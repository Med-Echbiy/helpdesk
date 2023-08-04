/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heroColor: "#b2dfdb",
        primaryColor: "#007047",
        secondaryColor: "#D7F9F1",
        complementaryColor: "#ecfffb",
      },
    },
  },
  plugins: [],
};
