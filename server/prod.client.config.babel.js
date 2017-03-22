import baseConfig from './prod.base.config'

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'client.js'
  }
}