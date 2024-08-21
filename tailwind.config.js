/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#1b1b1b",
        bgColor: "#1b1b1b",
      },
      boxShadow: {
        whiteGlow: "0px 0px 16px 0px rgba(255,255,255,0.5)",
        blackGlow: "0px 0px 16px 0px rgba(0, 0, 0, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
