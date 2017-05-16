const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; },
  },
};

const css = {
  test: /\.css$/,
  use: ['style-loader?sourceMap', 'css-loader?sourceMap', postcss],
};

const js = {
  test: /\.js$/,
  loader: 'babel-loader',
};

const jsx = {
  test: /\.jsx$/,
  loader: 'babel-loader',
};

module.exports = {
  entry: {
    App: path.resolve(__dirname, '../public/src/app.jsx'),
    Vendor: [
      'axios',
      'chart.js',
      'history',
      'react',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-promise-middleware',
      'redux-thunk',
    ],
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '../public/js'),
    filename: '[name].js',
  },
  module: {
    rules: [css, jsx, js],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Containers: path.join(__dirname, '../public/src/containers'),
      Components: path.join(__dirname, '../public/src/components'),
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('Vendor'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: this.devtool && (this.devtool.indexOf('sourcemap') >= 0 || this.devtool.indexOf('source-map') >= 0),
    }),
  ],
  performance: {
    hints: false,
  },
};

process.noDeprecation = true;
