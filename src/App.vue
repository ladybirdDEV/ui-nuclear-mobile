<template>
  <div id="app">
    <NavBar mode="light" :onLeftClick="handleClick" v-if="$route.name !== 'home'">
      <template slot="icon"><img src="../static/icon-home.svg" alt="" style="width:22px;height:22px;cursor:pointer"></template>
      {{pageTitle}}
    </NavBar>
    <div v-if="invalidRoute" style="text-align:center">
      <h1>404</h1>
      <p>这个页面还没做好...有什么建议？</p>
    </div>
    <router-view v-else />
  </div>
</template>
<script>
import Icon from '@/components/icon'
import NavBar from '@/components/nav-bar'
export default {
  name: 'app',
  components: {
    Icon,
    NavBar
  },
  computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0
    },
    pageTitle () {
      let title = this.$route.name.replace(/(-\w)/g, function (m) {
        return m[1].toUpperCase()
      })
      return title.slice(0, 1).toUpperCase() + title.slice(1)
    }
  },
  methods: {
    handleClick () {
      this.$router.push('/')
    }
  }
}
</script>
