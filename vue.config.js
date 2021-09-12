/* eslint-disable no-undef */
module.exports = {
  publicPath: '/',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
