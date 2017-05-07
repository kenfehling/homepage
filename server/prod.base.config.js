import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import path from 'path'
import baseConfig, {sassPaths} from '../webpack/base.config'

const root = path.join(__dirname, '../..')
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
  context: path.resolve('./'),
  output: {
    ...baseConfig.output,
    publicPath: '/static/',
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
            cssLoader,
            'postcss-loader',
            `sass-loader?sourceMap&${sassPaths}`
          ]
        })
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "isomorphic-style-loader",
          use: [
            cssLoader,
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg)$/i,
        include: /img/,
        use: [
          "url-loader?limit=10000000",
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 7
              }
            }
          }
        ]
      }, {
        test: /\.svg$/i,
        include: /img/,
        use: [
          "url-loader?limit=10000000",
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { 'removeUnusedNS': true },
                { 'convertColors': true }
              ]
            }
          }
        ]
      }, {
        test: /\.(png|jpg|svg)$/i,
        include: /static/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    ...baseConfig.plugins,
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}