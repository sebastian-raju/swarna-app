/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '380px',     // Very Small
        'vsm': '480px',   // Extra Small
        'sm': '640px',   // Small
        'md': '768px',   // Medium
        'mlg': '992px',
        'lg': '1024px',  // Large
        'xl': '1280px',  // Extra Large
        '2xl': '1536px', // 2X Large
      },
      fontSize:{
        'h1':'var(--text-h1)',
        'h2':'var(--text-h2)',
        'h3':'var(--text-h3)',
        'h4':'var(--text-h4)',
        'h6':'var(--text-h6)',
        'h7':'var(--text-h7)',
        'button':'var(--fs-button)',
        'body':'var(--fs-body)'
      },
      lineHeight:{
        'lh-h1':'var(--text-h1-lh)',
        'lh-h3':'var(--text-h3-lh)',
        'button-lh':'var(--fs-button-lh)',
        'body-lh':'var(--fs-body-lh)',
      },
      fontFamily:{
        'marcellus':['var(--font-family-main)','system-ui']
      },
      backgroundColor:{
        'main':"var(--bg-main)",
        'hero':"var(--bg-hero)"
      },

    },
  },
  plugins: [],
}

