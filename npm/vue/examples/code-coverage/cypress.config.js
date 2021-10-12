const { defineConfig } = require('cypress')
const { devServer, defineDevServerConfig } = require('@cypress/webpack-dev-server')

const webpackConfig = require('./webpack.config')

module.exports = defineConfig({
  fixturesFolder: false,
  video: false,
  component: {
    devServer,
    devServerConfig: defineDevServerConfig({ webpackConfig }),
    componentFolder: 'src',
    testFiles: '**/*.spec.js',
    setupNodeEvents (on, config) {
      require('@cypress/code-coverage/task')(on, config)

      return config
    },
  },
})