# Result 结果页

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 规则
 * 用作非常重要的操作反馈，如支付成功，无网络状态
 * 个性化且优美的插画，可以提升品牌形象。
 * 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。


#### Code Example
```vue
<template>
  <div>
    <WingBlank size="lg">
      <h3>基本</h3>
      <h4 style="color: #888;">支付成功</h4>
      <WhiteSpace></WhiteSpace>
    </WingBlank>
    <Result message="998.00元"
            title="支付成功"
            imgUrl='https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg'>

    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
    <h4 style="color: #888;">验证成功</h4>
    </WingBlank>
    <Result message="所提交内容已成功完成验证"
            iconClass="check-circle"
            title="验证成功"
            iconColor="#26a2ff">

    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">支付失败</h4>
    </WingBlank>
    <Result message="所选银行卡余额不足"
            iconClass="cross-circle-o"
            title="支付失败"
            iconColor="rgb(241, 54, 66)">
    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">等待处理</h4>
    </WingBlank>
    <Result message="已提交申请，等待银行处理"
            title="等待处理"
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg">

    </Result>
    <WhiteSpace></WhiteSpace>
    <WingBlank size="lg">
      <h4 style="color: #888;">操作失败</h4>
    </WingBlank>
    <Result message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
            title="无法完成操作"
            imgUrl="https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg">

    </Result>
  </div>
</template>

<script>
  import Result from '@/components/Result'
  import Icon from '@/components/Icon'
  import WhiteSpace from '@/components/WhiteSpace'
  import WingBlank from '@/components/WingBlank'

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

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  imgUrl  | 插图 url	| string | 无 |
|  iconClass  | icon类型	| string | 无 |
|  iconColor | icon颜色	| string | 无 |
|  title | title 文案	| string | 无 |
|  message | message 文案	| string | 无 |
|  buttonText | 按钮文案		| string | 无 |
|  buttonType | 请参考 button 的配置	| string | 无 |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
|  onButtonClick | 按钮回调函数	 | (e: Object): void |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/result" />