<template>
  <div :class="wrapCls">
    <div :class="[prefixCls + '-header-content']">
      <slot name="thumb" v-if="hasThumb">
        <img :src="thumb" :style="thumbStyle">
      </slot>
      <slot name="title" v-if="hasTitle">
        {{ title }}
      </slot>
      <div :class="[prefixCls + '-header-extra']" v-if="hasExtra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'um-card'
export default {
  name: 'CardHeader',
  data () {
    return {
      prefixCls: prefixCls,
      hasThumb: false,
      hasTitle: false,
      hasExtra: false
    }
  },
  mounted () {
    this.hasThumb = this.$slots.thumb !== undefined || this.thumb
    this.hasTitle = this.$slots.title !== undefined || this.title
    this.hasExtra = this.$slots.extra !== undefined || this.extra
  },
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}-header`]: true
      }
    }
  },
  props: {
    title: {
      type: String
    },
    thumb: {
      type: String
    },
    thumbStyle: {
      type: Object,
      default: () => { return {} }
    },
    extra: {
      type: String
    }
  }
}
</script>
