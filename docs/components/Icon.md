# Icon 图标

图标

### 图标命名规则

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；

- 命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。


#### Code Example
```vue
<template>
  <div>
    <div class="demoTitle">基本</div>
    <Grid :data="data" :renderItem="(h, data) => renderItem(h, data)" :columnNum="3" :hasLine="false" :activeStyle="false"></Grid>
    <div class="demoTitle">大小</div>
    <Grid :data="sizeData" :renderItem="(h, sizeData) => renderItem(h, sizeData)" :columnNum="5" :hasLine="false" :activeStyle="false"></Grid>
  </div>
</template>
<script>
import Icon from '@/components/Icon'
import Grid from '@/components/Grid'
export default {
  components: {
    Icon,
    Grid
  },
  computed: {
    data () {
      const data = this.list.map(item => ({
        icon: item,
        text: item
      }))
      return data
    },
    sizeData () {
      const data = this.size.map(item => ({
        icon: 'search',
        size: item,
        text: item
      }))
      return data
    }
  },
  data () {
    return {
      list: [
        'check',
        'check-circle',
        'check-circle-o',
        'cross',
        'cross-circle',
        'cross-circle-o',
        'left',
        'right',
        'down',
        'up',
        'loading',
        'search',
        'ellipsis',
        'ellipsis-circle',
        'exclamation-circle',
        'info-circle',
        'question-circle',
        'voice',
        'plus',
        'minus',
        'dislike',
        'fail',
        'success'
      ],
      size: ['xxs', 'xs', 'sm', 'md', 'lg']
    }
  },
  methods: {
    renderItem (h, data) {
      return (
        <div style={{ padding: '12.5px' }}>
          <Icon type={data.icon} size={data.size}></Icon>
          <div class="um-grid-text">{data.text}</div>
        </div>
      )
    }
  }
}
</script>
<style lang="less">
.demoTitle {
  padding: 15px 0 9px 15px;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  font-weight: bolder;
  position: relative;
}
</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 内置 icon 名称 | String `types见下方`| - |
| size | 图标大小 | String `xxs` `xs` `sm` `md` `lg` | 'md' |
| color | 图标颜色 | String | '#000' |

### icon types:
| 名称 | 说明 |
| --- | --- |
| `check` | √ 实心对勾|
| `check-circle` | 实心圆中镂空对勾 |
| `check-circle-o` | 空心圆中实心对勾 |
| `cross` | × 实心叉 |
| `cross-circle` | 实心圆中镂空叉 |
| `cross-circle-o` | 空心圆中实心对勾 |
| `left` | 向左 |
| `right` | 向右 |
| `down` | 向下 |
| `up` | 向上 |
| `loading` | 圆环动画 |
| `search` | 放大镜 |
| `ellipsis` | 省略号 |
| `ellipsis-circle` | 圆环中省略号 |
| `exclamation-circle` | ⚠️ 警告 |
| `info-circle` | 💬 对话气泡 |
| `question-circle` | 圆环中问号 |
| `voice` | 🔊 音量 |
| `plus` | ＋ 加号 |
| `minus` | － 减号 |
| `dislike` | 🙁 不高兴 |
| `fail` | 圆环内部叉  |
| `success` | 圆环内部对勾 |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/icon" />