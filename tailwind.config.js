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
      }
    },
  },
  plugins: [],
}
