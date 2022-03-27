const HtmlWebPackPlugin = require('html-webpack-plugin')
const { resolve, join } = require('path')

module.exports = {
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    clean: true,
    path: resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: join(__dirname, 'src', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
