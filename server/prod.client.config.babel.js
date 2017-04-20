import baseConfig from './prod.base.config'
//import CompressionPlugin from 'compression-webpack-plugin'

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'client.js'
  },
  plugins: [
    ...baseConfig.plugins,
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