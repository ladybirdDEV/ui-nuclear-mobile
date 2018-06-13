# Range 区域选择

允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。



#### Code Example
```vue
<template>
  <div>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Basic range</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" @onChange="change" @afterChange="afterChange" />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Disabled range</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" disabled />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p className="sub-title">Range with customized style</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" :trackStyle="{backgroundColor: 'red'}" :railStyle="{backgroundColor: 'black'}" :handleStyle="[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]"/>
    </WingBlank>
  </div>
</template>
<script>
import Range from '@/components/Range'
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    Range,
    WhiteSpace,
    WingBlank
  },
  methods: {
    change (v) {
      console.log('change' + v)
    },
    afterChange (v) {
      console.log('afterChange' + v)
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
| defaultValue | 设置初始取值。 | Array | [0, 0] |
| disabled | 值为 true 时，滑块为禁用状态 | Boolean | false |
| marks `未实现` | 刻度标记 | - | - |
| dots `未实现` | 是否只能拖拽到刻度上 | - | - |
| included  `未实现` | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | - | - |
| count `未实现` | Determine how many ranges to render, and multiple handles will be rendered (number + 1). | - | - |
| allowCross `未实现` | allowCross could be set as true to allow those handles to cross. | - | - |
| pushable `未实现` | pushable could be set as true to allow pushing of surrounding handles when moving an handle. When set to a number, the number will be the minimum ensured distance between handles. | - | - |
| handleStyle | 滑块的样式，按数组顺序应用到多滑块 | Array[Object] | - |
| trackStyle | 选中部分滑动条的样式 | Array[Object]  | - |
| railStyle | 未选中部分滑动条的样式 | Array[Object]  | - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | value |
| onAfterChange | 拖动结束后，把当前值返回 | value |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/range" />