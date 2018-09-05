<template>
  <div class="um-result">
    <div class="um-result-img">
      <img v-if="imgUrl !== undefined" class="um-result-img" :src="imgUrl"/>
      <Icon class="um-result-icon" style="width: 60px;height: 60px" :type="iconClass" size='lg' v-if="iconClass !== ''" :color="iconColor"></Icon>
    </div>
    <div class="um-result-title">{{ title }}</div>
    <div class="um-result-message">{{ message }}</div>
    <div class="um-result-button" v-if="buttonText !== undefined">
      <Button :type="buttonType" @click.native="buttonClick($refs.button)" ref="button">{{ buttonText }}</Button>
    </div>
  </div>
</template>
<script>
  import Button from '../button'
  import Icon from '../icon'

  export default {
    components: {
      Button,
      Icon
    },
    name: 'Result',
    props: {
      message: String,
      title: String,
      iconClass: String,
      imgUrl: String,
      iconColor: String,
      buttonType: String,
      buttonText: String,
      onButtonClick: {
        type: Function
      }
    },
    methods: {
      buttonClick (obj) {
        this.onButtonClick(obj)
      }
    }
  }
</script>

<style lang="less">
@import url('style/index.less');
</style>
