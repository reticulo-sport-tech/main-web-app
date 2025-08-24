import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/layout/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        accent: {
          500: '#2563EB',
          600: '#1D4ED8',
        },
      },
      boxShadow: {
        soft: '0 8px 24px rgba(2, 6, 23, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config

