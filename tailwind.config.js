/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary
       "Bright-Red": "hsl(12, 88%, 59%)",
       "Dark-Blue": "hsl(228, 39%, 23%)",
       
        // Neutral
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'Very-Dark-Blue': 'hsl(233, 12%, 13%)',
        'Very-Pale-Red': 'hsl(13, 100%, 96%)',
        'Vary-Light-Gray': 'hsl(0, 0%, 98%)'
      },

      fontFamily: {
        "vietnam": ['"Be Vietnam Pro"', 'sans-serif']
      },

      backgroundImage : {
        'close-menu': 'url(../img/icon-close.svg)',
        'open-menu': 'url(../img/icon-hamburger.svg)'
      }

    },
  },

  variants: {
    extend: {
      gridColumn: ['responsive', 'hover'],
    },
  },
  
  plugins: [],
}

