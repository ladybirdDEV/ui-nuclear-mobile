<template>
    <div>
     <div class="um-segment-item-inner" :style="activeInnerStyle"></div>
      {{ value }}
    </div>
</template>

<script>
import Feedback from '../feedback/feedback.js'

export default {
  name: 'SegControlItem',
  props: {
    value: {
      type: String
    },
    tintColor: {
      type: String
    }
  },
  mixins: [Feedback],
  data () {
    return {
      activeClassName: 'um-segment-item-active',
      activeInnerStyle: this.tintColor ? {backgroundColor: this.tintColor} : {}
    }
  },
  methods: {
    itemCls (index) {
      return [
        `um-segment-item`,
        {
          [`um-segment-item-selected`]: this.curselectedIndex === index
        }
      ]
    },
    itemStyle (index) {
      return {
        color: this.curselectedIndex === index ? '#fff' : this.tintColor,
        backgroundColor: this.curselectedIndex === index ? this.tintColor : 'transparent',
        borderColor: this.tintColor
      }
    }
  }
}
</script>


