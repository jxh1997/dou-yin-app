console.log(process.env.NODE_ENV)
const port = process.env.port || 8011;
const path = require('path');

function resolve(dir) {
  // __dirname:项目的路径
  return path.join(__dirname, dir);
}


module.exports = {
  outputDir: process.env.NODE_ENV === 'production' ?  'dist': '' ,
  productionSourceMap: false, // 生产环境是否 生成SourceMap
  devServer: {
    port,
    // 启动之后 自动打开浏览器
    open: true,
    // 报错的时候全屏显示错误
    overlay: {
      warnings: false,
      errors: true
    },
    //代理
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true
      },

    }
  },
  css: {

  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'common': resolve('src/common'),
        'components': resolve('src/common/components'),
        'styles': resolve('src/common/styles'),
        'store': resolve('src/store'),
        'views': resolve('src/views'),
        'request': resolve('src/request'),
        'utils': resolve('src/utils'),
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}

// 全局样式 变量、函数
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        resolve('src/common/styles/variables.less'),
        resolve('src/common/styles/mixin.less'),
      ],
    })
}