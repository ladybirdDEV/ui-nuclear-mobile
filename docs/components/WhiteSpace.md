# WhiteSpace 上下留白

布局控件


#### Code Example
```vue
<template>
  <div :style="{ padding: '15px 0'}">
    <WhiteSpace size="xs" />
    <PlaceHolder />
    <WhiteSpace size="sm" />
    <PlaceHolder />
    <WhiteSpace />
    <PlaceHolder />
    <WhiteSpace size="lg" />
    <PlaceHolder />
    <WhiteSpace size="xl" />
    <PlaceHolder />
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
| size | 上下留白的间距，可选`xs`,`sm`,`md`,`lg`,`xl` | String | `md` |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/white-space" />