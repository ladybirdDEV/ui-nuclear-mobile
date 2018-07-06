<template>
  <div class="um-card-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CardBody'
}
</script>
<style>
.um-card-body {
  position: relative;
  border-top: 1PX solid #ddd;
  padding: 15px 15px 6px;
  font-size: 15px;
  color: #333;
  min-height: 40px;
  flex: 1;
}

@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 2dppx) {
  html:not([data-scale]) .um-card-body {
    border-top: none;
  }
  html:not([data-scale]) .um-card-body::before {
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
    transform-origin: 50% 50%;
    transform: scaleY(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3),
(min-resolution: 2dppx) and (min-resolution: 3dppx) {
  html:not([data-scale]) .um-card-body::before {
    transform: scaleY(0.33);
  }
}

</style>
