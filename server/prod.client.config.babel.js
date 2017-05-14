import baseConfig from './prod.base.config'
import webpack from 'webpack'
//import CompressionPlugin from 'compression-webpack-plugin'

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      mangle: true
    })
      /*
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        minRatio: 0.8
      })
      */
  ]
}