/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '976px',
      // => @media (min-width: 1024px) { ... }

      xl: '1440px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        brightRed: 'hsl(128, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '2bis': '3rem 1fr',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
  plugins: [],
};
