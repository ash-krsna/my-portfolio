/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        ember: "#ff4d4f",
        gold: "#d6b57c",
        mist: "#e8ddd0",
        glacier: "#dce7ff"
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Syne", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.35)",
        premium: "0 30px 80px rgba(3, 3, 10, 0.34)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
