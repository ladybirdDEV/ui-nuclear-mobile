<script>
export default {
  name: 'TabBarItem',
  props: {
    prefixCls: {
      type: String,
      default: 'um-tab-bar-item'
    },
    title: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean
    },
    badge: {
      type: [String, Number]
    },
    icon: {
      type: String
    },
    selectedIcon: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  render () {
    const { prefixCls } = this.$props
    const children = this.$slots.default
    return <div class={prefixCls}>{children}</div>
  }
}
</script>
