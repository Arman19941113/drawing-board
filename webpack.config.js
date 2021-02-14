const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createResolver = require('postcss-import-webpack-resolver')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = function (webpackEnv) {
  const isProduction = webpackEnv === 'production'
  const envConfig = require('./config/env.config')(webpackEnv)

  return {
    mode: webpackEnv,
    entry: {
      main: path.resolve('src/main.js'),
    },
    output: {
      path: isProduction ? path.resolve('web-dist') : path.resolve('dev-dist'),
      publicPath: isProduction ? envConfig.publicPath : '/',
      filename: isProduction ? 'static/js/[name].[chunkhash].js' : 'static/js/[name].js',
    },
    resolve: {
      modules: [path.resolve('node_modules')],
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve('src'),
      },
    },
    devtool: envConfig.devtool,
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [path.resolve('webpack.config.js')],
      },
    },
    optimization: {
      emitOnErrors: true,
      // chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          demo: {
            test: /[\\/]node_modules[\\/]arman-ui/,
            name: 'arman-ui',
            priority: 1,
          },
        },
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': false,
        '__VUE_PROD_DEVTOOLS__': false,
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('public/index.html'),
        favicon: path.resolve('public/favicon.png'),
        filename: 'index.html',
      }),
      isProduction && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
      }),
      new VueLoaderPlugin(),
    ].filter(Boolean),
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime', ['component', { 'libraryName': 'arman-ui' }]],
          },
        },
      }, {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
      }, {
        test: /\.(bmp|gif|jpe?g|png|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: 'static/images/[name].[hash].[ext]',
          },
        },
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 30000,
            name: 'static/fonts/[name].[hash].[ext]',
          },
        },
      }].filter(Boolean),
    },
    performance: {
      maxEntrypointSize: 3000000,
      maxAssetSize: 3000000,
    },
  }
}
