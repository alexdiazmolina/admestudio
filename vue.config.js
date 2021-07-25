module.exports = {
  publicPath: '/admestudio',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  configureWebpack: {
    devtool: 'source-map'
  }
};
z|