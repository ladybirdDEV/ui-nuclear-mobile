<script>
export default {
  methods: {
    getValue () {
      const selectedValue = this.selectedValue
      const children = this.$children
      if (selectedValue && selectedValue.length) {
        return selectedValue
      } else {
        if (!children) {
          return []
        } else {
          const cc = children.map((child, index) => {
            return child.$children[0].value
          })
          return cc
        }
      }
    },
    onChange (i, v, cb) {
      const value = this.getValue().concat()
      value[i] = v
      if (cb) {
        cb(value, i)
      }
      return value
    },
    valueChange (i, v) {
      this.onChange(i, v, this.onValueChange)
      this.$emit('onChange', this.onChange(i, v))
    },
    scrollChange (i, v) {
      this.onChange(i, v, this.onScrollChange)
    }
  }
}
</script>
