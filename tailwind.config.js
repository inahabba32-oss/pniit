export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "#dfe7ef",
        background: "#f5f7fb",
        card: "#ffffff",
        primary: {
          50: "#edf5ff",
          100: "#dfeeff",
          500: "#1d4ed8",
          600: "#1e40af",
          700: "#1e3a8a"
        },
        success: "#16a34a",
        warning: "#f59e0b",
        danger: "#dc2626",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          500: "#64748b",
          700: "#334155",
          900: "#0f172a"
        }
      },
      boxShadow: {
        soft: "0 8px 22px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
