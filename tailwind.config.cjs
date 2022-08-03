/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "996px",
      xl: "1145px",
    },
    colors: {
      Almost_White: "hsl(0, 0%, 98%)",
      Medium_Gray: "hsl(0, 0%, 41%)",
      Almost_Black: "hsl(0, 0%, 8%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      epilogue: ["'Epilogue', sans-serif"],
    },
    extend: {
      padding: {
        px_header: "1.125rem",
      },
      boxShadow: {
        link: "0px 10px 50px hsla(0, 0%, 41%, 0.3)",
      },
    },
  },
  plugins: [],
}
