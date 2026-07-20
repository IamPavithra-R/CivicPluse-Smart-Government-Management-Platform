/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C2B36',
        paper: '#F6F3EC',
        panel: '#FFFFFF',
        indigo: {
          DEFAULT: '#1B3A5C',
          dark: '#132A42',
          light: '#2E5478',
        },
        sandstone: {
          DEFAULT: '#C9A66B',
          dark: '#AD8A4F',
          light: '#E4D3AC',
        },
        banyan: {
          DEFAULT: '#3F7A57',
          light: '#E7F0EA',
        },
        brick: {
          DEFAULT: '#B7472A',
          light: '#F6E7E2',
        },
        amber: {
          DEFAULT: '#B8871F',
          light: '#FBF0DA',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,43,54,0.06), 0 4px 14px rgba(28,43,54,0.05)',
      },
    },
  },
  plugins: [],
}
