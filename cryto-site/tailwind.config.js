/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#EFF2F5",
        "bg-blue": "#0052FE",
        "fc-primary": "#0B1426",
        "fc-secondary": "#202020",
        "fc-dark-gray": "#0F1629",
        "fc-gray": "#5D667B",
        "fc-gray-light": "#768396",
        "fc-gray-lighter": "#788F9B",
        "fc-header": "#768396",
        "fc-subheader": "#44475B",
        "fc-normal": "#3E424A",
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
