<template>
  <div>
    <transition name="um-toast-pop">
      <div class="um-toast" v-show="visible" :style="{ 'padding': iconClass === '' ? '10px' : '16px' }">
        <Icon class="um-toast-icon" :type="iconClass" size='lg' v-if="iconClass !== ''" color="#fff"></Icon>
        <span class="um-toast-text">{{ message }}</span>
      </div>
    </transition>
    <div class="um-toast-mask" v-show='mask'></div>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    components: {
      Icon
    },
    name: 'ToastComponent',
    props: {
      message: String,
      iconClass: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: false
      }
    }
  }
</script>
