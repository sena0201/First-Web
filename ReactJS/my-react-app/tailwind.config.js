/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      'black': '#000',
      'white': '#e6e6e6',
      'gray': '#848895'
    },
    extend: {
      width: {
        'w-96/100': '96%',
        'w-12/25': '48%'
      },
      height: {
        'h-4/5': '80%'
      },
      inset: {
        '1px': '1px',
        '6px': '6px',
        '10px': '10px',
        '80px': '80px',
        '282px': '282px',
        '352px': '352px',
        '368px': '368px'
      }
    },
    fontFamily: {
      'sans': 'Helvetica, sans-serif'
    }
  },
  plugins: [],
}

