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
  use: [{
    loader: 'babel-loader',
  }],
};

const jsx = {
  test: /\.jsx$/,
  use: [{
    loader: 'babel-loader',
  }],
};

module.exports = {
  entry: {
    App: path.resolve(__dirname, 'public/src/app.jsx'),
    Vendor: [
      'axios',
      'c3',
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
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
  },
  module: {
    rules: [css, jsx, js],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('Vendor'),
  ],
};

process.noDeprecation = true;
