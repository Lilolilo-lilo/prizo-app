/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4D63F5',
        'background': '#ffffff',
        'foreground': '#171717',
      },
      ringColor: {
        'primary': '#4D63F5',
      },
      borderColor: {
        'primary': '#4D63F5',
      },
    },
  },
  plugins: [],
}