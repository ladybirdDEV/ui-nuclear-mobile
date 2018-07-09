# Result 结果页

在整张页面中组织插画、图标、文字等内容，向用户反馈操作结果。

### 规则
 * 用作非常重要的操作反馈，如支付成功，无网络状态
 * 个性化且优美的插画，可以提升品牌形象。
 * 对于错误类型的结果页，页面中需要提供明确的行动点，eg：重新加载。

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
