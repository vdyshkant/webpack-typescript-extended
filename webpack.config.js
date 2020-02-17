const path = require('path')
const HTMLWebpackPluguin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPluguin({
      title: 'Custom Webpack Title',
      template: './src/index.html'
    })
  ]
}