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
      onSelect (index) {
        console.log('onSelect', index)
      },
      myImg (src) {
        return `<img src="https://gw.alipayobjects.com/zos/rmsportal/${src}.svg" class="um-icon um-icon-xs" alt="" />`
      }
    }
  }
</script>
