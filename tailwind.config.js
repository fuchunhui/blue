const production = process.env.NODE_ENV === 'production'; 

module.exports = {
  darkMode: 'media',
  future: { 
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    enabled: production,
    content: [
      './src/**/*.svelte'
    ]
  },
  theme: {
    minHeight: {
      '480': '480px'
    },
    maxWidth: {
      '320': '45rem'
    }
  }
};