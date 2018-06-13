# Grid 宫格

在水平和垂直方向，将布局切分成若干等大的区块。


#### Code Example
```vue
<template>
  <div>
    <div class="sub-title">Always square grid item </div>
    <Grid :data="mockData" :activeStyle="false"></Grid>
    <div class="sub-title">Grid item adjust accroiding to img size </div>
    <Grid :data="mockData" :square="false" class="not-square-grid" :onClick="handleClick" />
    <div class="sub-title">ColumnNum=3 </div>
    <Grid :data="mockData" :columnNum="3" />
    <div class="sub-title">No border</div>
    <Grid :data="mockData" :hasLine="false" />
    <div class="sub-title">Carousel</div>
    <Grid :data="mockData" isCarousel :onClick="(el, index) => handleClick(el, index)"/>
    <div class="sub-title">Custom content</div>
    <Grid :data="mockData1" :renderItem="renderItem" :columnNum="3"></Grid>
    <div class="sub-title">Custom GridCell Style</div>
    <Grid :data="mockData1" :columnNum="3" :itemStyle="{ height: '150px', backgroundColor: '#ffff00' }" />
  </div>
</template>
<script>
import Grid from '@/components/Grid'
export default {
  components: {
    Grid
  },
  computed: {
    mockData () {
      return Array.from(new Array(9)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`
      }))
    },
    mockData1 () {
      return Array.from(new Array(9)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
      }))
    }
  },
  methods: {
    handleClick (el, index) {
      console.log(el, index)
    },
    renderItem (h, dataItem) {
      return (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            <span>I am title..</span>
          </div>
        </div>
      )
    }
  }
}
</script>
<style scoped>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 15px 0 9px 15px;
}

</style>
<style>
.not-square-grid .um-grid-icon {
  width: 40px;
  height: 60px;
}

</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 传入的菜单数据 | Array<{icon, text}> | [] |
| onClick | 点击每个菜单的回调函数 | Function (el: Object, index: Number) | - |
| columnNum | 列数 | Number | `4` |
| hasLine | 是否有边框 | Boolean | `true` |
| isCarousel | 是否跑马灯 | Boolean | `false` |
| carouselMaxRow | 如果是跑马灯, 一页跑马灯需要展示的行数 | Number | `2` |
| renderItem | 自定义每个 grid 条目的创建函数 | Function (h, dataItem) | - |
| square (`Web Only`) | 每个格子是否固定为正方形 | Boolean | `true` |
| activeStyle  (`Web Only`)  `暂不支持` | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName (Web Only)  `暂不支持` | 点击反馈的自定义类名 | String | - |
| itemStyle | 每个格子自定义样式 | Object | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/grid" />