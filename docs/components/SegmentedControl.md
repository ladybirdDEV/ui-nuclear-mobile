# SegmentedControl 分段器

由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。

### 规则
 * 和 Tabs 功能相似，尽可能避免一个页面中同时出现这两个组件。
 * 可以搭配 NavBar 一起使用，用于显示多个视图，分段数一般为 2 个。
 * 单独放置一行时，分段数最多为 5 个；文案需要精简，一般 2-4 个字。
 * 尽可能保持文案长度一致。


#### Code Example
```vue
<template>
  <WingBlank>
    <WhiteSpace></WhiteSpace>
    <h3>基本</h3>
    <h4 style="color: #888;">Simplest</h4>
    <SegmentedControl :values="segSimplest" 
                      :onChange="change">
    </SegmentedControl>
    <WhiteSpace></WhiteSpace>
    <h4 style="color: #888;">disabled</h4>
    <SegmentedControl :values="segDisabled" disabled></SegmentedControl>
     <h4 style="color: #888;">SelectedIndex</h4>
    <SegmentedControl :values="segSelected" 
                      :selectedIndex=1
                      :onChange="change">
    </SegmentedControl>
    <h4 style="color: #888;">Custom</h4>
    <SegmentedControl :values="segSelected"
                      :selectedIndex=2
                      :tintColor='tintColor'
                      :customStyle="{ height: '40px', width: '250px'}">

    </SegmentedControl>
  </WingBlank>
</template>

<script>
  import SegmentedControl from '@/components/SegmentedControl'
  import WhiteSpace from '@/components/WhiteSpace'
  import WingBlank from '@/components/WingBlank'

  export default {
    components: {
      SegmentedControl,
      WhiteSpace,
      WingBlank
    },
    data () {
      return {
        segSimplest: ['segment1', 'segment2'],
        segDisabled: ['segment1', 'segment2'],
        segSelected: ['segment1', 'segment2', 'segment3'],
        tintColor: '#F56C6C'
      }
    },
    methods: {
      change () {
        // console.log(435345)
      }
    }
  }
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  style  | 自定义样式 | Object | {} |
|  tintColor  | 组件主色调	 | String | #108ee9 |
|  disabled  | 是否启用		 | Boolean | false |
|  selectedIndex  | 选中项在数组中的索引	| Number | 0 |
|  values	  | 选项数组,值是字符串	| array | [] |
|  onChange	  | onChange	|  | |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/segmented-control" />