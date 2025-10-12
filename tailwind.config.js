export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme color palette
        primary: {
          DEFAULT: '#8B5CF6', // Purple
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink
          light: '#F472B6',
          dark: '#DB2777',
        },
        accent: {
          DEFAULT: '#06B6D4', // Cyan
          light: '#22D3EE',
          dark: '#0891B2',
        },
        dark: {
          bg: '#0F0F1E', // Very dark blue-black
          surface: '#1A1A2E', // Dark surface
          card: '#16213E', // Card background
          border: '#2A2A3E', // Border color
        },
        light: {
          text: '#E5E7EB', // Light text
          muted: '#9CA3AF', // Muted text
        },
      },
    },
  },
}

