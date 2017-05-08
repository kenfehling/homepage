import webpack from 'webpack'
import path from 'path'
import bourbon from 'node-bourbon'
import IconfontWebpackPlugin from 'iconfont-webpack-plugin'

const root = path.join(__dirname, '..')

export const sassPaths = bourbon
  .includePaths
  .map((sassPath)=>`includePaths[]=${sassPath}`)
  .join('&')

export default {
  context: root,
  entry: {
    splash: path.join(root, 'src/entry/splash'),
    main: path.join(root, 'src/entry/main')
  },
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [
        /src/,
        /server\/index.js/,
        /node_modules\/apeman-react-clock\/lib/,
        /node_modules\/apeman-react-clock\/src/
      ],
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new IconfontWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin("common.js")
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      img: path.join(root, 'img'),
      fonts: path.join(root, 'fonts'),
      'static': path.join(root, 'static')
    },
    modules: [
      "node_modules"
    ]
  }
}