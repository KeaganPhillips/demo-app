/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "app/**/*.{html,js,ts,jsx,tsx}",
        "components/**/*.{html,js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    safelist: [],
    plugins: [],
    theme: {
        extend: {
          colors: {
            'black': '#000000',
          },
        }
    }
}