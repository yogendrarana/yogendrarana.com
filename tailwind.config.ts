/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'xl': { 'max': '1280px' },
        'lg': { 'max': '1024px' },
        'md': { 'max': '768px' },
        'sm': { 'max': '546px' },
      },
    },
  },
  plugins: [],
}