const WebpackConfig = require('./webpack.config')

module.exports = {
  ...WebpackConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
  },
}
