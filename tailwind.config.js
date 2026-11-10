/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090B",       // Deeper, neutral black
        paper: "#0E1014",     // Slightly lighter for cards
        line: "#1A1C21",      // Subtle borders
        mute: "#94A3B8",      // Balanced slate grey for secondary text
        accent: "#10B981",    // Emerald mint neon green
        white: "#F8FAFC",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"], // Clean, non-grotesque
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-.04em",
      },
    },
  },
  plugins: [],
};