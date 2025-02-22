import { keepTheme } from "keep-react/keepTheme";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-spin': 'spin 12s linear infinite', // Adjust duration (8s here)
      },
      fontFamily: {
        mixed: ['var(--font-english)', 'var(--font-bangla)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


export default keepTheme(config)