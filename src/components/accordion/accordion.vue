<template>
  <div class="um-accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Accordion',
  props: {
    value: Array,
    defaultActiveKey: [String, Array],
    onChange: Function,
    accordion: {
      type: Boolean,
      default: false
    },
    openAnimation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currentValue: this.defaultActiveKey
    }
  },
  methods: {
    setActive () {
      const activeKey = this.getActivekey()
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString()
        let isActive = false
        if (child.$parent.accordion) {
          isActive = activeKey[0] === name
        } else {
          isActive = activeKey.indexOf(name) > -1
        }
        if (this.accordion) {
          child.isActive = isActive
        } else {
          setTimeout(() => {
            child.isActive = isActive
          }, 200)
        }
        child.index = index
      })
    },
    getActivekey () {
      let activeKey = this.currentValue || []
      const accordion = this.accordion
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey]
      }
      if (accordion && activeKey.length > 0) {
        activeKey = [activeKey[0]]
      }
      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString()
      }
      return activeKey
    },
    toggle (data) {
      const name = data.name.toString()
      let newActiveKey = []
      if (this.accordion) {
        if (!data.isActive) {
          newActiveKey.push(name)
        }
      } else {
        let activeKey = this.getActivekey()
        let nameIndex = activeKey.indexOf(name)
        if (data.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1)
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name)
          }
        }
        newActiveKey = activeKey
      }
      this.currentValue = newActiveKey
      this.$emit('input', this.currentValue)
      if (this.onChange) {
        if (!this.accordion) {
          this.onChange(this.currentValue)
        } else {
          this.onChange(this.currentValue.toString())
        }
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue () {
      // if (this.accordion) {
      //   this.setActive()
      // }
      this.setActive()
    }
  },
  mounted () {
    this.setActive()
    if (this.accordion && !this.defaultActiveKey) {
      this.currentValue = this.$children[0].curName
    }
  }
}
</script>
