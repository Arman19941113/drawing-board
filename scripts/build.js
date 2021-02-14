process.env.NODE_ENV = 'production'
process.on('unhandledRejection', err => {
  throw err
})

console.log('✨ Start building...')

if (require('fs').existsSync('web-dist')) {
  require('child_process').execSync('rm -rf web-dist', { stdio: 'ignore' })
}

const chalk = require('chalk')
const webpack = require('webpack')

const webpackConfig = require('../webpack.config')('production')
const { formatBytes } = require('./util')

webpack(webpackConfig, (error, status) => {
  if (error) {
    console.log(chalk.red(error.message))
  } else {
    const result = status.toJson()
    console.log(`Compiled in ${result.outputPath}`)
    result.assets.forEach(item => {
      console.log(formatBytes(item.size) + chalk.cyan(item.name))
    })
  }
})
