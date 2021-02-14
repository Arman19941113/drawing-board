// Sometimes the WebStorm can't analyse the alias in code.
// Then you should specify this configuration in settings.
// https://zhuanlan.zhihu.com/p/86876487
const path = require('path')
const createResolver = require('postcss-import-webpack-resolver')

module.exports = {
  mode: 'development',
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('postcss-import')({
                  resolve: createResolver({
                    alias: { '~@': path.resolve('src') },
                  }),
                }),
                require('postcss-mixins'),
                require('precss'),
                require('cssnano'),
              ],
            },
          },
        },
      ],
    }],
  },
}
