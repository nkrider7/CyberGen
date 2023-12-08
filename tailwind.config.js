/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'greenlite':'#00ff00ff',
      'greendark':'#003b00ff',
      'green': '#00a400ff',
      'myblack': '#000000ff',
      'myred':'#ff003cff',
      'mywhite':'#ffffff'
    },
    extend: {},
  },
  plugins: [],
}

