# Tag 标签
tag,标签


#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
      <div style="color: #999">RadioItem demo</div>
      <WhiteSpace></WhiteSpace>
      <Tag text="Basic"></Tag>
      <Tag text="Selected" :selected=true></Tag>
      <Tag :disabled=true text="Disabled"></Tag>
      <WhiteSpace></WhiteSpace>
      <Tag :closable=true text="Closeable"></Tag>
      <Tag text="Small and Readonly" :small=true></Tag>
    </WingBlank>
  </div>
</template>

<script>
  import Tag from '@/components/Tag'
  import WingBlank from '@/components/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Tag
    }
  }
</script>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  small  | 小号标签	 | Boolean | false |
|  disabled	 | 是否不可用		 | Boolean | false |
|  closable	 | 是否关闭（非 disabled small 状态） Boolean | false |
|  selected		 | 是否默认选中	| Boolean | false |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/tag" />