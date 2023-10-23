/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  daisyui: {
    themes: [
      {
        main: {
          "primary": "#FFFFFF",
          
          "secondary": "#1E3A8A",

          "secondary-focus": "#1E3A8A",
                    
          "accent": "#62d6d4",
                    
          "neutral": "#35273a",
                    
          "base-100": "#FFFFFF",
                    
          "info": "#06B6D4",
                    
          "success": "#27dd97",
                    
          "warning": "#c5a411",
                    
          "error": "#f26e9a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

