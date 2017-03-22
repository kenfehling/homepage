import baseConfig, {sassPaths} from './base.config'
import path from 'path'

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: path.resolve('./public'),
    filename: 'client.js'
  },
  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders, ...[
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap',
            `sass-loader?sourceMap&${sassPaths}`
          ]
        }, {
          test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
      ]
    ]
  }
}