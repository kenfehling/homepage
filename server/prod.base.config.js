import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
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
    ...baseConfig.plugins,
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        screw_ie8: true
      },
      mangle: true
    })
  ]
}