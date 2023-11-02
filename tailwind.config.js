/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agbal: ["Agbalumo"],
      },
      keyframes: {
        loading: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(500%)" },
        },
      },
      animation: {
        loading: "loading 1s 6 alternate",
      },
      boxShadow: {
        shodowPrime: "0 20px 20px -15px rgb(253 224 71)",
      },
    },
  },
  plugins: [],
};
