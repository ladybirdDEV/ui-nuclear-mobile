var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.pack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  externals: {
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    },
    swiper: {
      root: 'swiper',
      commonjs: 'swiper',
      commonjs2: 'swiper',
      amd: 'swiper'
    },
    'vue-awesome-swiper': {
      root: 'vue-awesome-swiper',
      commonjs: 'vue-awesome-swiper',
      commonjs2: 'vue-awesome-swiper',
      amd: 'vue-awesome-swiper'
    },
    'vue-slider-component': {
      root: 'vue-slider-component',
      commonjs: 'vue-slider-component',
      commonjs2: 'vue-slider-component',
      amd: 'vue-slider-component'
    },
    'vue-sticky-position': {
      root: 'vue-sticky-position',
      commonjs: 'vue-sticky-position',
      commonjs2: 'vue-sticky-position',
      amd: 'vue-sticky-position'
    },
    'dateformat': {
      root: 'dateformat',
      commonjs: 'dateformat',
      commonjs2: 'dateformat',
      amd: 'dateformat'
    }
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicPath,
    filename: 'main.js',
    library: 'ui-nuclear-mobile',       // 模块名称
    libraryTarget: 'umd',   // 输出格式
    umdNamedDefine: true    // 是否将模块名称作为 AMD 输出的命名空间
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new ExtractTextPlugin({
      filename: 'main.css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
  ]
})
module.exports = webpackConfig
