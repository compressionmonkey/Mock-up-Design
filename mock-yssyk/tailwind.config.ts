import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontWeight: {
        'extrabold': '900',
      },
      margin: {
        '7': '7px',
      },
      padding: {
        '50': '50px',
        '30': '30px',
      },
      colors: {
        mercury : '#e9e9e9'
      },
      spacing: {
        '3.5': '0.875rem',
      },
      maxWidth: {
        '62rem': '62rem',
        '275': '2200px', // custom max-width of 2200px
      },
      minWidth: {
        '88': '700px', // custom min-width of 700px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
