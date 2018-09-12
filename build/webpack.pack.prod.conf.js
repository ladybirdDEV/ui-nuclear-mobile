'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.pack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
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
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  ]
})

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig
