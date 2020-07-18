<script>
import classnames from "classnames"
export default {
  name: "WingBlank",
  props: {
    size: {
      type: String,
      default: "lg"
    },
    prefixCls: {
      type: String,
      default: "um-wingblank"
    }
  },
  render() {
    const { prefixCls, size } = this.$props
    const children = this.$slots.default
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`)
    return <div class={wrapCls}>{children}</div>
  }
}
</script>
