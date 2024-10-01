/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
        comfortaa: ['Comfortaa', 'cursive'],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
        bgcolor: ' #252525',
        divcolor: '#151515',
        buttoncolor: '#242424',
        goldd: '#E3A400',
        superlike: '#E3A400',
        Honey: '#E3A401',
        buttonbg: '#FFDCA9',
        dark: '#222222',
        'black-100': 'rgba(0, 0, 0, 0.49)',
        'black-00': 'rgba(0, 0, 0, 0.5)',
        goldAccent: '#FFDCA9',
        'gold-100': '#FFF1DC',
        'transparent-thin-border': 'rgba(0, 0, 0, 0.28)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(-40vw)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(40vw)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'slide-left':
          'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-right':
          'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
      },
      backgroundImage: {
        background: 'url(/images/bg.jpg)',
        zayn: 'ur(/images/download.jpeg)',
      },
      boxShadow: {
        container: '50px 0px 60px -3px rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
};
