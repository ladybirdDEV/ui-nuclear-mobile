# InputItem 文本输入

用于接受单行文本。

### 规则

- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。


> `InputItem` 必须用 `List` 组件包裹才能正常使用

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 可以是银行卡bankCard; 手机号phone(此时最大长度固定为11,maxLength设置无效); 密码password; 数字number(为了尽量唤起带小数点的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); digit(表示原生的 number 类型); money(带小数点的模拟的数字键盘`Web Only`) 以及其他标准 html input type 类型 |String | `text` |
| v-model | value 值 | String | - |
| initialValue | 设置初始默认值 | String | - |
| placeholder | 占位提示 | String | - |
| editable | 是否可编辑 | Boolean | true |
| disabled | 是否禁用	 | Boolean | false |
| clear | 是否带清除功能(仅editable为true,disabled为false才生效) | Boolean | false |
| maxLength | 最大长度 | Number | - |
| error | 是否展现报错提示 | Boolean | false |
| extra	| 右边注释 | String | - |
| labelNumber | 标签的文字个数，可用`2-7`之间的数字 | Number | `5` |
| updatePlaceholder `不支持` | 当清除内容时，是否将清除前的内容替换到 placeholder 中	 | Boolean | false |
| prefixListCls `暂不支持` (`web only`) | 列表 class 前缀 | String | `um-list`
| name | input 的 name | String | - |
| moneyKeyboardAlign (`web only`) | 文字排版起始方向, 只有 `type='money'` 支持， 可选为 `'left'`, `'right'` | String | `'right'` |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | change 事件触发 | value |
| onBlur | blur 事件触发 | value |
| onFocus | focus 事件触发 | value |
| onErrorClick | 点击报错 icon 触发	 | - |
| onExtraClick | extra 点击事件触发	 | - |

### methods
| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| setFocus | 使input聚焦 | Function | - |

可以通过添加ref来进行访问

