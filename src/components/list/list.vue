<template>
  <div class="um-list">
    <div class="um-list-header" v-if="isHeader"><slot name="renderHeader">{{ renderHeader }}</slot></div>
    <div class="um-list-body">
      <slot></slot>
    </div>
    <div class="um-list-footer" v-if="isFooter"><slot name="renderFooter">{{ renderFooter }}</slot></div>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      isHeader: false,
      isFooter: false
    }
  },
  mounted () {
    this.isHeader = this.$slots.renderHeader !== undefined || this.renderHeader
    this.isFooter = this.$slots.renderFooter !== undefined || this.renderFooter
  },
  props: {
    renderHeader: {
      type: String
    },
    renderFooter: {
      type: String
    }
  }
}
</script>
