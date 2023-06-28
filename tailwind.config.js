/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'intro-pattern-mobile': 'url("/images/bg-pattern-intro-mobile.svg")',
        'intro-pattern-desktop': 'url("/images/bg-pattern-intro-desktop.svg")',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(356, 100%, 66%)',
          light: 'hsl(355, 100%, 74%)',
          heading: 'hsl(208, 49%, 24%)'
        },
        neutral: {
          DEFAULT: 'hsl(207, 13%, 34%)',
          light: 'hsl(240, 2%, 79%)',
          dark: 'hsl(240, 10%, 16%)'
        }
      }
    }
  },
  plugins: [],
};
