/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xxs: "380px",
        xs: "576px",
        sm: "768px",
        md: "992px",
        lg: "1200px",
        xl: "1440px",
        xxl: "1600px",
      },
    },
    extend: {
      fontFamily: {
        NA: ['"New Amsterdam"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
