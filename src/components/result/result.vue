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

<style>
  .um-result {
    position: relative;
    text-align: center;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 21px;
    background-color: #fff;
  }
  .um-result-icon {
    margin: 0 auto;
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  .um-result-img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    line-height: 60px;
  }
  .um-result-title {
    margin-top: 15px;
    line-height: 1;
    font-size: 21px;
    color: #000;
  }
  .um-result-message {
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 8px;
    line-height: 1.5;
    font-size: 16px;
    color: #888;
  }
  .um-result-button {
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
  }
</style>
