/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': { 'max': '1280px' },
        'lg': { 'max': '1024px' },
        'md': { 'max': '768px' },
        'sm': { 'max': '480px' },
      },
    },
  },
  plugins: [],
}