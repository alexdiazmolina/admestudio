/* eslint-disable no-undef */
module.exports = {
  publicPath: '/admestudio',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
