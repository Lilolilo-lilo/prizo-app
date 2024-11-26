/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        gray: {
          300: 'var(--gray-300)',
          700: 'var(--gray-700)',
        },
        nav: {
          active: '#4D63F5',
          inactive: '#3D3D3E'
        }
      },
      spacing: {
        'nav-height': '80px',
        'card-width': '334px',
        'card-height': '425px'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
  experimental: {
    optimizeUniversalDefaults: true
  },
  future: {
    hoverOnlyWhenSupported: true,
  }
}
