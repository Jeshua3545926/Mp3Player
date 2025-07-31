module.exports = {
  root: true,
  plugins: ['header'],
  rules: {
    'header/header': [2, 'block', [
      '!',
      ' Copyright (c) 2025 MP3',
      ' Licencia MIT',
    ]],
  },
};
