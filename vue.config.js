module.exports = {
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  publicPath: './',
  assetsDir: 'public',
  productionSourceMap: false, // 不在production环境使用SourceMap
  configureWebpack: {
    externals: {
      Microsoft: 'Microsoft'
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'H-vue3-ts'
        return args
      })
  },
  devServer: {
    public: '0.0.0.0:4396',
    port: 4396, // 端口号
    open: true, // 配置自动启动浏览器
    hotOnly: true, // 热更新
    hot: true,
    disableHostCheck: true,
    proxy: {
      '/cms': {
        target: 'https://temp.china-sg.com',
        changeOrigin: true,
        pathRewrite: {
          '^/cms': '/cms'
        },
        secure: false
      }
    }
  },
  css: {
    // 当为true时，css文件名可省略 module 默认为 false
    requireModuleExtension: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    // 默认生产环境下是 true，开发环境下是 false
    // 是否使用css分离插件 ExtractTextPlugin 开启CSS分离之后每个组件的css会单独打包，造成页面上有大量请求，所以在正式环境中将CSS分离关闭
    extract: process.env.NODE_ENV === 'production',
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    // requireModuleExtension: false,// 启用 CSS modules for all css / pre-processor files.
    // 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    // css预设器配置项
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
