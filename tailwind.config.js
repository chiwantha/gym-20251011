// tailwind.config.js
const tailwindConfig = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#4364bf",
        secondary: "#22C55E",
        accent: "#F59E0B",
        background: "#F9FAFB",
        sidebar: "#1E293B",
        navbar: "#334155",
        hover: "#3B82F6",
        text: "#111827",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
