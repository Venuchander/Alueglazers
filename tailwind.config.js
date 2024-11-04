module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // blue-600
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
}