import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import baseConfig, {sassPaths} from '../webpack/base.config'

export default {
  ...baseConfig,
  context: path.resolve('./'),
  output: {
    ...baseConfig.output,
    publicPath: '/static',
    path: path.resolve('./build')
  },
  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "isomorphic-style-loader",
          use: [
            'css-loader?sourceMap',
            `sass-loader?sourceMap&${sassPaths}`
          ]
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "isomorphic-style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
}