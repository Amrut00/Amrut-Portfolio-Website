export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors using CSS variables
        primary: {
          DEFAULT: 'var(--color-purple-primary)',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: 'var(--color-pink-secondary)',
          light: '#F472B6',
          dark: '#DB2777',
        },
        accent: {
          DEFAULT: 'var(--color-cyan-500)',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        dark: {
          bg: 'var(--bg-primary)',
          surface: '#1A1A2E',
          card: '#16213E',
          border: '#2A2A3E',
        },
        light: {
          text: 'var(--text-primary)',
          muted: '#9CA3AF',
        },
      },
    },
  },
}

