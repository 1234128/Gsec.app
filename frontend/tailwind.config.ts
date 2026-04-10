
// frontend/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gsec: {
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',  // Primary Blue
            700: '#1d4ed8',
            800: '#1e40af',  // Deep Blue
            900: '#1e3a8a',
            950: '#172554',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',  // Primary Gold
            700: '#b45309',
            800: '#92400e',  // Deep Gold
            900: '#78350f',
            950: '#451a03',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gsec-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #172554 50%, #b45309 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
