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
      enableDragHandle>
      <template slot="sidebar">
        <List>
          <ListItem
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine>Category</ListItem>
          <ListItem
            v-for="index in 15"
            :key="index"
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">Category{{index}}</ListItem>
        </List>
      </template>
      Click upper-left corner
    </Drawer>
  </div>
</template>
<script>
import Icon from '@/components/icon'
import NavBar from '@/components/NavBar'
import Drawer from '@/components/drawer'
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

