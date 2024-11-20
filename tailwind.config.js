/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
    extend: {
      borderColor: {
        'border': '#fff', // Define your color here
      },
      backgroundColor: {
        background: 'var(--background)', // Add the custom background variable here
      },
    },
  },
  plugins: [],
}

