<template>
  <div style="margin: 10px 30px;">
    <h2>popup date picker</h2>
    <button @click="disable">{{disabled ? 'enable' : 'disable'}}</button>
    <button :disabled="disabled" @click="handleClick">open</button>
    <div>
      <MobilePopup
        className="fortest"
        transitionName="mobile-picker-popup-slide-fade"
        maskTransitionName="mobile-picker-popup-fade"
        title="Picker"
        :disabled="disabled"
        :onDismiss="onDismiss"
        :onOk="onOk"
        v-model="visible">
        <!-- <div style="height: 160px; display: flex; justify-content: center;align-items: center;">
          popupContent
        </div> -->
          <DemoPicker ref="picker"></DemoPicker>
      </MobilePopup>
    </div>
  </div>
</template>

<script>
import MobilePopup from '@/components/MobilePicker/MobilePopup'
import DemoPicker from './Picker'
export default {
  components: {
    MobilePopup,
    DemoPicker
  },
  data () {
    return {
      disabled: false,
      visible: false
    }
  },
  methods: {
    disable () {
      this.disabled = !this.disabled
    },
    onOk (value) {
      value = this.$refs.picker.value
      console.log('onOk', value)
    },
    onDismiss () {
      console.log('onDismiss')
    },
    handleClick () {
      this.visible = true
      console.log('visible')
    }
  }
}
</script>
