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
      fundo:
        "url('https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/fundo.png')",
    },
  },
  plugins: [tailwindTypography],
} satisfies Config;
