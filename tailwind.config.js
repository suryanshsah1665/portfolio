/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        ink: "#000000",
        paper: "#001000",
        line: "#003300",
        mute: "#00A86B",
        accent: "#00FF00",
        white: "#00FF00",
      },
      fontFamily: {
        display: ["JetBrains Mono", "monospace"],
        sans: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};