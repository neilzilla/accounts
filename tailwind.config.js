/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  content: [
    "./src/renderer/components/**/*.{js,vue,ts}",
    "./src/renderer/layouts/**/*.vue",
    "./src/renderer/pages/**/*.vue",
    "./src/renderer/plugins/**/*.{js,ts}",
    "./src/renderer/nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {




      fontSize:{
        '10px': '10px',
        '40px': '40px'
      },
      colors: {
        'orange': 'orange'
      }
    },
  },
  plugins: [],
}
