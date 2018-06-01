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

<style>
  .um-progress-fixed {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
  }
  .um-progress-progress {
    position: absolute;
    display: block;
    top: 50%;
    background-color: #26a2ff;
    transform: translate(0, -50%);
    width: 0;
  }
  .um-progress-background {
    position: absolute;
    transform: translate(0, -50%);
    left: 0;
    top: 50%;
    right: 0;
    background-color: #ebebeb;
    height: 3px;
  }
  .um-progress-content {
    position: relative;
    flex: 1;
  }
</style>
