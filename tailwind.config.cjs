/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  safelist: [
    'aos-init',
    'aos-animate',
    'data-aos',
    'fade-up',
    'fade-down',
    'fade-left',
    'fade-right',
    'zoom-in',
    'zoom-out',
    'slide-up'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
