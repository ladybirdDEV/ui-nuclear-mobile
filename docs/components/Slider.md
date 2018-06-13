# Slider 滑动输入条


#### Code Example
```vue
<template>
  <div>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :min="0" :max="30" :defaultValue="26" @onChange="(value) => this.log('change:'+ value)" @onAfterChange="(value) => this.log('afterchange:'+ value)" />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :min="0" :max="30" :defaultValue="26" disabled />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :trackStyle="{backgroundColor: 'red', height: '5px'}" :railStyle="{backgroundColor: 'blue', height: '5px'}" :handleStyle="{ borderColor: 'blue', backgroundColor: 'blue', marginTop: '1px'}" :min="0" :max="30" :defaultValue="26" :dotSize="14" />
    </WingBlank>
  </div>
</template>
<script>
import Slider from '@/components/Slider'
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    Slider,
    WhiteSpace,
    WingBlank
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
  margin: 0;
}

</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| min | 最小值 | Number | 0 |
| max | 最大值 | Number | 100 |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。 | Number | 1 |
| value | 设置当前取值。 | Array | - |
| defaultValue | 设置初始取值。 | Number | 0 |
| disabled | 值为 true 时，滑块为禁用状态 | Boolean | false |
| marks `未实现` | 刻度标记 | - | - |
| dots `未实现` | 是否只能拖拽到刻度上 | - | - |
| included  `未实现` | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | - | - |
| handleStyle | 滑块的样式 | Object | - |
| trackStyle | 选中部分滑动条的样式 | Object | - |
| railStyle | 未选中部分滑动条的样式 | Object| - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | value[Number,Number] |
| onAfterChange | 拖动结束后，把当前值返回 | value[Number,Number]|

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/slider" />