var HtmlWebpackPlugin = require('html-webpack-plugin');
// generates build/index.html file

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: __dirname + 'build',
    filename: 'bundle.js',
    title: 'Stork Power: Workout Tracker'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!''}
    ]
  },
  plugins: [new HtmlWebpackPlugin(),    // generates default index.html
  ]
};

module.exports = webpackConfig;
