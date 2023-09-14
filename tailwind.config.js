/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayText: "#646464",
        input: "#F8F9FB",
        badge: "#8344DB1A",
        badgePurple: "#8344DB",
        deleteRed: "#E33E38",
      },
    },
  },
  plugins: [],
};
