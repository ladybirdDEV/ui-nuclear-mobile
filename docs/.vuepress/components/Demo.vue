<template>
<div style="position: absolute; top: 80px; right: 50px;">
  <div style="width: 377px; height: 620px;">
    <div class="demo-preview-wrapper">
      <div class="demo-preview-header">
        <div class="demo-preview-statbar">
          <img width="350Px" alt="presentation" src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" style="margin: 0px 2px;">
        </div>
        <div style="height: 40px;">
          <div class="url-box">{{url}}</div>
        </div>
      </div>
      <section class="code-box-demo code-box-demo-preview">
        <iframe id="demoFrame" name="demoFrame" title="antd-mobile" :src="url" style="width: 377px; height: 548px; border-top: none; border-right: 1px solid rgb(247, 247, 247); border-bottom: 1px solid rgb(247, 247, 247); border-left: 1px solid rgb(247, 247, 247); border-image: initial; box-shadow: rgb(235, 235, 235) 0px 2px 4px;"></iframe>
      </section>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Demo',
  props: {
    url: String
  }
}
</script>
<style lang="less">
.content:not(.custom) {
  margin: 0;
}
.demo-preview-wrapper {
  margin: 0px auto;
  .demo-preview-header {
    text-align: center;
    border-radius: 4px 4px 0px 0px;
    background: linear-gradient(rgba(55, 55, 55, 0.98), rgb(84, 84, 86));
    .demo-preview-statbar {
      height: 20px;
      margin-bottom: 4px;
    }
    .url-box {
      width: 350px;
      height: 28px;
      line-height: 28px;
      color: rgb(255, 255, 255);
      background-color: rgb(162, 162, 162);
      white-space: nowrap;
      overflow-x: scroll;
      margin: 0px auto;
      border-radius: 4px;
    }
    .url-box::-webkit-scrollbar {
      height: 0;
    }
  }
}
</style>
