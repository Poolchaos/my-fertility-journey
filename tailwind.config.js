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
        black: '#000000',
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
        12: '12px',
        15: '15px',
        18: '18px',
        24: '24px',
        34: '34px',
        35: '35px',
        64: '64px',
      },
      width: {
        12: '12px',
        15: '15px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        35: '35px',
        60: '60px',
        64: '64px',
        88: '88px',
        100: '100px',
        280: '280px',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/2': '50%',
        full: '100%',
      },
      spacing: {
        5: '5px',
        7: '7px',
        10: '10px',
        13: '13px',
        14: '14px',
        15: '15px',
        18: '18px',
        20: '20px',
        23: '23px',
        25: '25px',
        28: '28px',
        30: '30px',
        35: '35px',
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
      opacity: {
        0: '0',
        50: '0.5',
        100: '1',
      },
    },
  },
  corePlugins: {
    ringWidth: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    ringOpacity: true,
    boxShadow: false,
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
    {
      pattern: /absolute|inset-0|opacity-50/,
    },
    {
      pattern: /absolute|inset-0|opacity-(0|50|100)/,
    },
  ],
};
