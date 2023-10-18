/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2F1893', // primary
          200: '#482BE7', // secondary
          300: '#1E0E62', // heading,
          400: '#1DA1F2',
          500: '#4267B2'
        },
        secondary: {
          100: '#EBEAED', // gray
          200: '#25DAC5', // green
          300: '#E93A7D' // pink
        }
      }
    },
  },
  plugins: [],
}