<template>
  <div>
    <white-space></white-space>
    <NavBar title="NavBar" mode="light">
      <Icon type="left" slot="icon"></Icon>
      NavBar
      <template slot="rightContent">
        <popover :visible="isVisible" mask @close="isShow" @select="onSelect">
          <Icon type="ellipsis" color="black"/>
          <template slot="overlay" slot-scope="item">
            <Item :icon="myImg('tOtXhkIWzwotgGSeptou')" @click="item.select(0)">Scan</Item>
            <Item :icon="myImg('PKAgAqZWJVNwKsAJSmXd')" @click="item.select(1)">My Qrcode</Item>
            <Item :icon="myImg('uQIYTFeRrjPELImDRrPt')" @click="item.select(2)">Help</Item>
          </template>
        </popover>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import WhiteSpace from '@/components/white-space'
  import Icon from '@/components/icon'
  import NavBar from '@/components/nav-bar'
  import { Popover, Item } from '@/components/Popover'

  export default {
    components: {
      WhiteSpace,
      Icon,
      NavBar,
      Popover,
      Item
    },
    data () {
      return {
        isVisible: true
      }
    },
    methods: {
      isShow (value) {
        console.log('close popover')
      },
      onSelect (index) {
        console.log('onSelect', index)
      },
      myImg (src) {
        return `<img src="https://gw.alipayobjects.com/zos/rmsportal/${src}.svg" class="um-icon um-icon-xs" alt="" />`
      }
    }
  }
</script>
