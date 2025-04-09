/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0d0d0d',
        'medium-dark': '#595650',
        'gray': '#a4a19c',
        'light-gray': '#d7cfc2',
        'light': '#f0e8d9',
        'green-dark': '#323a30',
        'green-medium': '#687964',
        'green-light': '#9fb797',
        'mint': '#d5f7cb',
        'mint-light': '#edf2eb',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
} 