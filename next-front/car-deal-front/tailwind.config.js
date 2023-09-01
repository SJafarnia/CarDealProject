/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        'listlg': 'repeat(3, minmax(0, 262px))',
        'listmd': 'repeat(2, minmax(0, 375px))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-blue': '#4AAEE7',
        'form-blue': '#3239bb',
        'cred': '#EB6245',
        'txt-blue': '#1A3760'
      },
      backgroundPosition: {
        "top-center": "top center"
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('flowbite/plugin'),

  ],
}
