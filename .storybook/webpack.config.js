// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

const bourbon = require('node-bourbon');

const sassPaths = bourbon
    .includePaths
    .map((sassPath)=>`includePaths[]=${sassPath}`)
    .join('&');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style', 'css?sourceMap', `sass?sourceMap&${sassPaths}`]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      }],
  },
  resolve: {
    root: path.resolve(__dirname, '../'),
    img: 'img'
  }
};
