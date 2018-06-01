<template>
  <div>
    <NavBar mode="light" :onLeftClick="log">
      <Icon type="left" slot="icon"></Icon>
      NavBar
      <template slot="rightContent">
        <Icon type="search" style="margin-right:16px;"></Icon>
        <Icon type="ellipsis"></Icon>
      </template>
    </NavBar>
    <NavBar leftContent="Back">
      NavBar
      <template slot="rightContent">
        <Icon type="search" style="margin-right:16px;"></Icon>
        <Icon type="ellipsis"></Icon>
      </template>
    </NavBar>
  </div>
</template>
<script>
import Icon from '@/components/Icon'
import NavBar from '@/components/NavBar'
export default{
  components: {
    NavBar,
    Icon
  },
  methods: {
    log () {
      console.log('onLeftClick')
    }
  }
}
</script>
