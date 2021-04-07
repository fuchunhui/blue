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
  }
};
