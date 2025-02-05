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
        lightGray: '#a0a0a0',
        customIcon: '#67adb9',
        customBorder: '#e5e8eb',
        red500: '#ef4444',
        white: '#ffffff',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
      borderRadius: {
        full: '9999px',
      },
      fontSize: {
        xxs: '0.6rem',
        xs: '0.75rem',
      },
      height: {
        15: '15px',
        18: '18px',
        34: '34px',
        35: '35px',
      },
      width: {
        15: '15px',
        18: '18px',
        20: '20px',
        30: '30px',
        35: '35px',
        88: '88px',
        280: '280px',
      },
      spacing: {
        5: '5px',
        7: '7px',
        10: '10px',
        13: '13px',
        15: '15px',
        20: '20px',
        40: '40px',
      },
      boxShadow: {
        default: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        md: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      overflow: {
        hidden: 'hidden',
        visible: 'visible',
        scroll: 'scroll',
        auto: 'auto',
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
    {
      pattern: /bg-.*/,
    },
  ],
};
