/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: '#CD1A40',
      orange: '#FF803C',
      gray: '#999999',
      white: '#FFFFFF',
      black: '#1E1E1E',
      'logo': '#EE1C45',
      yellow: '#FFF9F0'
    },
    extend: {
      backgroundImage:{
        'header-img': "url('../src/assets/header-img.png')",
        'malaysia':"url('../src/assets/Destination/Malaysia.png')",
        'dubai':"url('../src/assets/Destination/Dubai.png')",
        'greecc':"url('../src/assets/Destination/Greecc.png')",
        'singapore':"url('../src/assets/Destination/Singapore.png')",
      },
      width: {
        '17/20': '85%',
        '8/25': '32%',
      },
      minWidth: {
        '300px': '300px',
        '250px': '250px',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%', 
        '8/25': '32%',
        '3/10': '30%'
      },
      height: {

      },
      inset: {
        '1px': '1px',
        '626px': '626px'
      }
    },
    fontFamily:{
      logo: 'Clicker Script, cursive',
      title: 'Water Brush, cursive',
      'sans': 'Work Sans, sans-serif'
    }
  },
  plugins: [],
}

