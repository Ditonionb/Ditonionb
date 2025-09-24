import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1f51ff",
          light: "#6390ff",
          dark: "#152f6e"
        },
        secondary: "#f72585",
        background: "#05090f",
        surface: "#111827"
      },
      backgroundImage: {
        "dila-gradient": "linear-gradient(135deg, rgba(31,81,255,0.25), rgba(247,37,133,0.25))"
      },
      boxShadow: {
        glow: "0 10px 50px rgba(31,81,255,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
