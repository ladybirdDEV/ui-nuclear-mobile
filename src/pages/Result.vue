<template>
  <div>
    <WingBlank size="lg">
      <h3>基本</h3>
      <h4 style="color: #888;">支付成功</h4>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
    <Result
      message="998.00元"
      title="支付成功"
      imgUrl='https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg'></Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
    <h4 style="color: #888;">验证成功</h4>
    </WingBlank>
    <Result
      message="所提交内容已成功完成验证"
      iconClass="check-circle"
      title="验证成功"
      iconColor="#26a2ff"></Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">支付失败</h4>
    </WingBlank>
    <Result
      message="所选银行卡余额不足"
      iconClass="cross-circle-o"
      title="支付失败"
      iconColor="rgb(241, 54, 66)"></Result>
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
  import Result from '@/components/Result'
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
//    methods: {
//      log (obj) {
//        console.log(obj)
//      }
//    }
  }
</script>
