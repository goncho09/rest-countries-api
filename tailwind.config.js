/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "var(--dark-blue)",
        "very-dark-blue": "var(---very-dark-blue-dark)",
        "very-dark-blue-light": "var(--very-dark-blue-light)",
        "dark-gray": "var(--dark-gray)",
        "very-light-gray": "var( --very-light-gray)",
      },
    },
  },
  plugins: [],
};
