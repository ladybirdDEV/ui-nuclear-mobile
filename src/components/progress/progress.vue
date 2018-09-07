<template>
    <div class="um-progress-content" :class="{'um-progress-fixed': position === 'fixed' }">
      <div v-if="unfilled" class="um-progress-background" :style="{ height: height + 'px' }"></div>
      <div class="um-progress-progress" :style="{ width: percent + '%', height: height + 'px' }"></div>
    </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    percent: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 5
    },
    unfilled: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'fixed'
    }
  }
}
</script>

<style lang="less">
@import url('style/index.less');
</style>
