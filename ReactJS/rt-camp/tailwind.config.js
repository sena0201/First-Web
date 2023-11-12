/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'round': '0 0 5px rgba(0,0,0,0.2)',
      },
      minWidth: {
        '1/4': '25%',
        '600': '600px',
      },
      maxWidth: {
        '600': '600px',
      },
      width: {
        '600': '600px',
        '160': '160px',
      },
      height: {
        '204': '248px',
      },
      colors: {
        'blue': '#E1E9FA'
      }
    },
  },
  plugins: [],
}

