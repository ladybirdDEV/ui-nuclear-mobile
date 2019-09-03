<script>
export default {
  name: "FlexItem",
  props: {
    disabled: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'um-flexbox'
    }
  },
  render() {
    const { prefixCls } = this.$props
    const children = this.$slots.default
    const wrapCls = `${prefixCls}-item`
    return <div class={wrapCls}>{children}</div>
  }
}
</script>
