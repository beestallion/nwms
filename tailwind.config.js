/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#160433',
        accent: {
          orange: '#FF9D00',
          green: '#0CF637',
          purple: '#950DFF',
        }
      }
    },
  },
  plugins: [],
};