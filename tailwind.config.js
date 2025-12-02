/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'discord-purple': '#5865F2',
        'discord-green': '#57F287',
        'discord-yellow': '#FEE75C',
        'discord-red': '#ED4245',
        'discord-dark': '#2C2F33',
        'discord-darker': '#23272A',
        'discord-light': '#36393F',
        'discord-lighter': '#40444B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}