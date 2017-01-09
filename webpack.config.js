const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
  ? [ './src/index.js' ]
  : [ './src/index.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080' ];

const plugins = PRODUCTION
  ? [ ]
  : [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.jpg$/,
      loaders: ['file-loader'],
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map'
}
