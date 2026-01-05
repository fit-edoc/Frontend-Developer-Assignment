/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1A81FF', // Estimated standard vibrant blue
        'brand-dark': '#0B0F19', // Dark text
        'brand-light-bg': '#E6F0FF', // Very light blue for background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cloud-pattern': "url('/clouds.svg')", // Placeholder if I use an image
      }
    },
  },
  plugins: [],
}
