import path from 'path'
import bourbon from 'node-bourbon'
import IconfontWebpackPlugin from 'iconfont-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

const root = path.join(__dirname, '..')

export const sassPaths = bourbon
  .includePaths
  .map((sassPath)=>`includePaths[]=${sassPath}`)
  .join('&')

export default {
  context: root,
  entry: path.join(root, 'src/index'),
  output: {
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new IconfontWebpackPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      img: path.join(root, 'img'),
      'static': path.join(root, 'static'),
      //'react': 'preact-compat',
      //'react-dom': 'preact-compat'
    },
    modules: [
      "node_modules"
    ]
  }
}