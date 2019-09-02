<template>
  <div :class="wrapCls" ref="parent">
    <div class="um-accordion-header" role="tab" ref="header" @click="toggle">
      <i class="arrow"></i>
      {{header}}
    </div>
    <div :class="contentCls" ref="content" style="">
      <div class="um-accordion-content-box" ref="box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  const prefixCls = 'um-accordion'

  export default {
    props: {
      header: String,
      name: String
    },
    data () {
      return {
        isActive: false,
        isAnim: false,
        curName: this.name
      }
    },
    computed: {
      wrapCls () {
        return {
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-active`]: this.isActive
        }
      },
      contentCls () {
        return {
          [`${prefixCls}-content`]: true,
          [`${prefixCls}-content-active`]: this.isActive,
          [`${prefixCls}-content-inactive`]: !this.isActive,
          [`${prefixCls}-anim`]: this.isAnim && this.$parent.openAnimation,
          [`${prefixCls}-anim-active`]: this.isAnim && this.$parent.openAnimation
        }
      }
    },
    watch: {
    },
    methods: {
      active () {
        const content = this.$refs.content
        if (!this.isActive) {
          this.isActive = true
          this.isAnim = true
          this.$refs.header.setAttribute('aria-expanded', 'true')
          this.$nextTick(() => {
            content.style.height = '0px'
            content.style.height = this.$refs.box.offsetHeight + 'px'
          })
        } else {
          content.style.height = '0px'
          this.$refs.parent.classList.remove('um-accordion-item-active')
          setTimeout(() => {
            this.isActive = false
            this.isAnim = false
            content.removeAttribute('style')
          }, 200)
          this.$refs.header.removeAttribute('aria-expanded')
        }
      },
      toggle () {
        if (this.$parent.toggle) {
          this.$parent.toggle({
            name: this.curName,
            isActive: this.isActive
          })
          this.active()
        } else {
          console.warn('The immediate parent component of the Panel must be Accordion')
        }
      }
    }
  }
</script>
