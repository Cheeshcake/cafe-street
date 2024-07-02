/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      orange: "#FF902A",
      brown: "#2F2105",
      yellow: "#F9D9AA",
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        "light-orange":"#FFD28F",
        "dark-gray": "#7E7D7A",
        "light-gray": "#929292",
        "light-yellow": "#F6EBDA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
