import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import baseConfig from './prod.base.config'

export default {
  ...baseConfig,
  target: 'node',
  entry: './index',
  output: {
    ...baseConfig.output,
    filename: 'server.js'
  },
  plugins: [
    ...baseConfig.plugins,
    new FaviconsWebpackPlugin({
      logo: '../favicon.png'
    }),
    new HtmlWebpackPlugin({
      template: './views/index.ejs',
      filename: 'index.ejs',
      head: '<%- head %>',
      body: '<%- body %>',
      device: '<%- device %>',
      "files": {
        "png": 'static/*.png'
      },
      "excludeChunks": ['main']
    })
  ],
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
}