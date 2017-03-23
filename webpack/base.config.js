import webpack from 'webpack'
import path from 'path'
import bourbon from 'node-bourbon'
import neat from 'node-neat'

export const sassPaths = bourbon
  .includePaths
  .map((sassPath)=>`includePaths[]=${sassPath}`)
  .join('&')

const root = path.join(__dirname, '..')

export default {
  context: root,
  entry: path.join(root, 'src/index.js'),
  output: {
    publicPath: '/static/'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({ 'React': 'react'})
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.png?$/,
      exclude: /node_modules/,
      loader: "url-loader?limit=10000000"
    }, {
      test: /\.gif?$/,
      loader: "url-loader?limit=10000000&mimetype=image/png"
    },{
      test: /\.jpg?$/,
      loader: "url-loader?limit=10000000"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000000"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      img: path.join(root, 'img'),
      'static': path.join(root, 'static'),
    },
    modules: [
      "node_modules"
    ]
  }
}