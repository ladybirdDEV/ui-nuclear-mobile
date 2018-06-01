<template>
  <div class="um-slider-wrapper">
    <vue-slider ref="slider" :value="currentValue" v-bind="options" @callback="onChange(currentValue)" @drag-end="afterChange(currentValue)"></vue-slider>
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component'
export default {
  name: 'Range',
  components: {
    vueSlider
  },
  data () {
    return {
      currentValue: this.value ? this.value : this.defaultValue,
      options: {
        tooltip: false,
        speed: 0,
        dotSize: this.dotSize,
        min: this.min,
        max: this.max,
        height: 2,
        interval: this.step,
        disabled: this.disabled,
        processStyle: this.trackStyle,
        bgStyle: this.railStyle,
        sliderStyle: this.handleStyle
      }
    }
  },
  methods: {
    onChange (value) {
      this.$emit('onChange', value)
    },
    afterChange (value) {
      this.$emit('onAfterChange', value)
    }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    dotSize: {
      type: Number,
      default: 22
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number
    },
    defaultValue: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trackStyle: {
      type: Object
    },
    railStyle: {
      type: Object
    },
    handleStyle: {
      type: Object
    }
  }
}
</script>
