/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], //it means we will use all files in the project with tailwind classes
  theme: {
    extend: {
      screens: {
        xsm: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: { 13: "3.25rem" },
      fontSize: { '10xl': ['7.5rem', { lineHeight: '1.2' }] },
    },
  },
  plugins: [],
}

