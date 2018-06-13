# PickerView 选择器

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。


#### Code Example
```vue
<template>
  <div>
    <WhiteSpace />
    <PickerView :data="seasons" v-model="valueArr" @change="changed" @scroll-change="scrollChange" :disabled="false" />
    <WhiteSpace />
    <PickerView :data="city" :col="3" :cascade="true" v-model="citiesArr" @change="changedCascade" @scroll-change="scrollChangedCascade" :disabled="false" />
  </div>
</template>
<script>
import PickerView from '@/components/PickerView'
import WhiteSpace from '@/components/WhiteSpace'
import city from '@/components/MobileCascader/data'
export default {
  name: 'PickerViewPage',
  components: {
    PickerView,
    WhiteSpace
  },
  data () {
    return {
      seasons: [
        [
          {label: '2015', value: '2015'},
          {label: '2016', value: '2016'},
          {label: '2017', value: '2017'},
          {label: '2018', value: '2018'}
        ],
        [
          {label: '春', value: '春'},
          {label: '夏', value: '夏'}
        ]
      ],
      valueArr: [''],
      city: city,
      citiesArr: ['01', '01-2'],
      style: {
        background: 'red',
        fontSize: '20px'
      }
    }
  },
  methods: {
    changed (val) {
      console.log('value changed', val)
    },
    scrollChange (val) {
      console.log('scrollChange', val)
    },
    changedCascade (val) {
      console.log('changedCascade', val)
    },
    scrollChangedCascade (val, index) {
      console.log('scrollChangedCascade', val, index)
    }
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 额外的class | String | - |
| prefixCls | 样式前缀 | String | vmc-multi-picker |
| data | 展示的数据，二维数组格式，数组内元素{label: xxx, value: xx} | Array | - |
| value | v-model绑定选中的数据 | Array | - |
| disabled | 是否禁用 | Boolean | false |
| indicatorStyle | `indicator`的样式 | Object | - |
| pickerItemStyle | `picker-item`的样式 | Object | - |
| cascade | 数据是否级联 | Boolean | false |
| col | 数据的列数 | Number | - |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| change | 选中的数据改变时触发，接收参数`(value)` | 选中的数据 |
| scroll-change | 滚动引起数据改变时触发，接收参数`(value, index)` value-Array、index-操作列的索引 | 当前展示的数据 |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/picker-view" />