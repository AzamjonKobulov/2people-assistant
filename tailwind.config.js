/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        golos: "Golos Text",
      },
      fontSize: {
        8: ["2rem", "36px"],
        10: ["2.5rem", "56px"],
        15: ["3.75rem", "72px"],
      },
      spacing: {
        "base-1": "32.25rem",
        "base-2": "42.25rem",
        "base-3": "63.6875rem",
        15: "3.75rem",
        17: "4.25rem",
        30: "7.5rem",
        40: "12.5rem",
        76: "19rem",
      },
      colors: {
        primary: "#356FEC",
        secondary: "#8F8FA0",
        brand: {
          gray: {
            50: "#EFEFF8",
            100: "#F3F6FF",
            200: "#F7F7F9",
            400: "#D9D9E5",
            800: "#666679",
            900: "#2B2B2B",
            950: "#383838",
          },
        },
      },
      aspectRatio: {
        "4/3": "436/352",
      },
      boxShadow: {
        soft: "0 0 12px rgba(130, 129, 152, 0.2)",
      },
      borderRadius: {
        5: "1.25rem",
      },
    },
  },
  plugins: [],
};
