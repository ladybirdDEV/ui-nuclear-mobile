# WingBlank  两翼留白

两翼留白


#### Code Example
```vue
<template>
  <div :style="{ padding: '15px 0'}">
    <WingBlank><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
</template>
<script>
import PlaceHolder from '@/components/PlaceHolder'
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    PlaceHolder,
    WingBlank,
    WhiteSpace
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 两翼留白的间距，可选`sm`,`md`,`lg` | String | `lg` |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/wing-blank" />