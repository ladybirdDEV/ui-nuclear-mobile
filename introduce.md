# UI Nuclear Mobile of Vue

`ui-nuclear-mobile` 是 [Ant Design](http://ant.design/) 的移动规范的 Vue 实现。

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 多平台支持，组件丰富，全面覆盖各类使用场景
- 全面兼容Vue

## 适用场景

- 适用于中大型产品应用
- 适合于基于Vue的多终端应用
- 适合不同UI风格的高度定制需求的应用

## 快速上手
> 推荐上手之前首先学习[Vue](https://cn.vuejs.org/v2/guide/),确认 [Node.js](https://nodejs.org/en/) 已经升级到 v7.0 或以上

### 1. 创建一个项目

可以是已有项目,或者是用 [vue-cli](https://github.com/vuejs/vue-cli) 新创建的空项目

### 2. 安装

```bash
$ npm install ui-nuclear-mobile --save
```

### 3. 使用

入口页面(~/src/main.js)相关设置

```javascript
import UiNuclearMobile from 'ui-nuclear-mobile'
import 'ui-nuclear-mobile/dist/main.css'

...

Vue.use(UiNuclearMobile)
```

#### 按需加载

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```javascript
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", {
      "libraryName": "ui-nuclear-mobile",
      "libraryDirectory": "src/components"
    }]
  ]
}
```
> 提醒:按需引用仍然需要导入样式，即在 main.js 或根组件执行 import 'ui-nuclear-mobile/dist/main.css'


然后只需从 ui-nuclear-mobile 引入模块即可，无需单独引入样式。

> 提醒: 使用需加载模式时，`Babel`并不会对`node_modules`下的文件进行处理，这将导致 `npm run dev` 的结果在 `safari` 浏览器上显示错误，需要在 `~/build/webpack.base.conf.js`中 `babel-loader`部分做如下配置

```javascript
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('src'), resolve('test'), resolve('node_modules/ui-nuclear-mobile/src')]
},
```

## 如何贡献

如果你希望参与贡献，欢迎 [Pull Request](https://github.com/ladybirdDEV/ui-nuclear-mobile/pulls), 给我们 [报告bug](https://github.com/ladybirdDEV/ui-nuclear-mobile/issues)
