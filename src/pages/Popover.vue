<template>
  <div>
    <white-space></white-space>
    <NavBar title="NavBar" mode="light">
      <Icon type="left" slot="icon"></Icon>
      NavBar
      <template slot="rightContent">
        <div @click="show()"><Icon type="ellipsis" color="black"/> </div>
        <popover :visible="isVisible" mask @on-close="isShow">
          <Item :icon="myImg('tOtXhkIWzwotgGSeptou')" :onMouseUp="onClose">Scan</Item>
          <Item :icon="myImg('PKAgAqZWJVNwKsAJSmXd')" :onMouseUp="onClose">My Qrcode</Item>
          <Item :icon="myImg('uQIYTFeRrjPELImDRrPt')" :onMouseUp="onClose">Help</Item>
        </popover>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import WhiteSpace from '@/components/WhiteSpace'
  import Icon from '@/components/Icon'
  import NavBar from '@/components/NavBar'
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
      show () {
        this.isVisible = true
      },
      isShow (value) {
        this.isVisible = value
      },
      onClose () {
        this.isVisible = false
      },
      myImg (src) {
        return `<img src="https://gw.alipayobjects.com/zos/rmsportal/${src}.svg" class="um-icon um-icon-xs" alt="" />`
      }
    }
  }
</script>
