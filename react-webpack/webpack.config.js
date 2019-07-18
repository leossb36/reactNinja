// para bundle final muda o publicPath para um local fisico, no caso dist -> onde está o arquivo bundle.js
'use strict'

const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/' // gera um arquivo em memória
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }

}
