import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import baseConfig, {sassPaths} from './base.config'
import path from 'path'

const root = path.join(__dirname, '..')

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve('./static'),
    filename: 'client.js'
  },
  plugins: [
    ...baseConfig.plugins,
    new webpack.ProvidePlugin({ 'React': 'react'}),
    new FaviconsWebpackPlugin({
      logo: path.join(root, 'favicon.png'),
      prefix: 'static/',
    }),
    new HtmlWebpackPlugin({
      template: path.join(root, 'public/index.html'),
      files: {
        "png": 'static/*.png'
      }
    })
  ],
  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders, ...[
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap&importLoaders=1',
            'postcss-loader',
            `sass-loader?sourceMap&${sassPaths}`
          ]
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        }, {
          test: /\.(png|jp?g|svg)$/i,
          exclude: /node_modules/,
          loaders: [
            "url-loader?limit=10000000"
          ]
        }
      ]
    ]
  }
}