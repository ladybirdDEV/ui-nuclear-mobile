# ActivityIndicator 活动指示器

活动指示器


#### Code Example
```vue
<template>
  <WingBlank>
    <h3>基本</h3>
    <p>Without text</p>
    <ActivityIndicator></ActivityIndicator>
    <p>With text</p>
    <ActivityIndicator text="loading..." size="small"></ActivityIndicator>
    <p>With large size and customized text style</p>
    <ActivityIndicator text="loading..." size="large" align="vertical" style="font-size: 16px;color: #000"></ActivityIndicator>
  </WingBlank>
</template>

<script>
  import WingBlank from '@/components/WingBlank'
  import Button from '@/components/Button'
  import WhiteSpace from '@/components/WhiteSpace'
  import ActionSheet from '@/components/ActionSheet'
  import ActivityIndicator from '@/components/ActivityIndicator'

  export default{
    components: {
      WingBlank,
      ActionSheet,
      Button,
      WhiteSpace,
      ActivityIndicator
    },
    data () {
      return {}
    }
  }
</script>

<style>
p {
  color: #888;
}
</style>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  animating  | 显隐状态	 | boolean | true |
|  size  | spinner大小，可选small/large	 | string | small |
|  text  | loading文本	 | string | loading... |
|  align  | 垂直排列还是水平排列，可选值horizontal，vertical	 | string | horizontal |
|  textStyle  | 自定义文本样式	 | string | 无 |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/activity-indicator" />