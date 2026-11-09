/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05060A",
        panel: "#0C0F18",
        line: "#1B2030",
        mute: "#8A93A8",
        // electric cyan → violet → pink gradient system
        cyan: "#38E1FF",
        azure: "#5B8CFF",
        violet: "#9B6CFF",
        pink: "#FF5DB1",
        emerald: "#34D399",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "mesh":
          "radial-gradient(at 0% 0%, #38E1FF22 0px, transparent 50%), radial-gradient(at 100% 0%, #9B6CFF22 0px, transparent 50%), radial-gradient(at 100% 100%, #FF5DB122 0px, transparent 50%), radial-gradient(at 0% 100%, #5B8CFF22 0px, transparent 50%)",
        "text-gradient":
          "linear-gradient(110deg, #38E1FF 0%, #5B8CFF 40%, #9B6CFF 75%, #FF5DB1 100%)",
      },
      backgroundSize: {
        mesh: "200% 200%, 200% 200%, 200% 200%, 200% 200%",
      },
      animation: {
        mesh: "mesh 18s ease infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-md": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        "marquee": "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};