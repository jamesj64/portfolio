/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "experience-background": "var(--experience-background)",
        "link-highlighted": "var(--link-highlighted)",
        "skill-color": "var(--skill-color)",
        "skill-color-text": "var(--skill-color-text)",
        "o-background": "rgba(38, 46, 49, 0.85)",
        "section-outline": "var(--section-outline)",
      },
      screens: {
        '2xs': '360px',
        'iPhone12': '390px',
        '1.5xs': '414px',
        'xs': '480px',
      }
    },
  },
  plugins: [],
}
