import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import baseConfig, {sassPaths} from './base.config'
import path from 'path'

const root = path.join(__dirname, '..')
const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    alias: {
      img: path.join(root, 'img'),
      fonts: path.join(root, 'fonts')
    }
  }
}

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
          use: [
            'style-loader',
            cssLoader,
            'postcss-loader',
            `sass-loader?sourceMap&${sassPaths}`
          ]
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        }, {
          test: /\.(png|jpg|svg)$/i,
          include: /img/,
          use: [
            "url-loader?limit=10000000"
          ]
        }, {
          test: /\.(png|jpg|svg)$/i,
          include: /static/,
          use: [
            "file-loader"
          ]
        }
      ]
    ]
  }
}