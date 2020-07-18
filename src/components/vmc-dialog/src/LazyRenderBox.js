export default {
  name: 'LazyRenderBox',
  props: {
    visible: {
      type: Boolean
    },
    hiddenClassName: {
      type: String
    }
  },
  render() {
    let className
    if (!!this.$props.hiddenClassName && !this.$props.visible) {
      className = `${this.$props.hiddenClassName}`
    }
    const props = { ...this.$props }
    delete props.hiddenClassName
    delete props.visible
    return <div {...{ props: props, class: className }}>{this.$slots.default}</div>
  }
}
