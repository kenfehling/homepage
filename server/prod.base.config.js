import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'
import path from 'path'
import baseConfig, {sassPaths} from '../webpack/base.config'

const root = path.join(__dirname, '../..')
const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    importLoaders: 1,
    alias: {
      img: path.join(root, 'img')
    }
  }
}

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
        test: /\.(png|jp?g)$/i,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
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
        comments: false,
        screw_ie8: true
      },
      mangle: true
    })
  ]
}