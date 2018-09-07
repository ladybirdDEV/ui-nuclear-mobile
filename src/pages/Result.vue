<template>
  <div class="result-example">
    <WingBlank size="lg">
      <h3>基本</h3>
      <h4 style="color: #888;">支付成功</h4>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
    <Result
      title="支付成功"
    >
      <img
        slot="img"
        class="spe um-icon um-icon-md"
        src="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg" />
      <div slot="message">998.00元 <del>1098元</del></div>
    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
    <h4 style="color: #888;">验证成功</h4>
    </WingBlank>
    <Result
      message="所提交内容已成功完成验证"
      title="验证成功"
    >
      <Icon slot="img" type="check-circle" class="spe" :style="{ fill: '#1F90E6' }" />
    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">支付失败</h4>
    </WingBlank>
    <Result
      message="所选银行卡余额不足"
      title="支付失败"
    >
      <Icon slot="img" type="cross-circle-o" class="spe" :style="{ fill: '#F13642' }" />
    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">等待处理</h4>
    </WingBlank>
    <Result
      message="已提交申请，等待银行处理"
      title="等待处理"
      imgUrl="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"></Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">操作失败</h4>
    </WingBlank>
    <Result
      message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
      title="无法完成操作"
      imgUrl="https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"></Result>
  </div>
</template>

<script>
  import Result from '@/components/result'
  import Icon from '@/components/icon'
  import WhiteSpace from '@/components/white-space'
  import WingBlank from '@/components/wing-blank'

  export default {
    components: {
      Result,
      WhiteSpace,
      WingBlank,
      Icon
    }
  }
</script>
<style>
.result-example .spe {
  width: 60px;
  height: 60px;
}
</style>

