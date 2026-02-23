/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          purple: '#845ec2',
          teal: '#00c9a7',
          blue: '#60A5FA',
        },
      },
    },
  },
  plugins: [],
};
