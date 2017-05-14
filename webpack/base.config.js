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
    desktop: path.join(root, 'src/entry/desktop'),
    mobile: path.join(root, 'src/entry/mobile')
  },
  output: {
    publicPath: '/',
    filename: '[name].client.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      include: [
        /src/,
        /server\/index.js/,
        /*
        /node_modules\/apeman-react-clock\/lib/,
        /node_modules\/apeman-react-clock\/src/
        */
      ],
      loader: 'babel-loader'
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