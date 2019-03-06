const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')
// 做一点微小的改动，测试
const resolve = file => path.resolve(__dirname, file)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
    configureWebpack: {
      devServer:{
        disableHostCheck: true
      },
      externals:{
        
      }
    },
    // 默认情况下babel-loader会忽略所有node_module中的文件，需要通过babel显式转译一个依赖，须在这个选项中列出来
    transpileDependencies: [
      'mand-mobile'
    ],
    css: {
      loaderOptions: {
        stylus: {
          use: [
            poststylus([
              pxtorem({
                rootValue: 88,
                minPixelValue: 2,
                propWhiteList: []
              }),
              'autoprefixer'
            ])
          ],
          import: [
            resolve('./src/assets/css/theme.custom')
          ]
        }
      }
      
    }
  }