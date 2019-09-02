<template>
  <div :style="{ width: '90%', margin: '0 auto' }">
    <button @click="handleClick">show dialog</button>
    <label>
      center
      <input type="checkbox" v-model="center" />
    </label>
    <MobileDialog
      v-model="visible"
      animation="zoom"
      maskAnimation="fade"
      :wrapClassName="center ? 'center' : ''">
      <input ref="modalInput" />
      <p @click="showDialog2">click to show dialog2</p>
      <div :style="{ height: `200px`}"></div>
    </MobileDialog>
    <MobileDialog
      v-model="visible2"
      animation="zoom"
      maskAnimation="fade">
      <input ref="modalInput" />
      <p>basic modal</p>
      <div :style="{ height: `200px`}"></div>
    </MobileDialog>
  </div>
</template>
<script>
import MobileDialog from '@/components/mobile-dialog'
export default {
  components: {
    MobileDialog
  },
  data () {
    return {
      visible: false,
      visible2: false,
      center: false
    }
  },
  methods: {
    handleClick () {
      this.visible = true
    },
    showDialog2 () {
      this.visible2 = true
    }
  }
}
</script>
