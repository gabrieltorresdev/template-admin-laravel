/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors') 
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    './vendor/wireui/wireui/resources/**/*.blade.php',
    './vendor/wireui/wireui/ts/**/*.ts',
    './vendor/wireui/wireui/src/View/**/*.php',
    './vendor/filament/**/*.blade.php',
    "./node_modules/flowbite/**/*.js"
  ],
  presets: [
    require('./vendor/wireui/wireui/tailwind.config.js')
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.rose,
        primary: colors.blue,
        success: colors.green,
        warning: colors.yellow,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
}
