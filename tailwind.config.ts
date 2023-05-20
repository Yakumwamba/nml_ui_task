import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
        notoserif: ['NotoSerif', 'sans-serif'],
        KumbhSans: ['KumbhSans', 'sans'],
        
      },

    screens: {
      'sm': '370px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
        
        },
        green1: "#003D2D",
        green2: "#365B51",
        dark: '#222222',
      },
   
    },
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config;
