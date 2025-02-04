module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utilities/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customActive: '#f3f9fa',
        customActiveText: '#578388',
        customInactiveText: '#414141',
        customIcon: '#67adb9',
        customBorder: '#e5e8eb',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
      height: {
        34: '34px',
      },
      width: {
        30: '30px',
        88: '88px',
        280: '280px',
      },
      spacing: {
        5: '5px',
        7: '7px',
        15: '15px',
        40: '40px',
      },
      boxShadow: {
        default:
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
        md: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  corePlugins: {
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    ringOpacity: false,
    boxShadow: false,
    opacity: false,
    preflight: false,
  },
  safelist: [
    {
      pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/,
    },
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /(bottom|right|top|left)-[0-9]+/,
    },
    {
      pattern: /(w|h)-[0-9]+/,
    },
    {
      pattern: /justify-.*/,
    },
  ],
};
