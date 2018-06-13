# NavBar 导航栏

位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。

### 规则

- 可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。

- 可在导航栏中使用 SegmentedControl 对内容进行层级划分。

- 避免用过多的元素填满导航栏。一般情况下，一个『返回按钮』、一个『标题』、一个『当前视图的控件』就足够了；如果已经有了 SegmentedControl ，一般只搭配一个『返回按钮』或者『当前视图的控件』。

- 为图标和文字控件，提供更大的点击热区。



#### Code Example
```vue
<template>
  <div>
    <NavBar mode="light" :onLeftClick="log">
      <Icon type="left" slot="icon"></Icon>
      NavBar
      <template slot="rightContent">
        <Icon type="search" style="margin-right:16px;"></Icon>
        <Icon type="ellipsis"></Icon>
      </template>
    </NavBar>
    <NavBar leftContent="Back">
      NavBar
      <template slot="rightContent">
        <Icon type="search" style="margin-right:16px;"></Icon>
        <Icon type="ellipsis"></Icon>
      </template>
    </NavBar>
  </div>
</template>
<script>
import Icon from '@/components/Icon'
import NavBar from '@/components/NavBar'
export default{
  components: {
    NavBar,
    Icon
  },
  methods: {
    log () {
      console.log('onLeftClick')
    }
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 模式 | String `'dark'` `'light'` | `'dark'` |
| icon | 出现在最左边的图标占位符 | Slot `name="icon"` | - |
| leftContent | 导航左边内容 | String / Slot `name="leftContent"` | - |
| rightContent | 导航右边内容 | Slot `name="rightContent"` | - |
| onLeftClick | 导航左边点击回调 | Function | - |
<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/nav-bar" />