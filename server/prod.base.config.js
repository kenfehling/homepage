import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import path from 'path'
import baseConfig, {sassPaths} from '../webpack/base.config'

export default {
  ...baseConfig,
  devtool: false,
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
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        join_vars: true,
        if_return: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: false,
      mangle: true
    })
  ]
}