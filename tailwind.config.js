/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'esm': '380px',     // Very Small
        'vsm': '480px',   // Extra Small
        'sm': '640px',   // Small
        'md': '768px',   // Medium
        'mlg': '992px',
        'lg': '1024px',  // Large
        'xlg': '1077px',
        'xl': '1280px',  // Extra Large
        '2xl': '1536px', // 2X Large
      },
      fontSize:{
        'body':'13px',
        'heading':'32px'
      },
      fontFamily:{
        'marcellus':['Marcellus','system-ui']
      },
      backgroundColor:{
        'main':"rgb(255,249,244)",
        'sub':'rgb(246,241,235)',
        'hero':"rgb(221,184,146)",
        'footer':"rgb(14,52,61)"
      },
      maxWidth:{
        'container':'1280px'
      }
    },
  },
  plugins: [],
}

