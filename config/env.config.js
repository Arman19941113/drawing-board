module.exports = function (webpackEnv) {
  if (webpackEnv === 'development') {
    return {
      port: 7777,
      host: 'localhost',
      devtool: 'eval-source-map',
    }
  } else if (webpackEnv === 'production') {
    return {
      publicPath: '/',
      devtool: false,
    }
  }
}
