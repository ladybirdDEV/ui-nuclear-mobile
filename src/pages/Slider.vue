<template>
  <div>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :min="0" :max="30" :defaultValue="26" @onChange="(value) => this.log('change:'+ value)" @onAfterChange="(value) => this.log('afterchange:'+ value)" />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :min="0" :max="30" :defaultValue="26" disabled />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Slider</p>
      <Slider style="margin-left:15px;margin-right:15px" :trackStyle="{backgroundColor: 'red', height: '5px'}" :railStyle="{backgroundColor: 'blue', height: '5px'}" :handleStyle="{ borderColor: 'blue', backgroundColor: 'blue', marginTop: '1px'}" :min="0" :max="30" :defaultValue="26" :dotSize="14" />
    </WingBlank>
  </div>
</template>
<script>
import Slider from '@/components/slider'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
export default {
  components: {
    Slider,
    WhiteSpace,
    WingBlank
  },
  methods: {
    log (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
  margin: 0;
}

</style>
