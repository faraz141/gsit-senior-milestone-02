import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        'custom-1': '40% 60% 42% 58% / 56% 36% 64% 44% ',
        'custom-2': '56% 43% 57% 44%',
      },
      height: { 'custom-1': '88vh' },
    },
  },
  plugins: [],
};
export default config;
