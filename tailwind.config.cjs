/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_md: "url('./assets/bg_md.png')",
        bg_sm: "url('./assets/bg_sm.png')",
        bg_lg: "url('./assets/bg_lg.png')",
      },
    },
  },
  plugins: [],
};
