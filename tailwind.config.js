/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B47DC', // Purple from highlights, buttons
        accent: '#FFAF38',  // Orange for progress indicators
        success: '#34D399', // Green for "Done" tasks
        warning: '#FBBF24', // Yellow for low-priority tasks
        textPrimary: '#4A4A4A', // Dark gray for text
        background: '#F3F4F6', // Light gray for background
        white: '#FFFFFF', // White for cards and containers
      },
    },
  },
  plugins: [],
}

