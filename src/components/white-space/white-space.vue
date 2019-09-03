<script>
import classnames from "classnames"
export default {
  name: "WhiteSpace",
  props: {
    size: {
      type: String,
      default: "md"
    },
    prefixCls: {
      type: String,
      default: "um-whitespace"
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e)
    }
  },
  render() {
    const { prefixCls, size } = this.$props
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`)
    return <div class={wrapCls} on-click={this.onClick} />
  }
}
</script>
