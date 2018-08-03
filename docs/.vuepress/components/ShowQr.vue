<template>
  <div class="qr-container">
    <span>QR</span>
    <div>
      <span>扫二维码查看演示效果</span>
      <img :src="$withBase(`/${name}.svg`)" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowQr',
  props: {
    name: String
  }
}
</script>
<style scoped lang="less">
.qr-container {
  position: relative;
  display: inline-block;
  margin: 0 10px;
  &>span {
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #2db7f5;
      & + div {
        transform: scale(1);
      }
    }
  }
  div {
    transform: scale(0);
    transform-origin: top left;
    transition: all 0.3s;
    position: absolute;
    top: 100%;
    background-color: #fff;
    box-shadow: #ccc 0 0 2px;
    padding: 10px;
    z-index: 9;
    text-align: center;
    &>span {
      font-size: 14px;
    }
    img {
      display: block;
      min-width: 150px;
      max-width: 150px;
    }
  }
}
</style>
