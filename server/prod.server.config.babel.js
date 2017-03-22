import nodeExternals from 'webpack-node-externals'
import baseConfig from './prod.base.config'

export default {
  ...baseConfig,
  target: 'node',
  entry: './index.js',
  output: {
    ...baseConfig.output,
    filename: 'server.js'
  },
  node: {
    __dirname: true
  },
  externals: [nodeExternals()]
}