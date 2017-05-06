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
    }, {
      test: /\.ttf$/,
      include: /fonts/,
      use: [
        "url-loader?limit=10000000"
      ]
    }]
  },
  plugins: [
    new IconfontWebpackPlugin()
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