# Drawer 抽屉

### 规则

是 Android 推荐的导航方式，常见于该平台应用。


#### Code Example
```vue
<template>
  <div>
    <NavBar :onLeftClick="onOpenChange">
      <Icon type="ellipsis" slot="icon"></Icon>
    </NavBar>
    <Drawer
      class="my-drawer"
      :style="{minHeight: clientHeight + 'px'}"
      :contentStyle="{ color: '#A6A6A6', textAlign: 'center', paddingTop: '42px' }"
      ref="drawer"
      v-model="open"
      enableDragHandle
    >
      <template slot="sidebar">
        <List>
          <ListItem
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</ListItem>
          <ListItem
            v-for="index in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"
            :key="index"
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >Category{{index}}</ListItem>
        </List>
      </template>
      Click upper-left corner
    </Drawer>
  </div>
</template>
<script>
import Icon from '@/components/Icon'
import NavBar from '@/components/NavBar'
import Drawer from '@/components/Drawer'
import { List, ListItem } from '@/components/List'
export default {
  components: {
    NavBar,
    Drawer,
    Icon,
    List,
    ListItem
  },
  mounted () {
    this.clientHeight = document.documentElement.clientHeight
  },
  data () {
    return {
      clientHeight: '',
      open: false
    }
  },
  methods: {
    onOpenChange () {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
.my-drawer {
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.my-drawer .um-drawer-sidebar {
  background-color: #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.my-drawer .um-drawer-sidebar .um-list {
  width: 300px;
  padding: 0;
}
</style>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| sidebar | 抽屉里的内容 | Slot `name="sidebar"` | - |
| v-model | 开关状态 `双向绑定` | Boolean | - |
| position | 抽屉所在位置	 | String `'left' 'right' 'top' 'bottom'`| `'left'` |
| sidebarStyle (`web only`)	 | 抽屉的样式 | Object | - |
| contentStyle (`web only`)	| 内容样式 | Object | - |
| overlayStyle (`web only`)	| 遮罩样式 | Object | - |
| dragHandleStyle (`web only`)	| 拖动条样式 | Object | - |
| touch `暂不支持` (`web only`)	| 是否开启触摸手势 | Boolean | true |
| transitions `暂不支持` (`web only`)	| 是否开启动画 | Boolean | true |
| docked (`web only`)	| 是否嵌入到正常文档流里	 | Boolean | false |
| enableDragHandle (`web only`)	| 是否禁止 dragHandle | Boolean | false |
| dragToggleDistance (`web only`)	| 打开关闭抽屉时距 `sidebar` 的拖动距离	 | Number | 30 |

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onOpenChange | open 状态切换时 | open |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/drawer" />