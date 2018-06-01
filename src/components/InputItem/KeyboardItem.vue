<template>
  <td :class="wrapCls" :rowspan="rowSpan" @click="onClick">
    <slot></slot>
  </td>
</template>
<script>
import { oneOf } from '../../utils'
import Feedback from '@/components/Feedback/Feedback'
const prefixCls = 'um-number-keyboard'
export default {
  name: 'KeyboardItem',
  mixins: [Feedback],
  data () {
    return {
      activeClassName: `${prefixCls}-item-active`
    }
  },
  props: {
    rowSpan: {
      type: Number
    },
    type: {
      validator (value) {
        return oneOf(value, ['delete', 'confirm', 'hide'])
      }
    }
  },
  computed: {
    value () {
      if (this.type === 'delete') {
        return 'delete'
      } else if (this.type === 'hide') {
        return 'hide'
      } else if (this.type === 'confirm') {
        return 'confirm'
      } else {
        return this.getChildrenTextContent(this.$slots.default)
      }
    },
    wrapCls () {
      return {
        [`${prefixCls}-item`]: true
      }
    }
  },
  methods: {
    getChildrenTextContent (childen) {
      return childen.map((node) => {
        return node.childen ? this.getChildrenTextContent(node.children) : node.text
      }).join('')
    },
    onClick () {
      this.$emit('onClick', this.value)
    }
  }
}
</script>
