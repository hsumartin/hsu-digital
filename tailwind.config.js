/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        accent: '#d4b066',
        future: '#06b6d4',
        background: '#f9fafb',
        text: '#111827',
      },
      boxShadow: {
        'glow-gold': '0 0 10px rgba(212,176,102,0.4)',
        'glow-gold-strong': '0 0 18px rgba(212,176,102,0.6)',
        'glow-turquoise': '0 0 10px rgba(6,182,212,0.35)',
        'glow-turquoise-strong': '0 0 20px rgba(6,182,212,0.55)',
      }
    },
  },
  plugins: [],
}
