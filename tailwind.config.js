module.exports = {
  plugins: [],
  content: [
    './src/**/*.svelte'
  ],
  theme: {
    extend: {
      minHeight: {
        '480': '480px'
      },
      maxWidth: {
        '320': '45rem'
      },
      spacing: {
        '10.5': '42px'
      }
    }
  }
};
