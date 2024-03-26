/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        josefin_sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#0067DC',
      }
    },
  },
  plugins: [],
}
