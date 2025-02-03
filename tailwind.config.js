/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'text-lg',
    'font-bold',
    'border',
    'p-4',
    'h-full',
    'w-full',
    'flex-row',
    'bg-white',
    'border-r',
    'border-gray-300',
    'flex-1',
  ],
};
