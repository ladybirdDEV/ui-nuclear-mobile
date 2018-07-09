<template>

</template>

<script>
export default {
  methods: {
    select (value, itemHeight, scrollTo) {
      const children = this.$children
      for (let i = 0; i < children.length; i++) {
        if (children[i].value === value) {
          this.selectByIndex(i, itemHeight, scrollTo)
          return
        }
      }
      this.selectByIndex(0, itemHeight, scrollTo)
    },
    selectByIndex (index, itemHeight, zscrollTo) {
      if (index < 0 || index > (this.$children.length + 1) || !itemHeight) {
        return
      }
      zscrollTo(index * itemHeight)
    },
    coumputeChildIndex (top, itemHeight, childrenLength) {
      let index = top / itemHeight
      const floor = Math.floor(index)
      if (index - floor > 0.5) {
        index = floor + 1
      } else {
        index = floor
      }
      return Math.min(index, childrenLength - 1)
    },
    doScrollingComplete (top, itemHeight, fireValueChange) {
      const children = this.$children
      const index = this.coumputeChildIndex(top, itemHeight, children.length)
      const child = children[index]
      if (child) {
        fireValueChange(child.value)
      } else if (console.warn) {
        console.warn('child not found', children, index)
      }
      this.$emit('change', child.value)
    }
  }
}
</script>

