/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '650px',
      'lg': '1185px',
    },
    extend: {},
  },
  plugins: [],
};
