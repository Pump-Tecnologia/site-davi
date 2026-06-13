import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          bg: "#0a0a0a",
          card: "#1a1a1a",
          text: "#e0e0e0",
          gold: "#d4af37",
          goldHover: "#ebd270",
          500: "#22c55e",
          600: "#16a34a"
        }
      },
      animation: {
        "scroll-left": "scroll-left 35s linear infinite",
        "scroll-right": "scroll-right 35s linear infinite"
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "scroll-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
