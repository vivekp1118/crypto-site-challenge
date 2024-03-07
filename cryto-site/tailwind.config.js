/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#EFF2F5",
        "bg-blue": "#0052FE",
      },
      boxShadow: {
        "nav-mobile": "0px 1px 8px 0px rgba(19, 40, 56, 0.08)",
        "nav-desktop": "0px 0px 12px 0px rgba(16, 38, 73, 0.06)",
      },
      padding: {
        "mobile-x": "0 1.5rem",
        "desktop-x": "0 3.75rem",
      },
    },
  },
  plugins: [],
};
