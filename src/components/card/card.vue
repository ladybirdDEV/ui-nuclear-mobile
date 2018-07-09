<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'um-card'
export default {
  name: 'Card',
  computed: {
    wrapCls () {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-full`]: this.full
      }
    }
  },
  props: {
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.um-card {
  min-height: 96px;
  padding-bottom: 6px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #fff;
}

.um-card:not(.um-card-full) {
  border: 1PX solid #ddd;
  border-radius: 5px;
}

@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  html:not([data-scale]) .um-card:not(.um-card-full) {
    position: relative;
    border: none;
  }
  html:not([data-scale]) .um-card:not(.um-card-full)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1PX solid #ddd;
    border-radius: 10px;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    pointer-events: none;
  }
}
.um-card.um-card-full {
  position: relative;
  border-top: 1PX solid #ddd;
  border-bottom: 1PX solid #ddd;
}

@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  html:not([data-scale]) .um-card.um-card-full {
    border-top: none;
  }
  html:not([data-scale]) .um-card.um-card-full::before {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 1PX;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
(min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-card.um-card-full::before {
    -webkit-transform: scaleY(0.33);
    -ms-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}

@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  html:not([data-scale]) .um-card.um-card-full {
    border-bottom: none;
  }
  html:not([data-scale]) .um-card.um-card-full::after {
    content: '';
    position: absolute;
    background-color: #ddd;
    display: block;
    z-index: 1;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1PX;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
(min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-card.um-card-full::after {
    -webkit-transform: scaleY(0.33);
    -ms-transform: scaleY(0.33);
    transform: scaleY(0.33);
  }
}
</style>
