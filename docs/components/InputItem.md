# InputItem 文本输入

用于接受单行文本。

### 规则

- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。


> `InputItem` 必须用 `List` 组件包裹才能正常使用


#### Code Example
```vue
<template>
  <div>
    <List>
      <InputItem
         type="money"
         placeholder="start from left"
         moneyKeyboardAlign="left"
         clear
      >光标在左</InputItem>
      <InputItem type="money" placeholder="start from right" clear>光标在右</InputItem>
      <InputItem type="money" placeholder="money format" clear>数字键盘</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Customize to focus
      </template>
      <InputItem
        clear
        placeholder="auto focus"
      >标题</InputItem>
      <InputItem
        clear
        placeholder="click the button below to focus"
        ref="customFocusInst"
      >标题</InputItem>
      <ListItem>
        <div :style="{ width: '100%', color: '#108ee9', textAlign: 'center' }" @click="handleClick">click to focus</div>
      </ListItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Click label to focus input
      </template>
      <InputItem
        placeholder="click label to focus input"
        ref="labelFocusInst"
      ><div @click="() => {$refs.labelFocusInst.setFocus()}">标题</div></InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Show clear
      </template>
      <InputItem
        placeholder="limited title length"
        :labelNumber="5"
        :maxLength="5"
      >标题过长超过默认的5个字</InputItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Custom title（text / image / empty)
      </template>
      <InputItem
        placeholder="no label"
      ></InputItem>
      <InputItem
        placeholder="title can be icon，image or text"
      ><div :style="{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px', }"></div></InputItem>
    </List>
    <WhiteSpace/>
    <List>
      <template slot="renderHeader">
        Customize the extra content in the right
      </template>
      <InputItem
        placeholder="0.00"
        extra="¥"
      >价格</InputItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Format
      </template>
      <InputItem
        type="bankCard"
        initialValue="8888 8888 8888 8888"
      >银行卡
      </InputItem>
      <InputItem
        type="phone"
        placeholder="186 1234 1234"
      >手机号码</InputItem>
      <InputItem
        type="password"
        placeholder="****"
      >密码</InputItem>
      <InputItem
        type="number"
        placeholder="click to show number keyboard"
      >数字键盘</InputItem>
      <InputItem
        type="digit"
        placeholder="click to show native number keyboard"
      >数字键盘</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        'Not editable / Disabled
      </template>
      <InputItem
        initialValue="not editable"
        :editable="false"
      >姓名</InputItem>
      <InputItem
        initialValue="style of disabled `InputItem`"
        disabled
      >姓名</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Confirm when typing
      </template>
      <InputItem
        type="phone"
        placeholder="input your phone"
        @onChange="onChange"
        @onErrorClick="onErrorClick"
        :error="hasError"
        v-model="value"
      >手机号码</InputItem>
    </List>
  </div>
</template>
<script>
import { List, ListItem } from '@/components/List'
import InputItem from '@/components/InputItem'
import WhiteSpace from '@/components/WhiteSpace'
import Toast from '@/components/Toast'
export default {
  components: {
    List,
    ListItem,
    InputItem,
    WhiteSpace
  },
  data () {
    return {
      hasError: false,
      value: ''
    }
  },
  methods: {
    handleClick () {
      this.$refs.customFocusInst.setFocus()
    },
    onChange () {
      if (this.value.replace(/\s/g, '').length < 11) {
        this.hasError = true
      } else {
        this.hasError = false
      }
    },
    onErrorClick () {
      Toast({
        message: 'Please enter 11 digits'
      })
    }
  }
}
</script>


```
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
| label	| 标签 | Slot | - |
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


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/input-item" />