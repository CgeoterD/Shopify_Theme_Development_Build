module.exports = {
  content: [
    './templates/*.liquid',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid'
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {},
      fontWeight: {},
      fontFamily: {},
      screens: {
        sm: '376px',
        sm1: '528px',
        md: '768px',
        md2: '990px',
        lg: '1440px',
        xl: '1800px',
      }
    },
  },
  plugins: [],
}
