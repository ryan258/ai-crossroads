// File: tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for our AI Crossroads theme
        'ai-primary': '#3B82F6',  // blue-500
        'ai-secondary': '#10B981', // emerald-500
        'ai-accent': '#8B5CF6',   // violet-500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}