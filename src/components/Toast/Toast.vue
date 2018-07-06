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
  import Icon from '../Icon'

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

<style>
  .um-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    left: 50%;
    top: 50%;
    -webkit-transform:translate(-50%, -50%);
    transition: opacity .3s linear;
  }
  .um-toast-icon {
    margin: 0 auto;
    margin-bottom: 4px;
  }
  .um-toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }
  .um-toast-pop-enter, .um-toast-pop-leave-active {
    opacity: 0;
  }
  .um-toast-mask {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000000;
    opacity: 0;
  }
</style>
