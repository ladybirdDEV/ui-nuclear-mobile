# 定制主题
ui-nuclear-mobile 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

## 样式变量

ui-nuclear-mobile 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

- [默认样式变量](https://github.com/ladybirdDEV/ui-nuclear-mobile/blob/master/src/components/style/themes/default.less)

## 定制方式
用 less 文件进行变量覆盖。

建立一个单独的 `less` 文件如下，再引入这个文件。

```css
@import "~ui-nuclear-mobile/dist/main.less";  // 引入官方提供的 less 样式入口文件
@import "your-theme-file.less";  // 用于覆盖上面定义的变量
```

注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。
