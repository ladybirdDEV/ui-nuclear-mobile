# Progress 进度条
进度条


#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent=20 :unfilled=false></Progress>
    <WhiteSpace size="lg"></WhiteSpace>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent=60></Progress>
  </div>
</template>

<script>
  import Progress from '@/components/Progress'
  import WhiteSpace from '@/components/WhiteSpace'
  import WingBlank from '@/components/WingBlank'

  export default {
    components: {
      Progress,
      WhiteSpace,
      WingBlank
    }
  }
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  percent  | 进度百分比 | number | 0 |
|  position  | 进度条的位置，fixed 将浮出固定在最顶层，可选: fixed normal	 | string | fixed |
|  unfilled  | 是否隐藏未填充轨道	 | boolean | true |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/progress" />