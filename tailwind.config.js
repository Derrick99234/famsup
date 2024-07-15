/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter: "'Inter', sans serif"
      },
      colors:{
        firstcolor: "#3498db",
        secondcolor: "#8e44ad",
        thirdcolor: "#27ae60",
        myblack: "#333333"
      },
      screens: {
        'sm': '640px',   // Small screens and up
        'md': '768px',   // Medium screens and up
        'mxl': '1000px',
        'lg': '1024px',  // Large screens and up
        'xl': '1280px',  // Extra large screens and up
        '2xl': '1536px', // 2XL screens and up
        'xsm': '480px',  // Screens at least 480px wide
        'xsl': '360px'
        
      },
    },
  },
  plugins: [],
}
