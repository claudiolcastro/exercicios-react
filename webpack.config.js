const webpack = require('webpack');

module.exports = {
  entry: ['./ex/index.jsx'],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  }
}