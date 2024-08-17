/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        // Custom shadows if needed
        "custom-light":
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
        "custom-dark":
          "0px 4px 6px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
