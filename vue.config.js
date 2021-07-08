module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
