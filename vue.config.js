const { mergeSassVariables } = require('@vuetify/cli-plugin-utils')

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 包文件大小分析

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? './' : '/',
  lintOnSave: false,
  productionSourceMap: !isProd,
  transpileDependencies: ['vuetify'],
  configureWebpack: (config) => {
    if (isProd) {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  },
  chainWebpack: (config) => {
    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal']
    modules.forEach((match) => {
      config.module
        .rule('sass')
        .oneOf(match)
        .use('sass-loader')
        .tap((opt) => mergeSassVariables(opt, "'@/styles/variables.scss'"))
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap((opt) => mergeSassVariables(opt, "'@/styles/variables.scss';"))
    })
    config.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000, // 将要被分包的chunks，如果压缩前体积不足30k，将不会被拆包
      maxSize: 0,
      minChunks: 1, // 某个chunks被多次引用，如果这个引用次数小于某个值，将不会被拆包
      maxAsyncRequests: 5, // 表示按需加载文件时，并行请求的最大数目。默认为5。
      maxInitialRequests: 3, // 表示加载入口文件时，并行请求的最大数目。默认为3
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    })
  },
  devServer: {
    hot: true,
    compress: true, // 是否启动压缩 gzip
    proxy: {
      '/api': {
        target: 'http://www.xxx.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
