const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // Entry point
  entry: './src/app/index.js',
  // Output Directory and Filename
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  // Dev Server Config
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 4000
  },
  plugins: [
    // This makes index available for the Webpack Dev Server
    new CopyWebpackPlugin([
      { from: 'src/public/html/index.ejs', to: 'index.html'}
    ])
  ],
  module: {
    loaders: [
      // SASS Loader
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // Babel Loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}