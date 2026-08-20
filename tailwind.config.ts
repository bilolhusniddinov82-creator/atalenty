import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Resolve against CSS variables (set per-theme in globals.css)
        // so light/dark actually repaint backgrounds, text, and
        // borders everywhere — not just a single hardcoded value.
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        ink: "#4F46E5",
        violet: "#7C3AED",
        teal: "#14B8A6",
        seal: "#E8B34C",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "seal-radial": "radial-gradient(circle at 35% 30%, #F6CE7A, #B8842E)",
      },
      keyframes: {
        drift1: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(60px, 40px)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-50px, 60px)" },
        },
      },
      animation: {
        drift1: "drift1 22s ease-in-out infinite",
        drift2: "drift2 26s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
