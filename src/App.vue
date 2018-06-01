<template>
  <div id="app">
    <NavBar mode="light" :leftContent="backText" :onLeftClick="handleClick">
      首页
    </NavBar>
    <div v-if="invalidRoute" style="text-align:center">
      <h1>404</h1>
      <p>这个页面还没做好...有什么建议？</p>
    </div>
    <router-view v-else />
  </div>
</template>
<script>
import Icon from '@/components/Icon'
import NavBar from '@/components/NavBar'
export default {
  name: 'app',
  components: {
    Icon,
    NavBar
  },
  computed: {
    backText () {
      if (this.$route.name === 'home') {
        return undefined
      } else {
        return '返回'
      }
    },
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0
    }
  },
  methods: {
    handleClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
@import './components/style/index';
html,
body {
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", Helvetica, "Microsoft YaHei", Arial;
}
</style>
