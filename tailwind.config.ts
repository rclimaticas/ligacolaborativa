/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      fundoLogin: '#000000',
      fundoRegister: '#000000',
      black: {
        100: '#C4C4C4',
        200: '#515255',
        300: '#000100',
      },
      orange: '#cfd149',
      white: '#FEFFFE',
      green: { 100: '#4caf50', 200: '#7e926f' },
    },
    backgroundImage: {
      gradient:
        'linear-gradient(94deg, rgba(0,0,0,1) 26%, rgba(0,215,42,1) 56%, rgba(255,239,0,1) 100%)',
      fundo:
        "url('https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/fundo.png')",
      fundoLogin:
        "url('https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/75ba33192562945.65dddcd30b0c9.png')",
      fundoRegister:
        "url('https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/5ce7b3207291701.66dacf1f2cbb1.png')",
      fundoOndeFoi:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC')",
    },
  },
  plugins: [tailwindTypography, require('tailwindcss-motion')],
  safelist: [
    'motion-preset-typewriter-[5]',
    'motion-preset-typewriter-[7]',
    'motion-preset-typewriter-[8]',
  ],
} satisfies Config;
