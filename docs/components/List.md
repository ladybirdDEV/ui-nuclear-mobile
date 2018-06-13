# List 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

### 规则

- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。


## List

#### Code Example
```vue
<template>
  <div>
    <List renderHeader="Basic Style">
      <ListItem extra="extra content">Title</ListItem>
    </List>
    <List renderHeader="Subtitle">
      <ListItem arrow="horizontal" multipleLine :onClick="()=>{}">
        Title
        <ListItemBrief>subtitle</ListItemBrief>
      </ListItem>
      <ListItem arrow="horizontal" multipleLine platform="android" :onClick="()=>{}">
        ListItem （Android）
        <ListItemBrief>There may have water ripple effect of
          <br /> material if you set the click event.</ListItemBrief>
      </ListItem>
      <ListItem arrow="horizontal" multipleLine thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" :onClick="()=>{}">
        Title
        <ListItemBrief>subtitle</ListItemBrief>
      </ListItem>
    </List>
    <List renderHeader="Customized Right Side（Empty Content / Text / Image）">
      <ListItem>Title</ListItem>
      <ListItem arrow="horizontal" :onClick="()=>{}">Title</ListItem>
      <ListItem extra="extra content" arrow="horizontal" :onClick="()=>{}">Title</ListItem>
      <ListItem extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
        Title
        <ListItemBrief>subtitle</ListItemBrief>
      </ListItem>
    </List>
    <List renderHeader="Align Vertical Center">
      <ListItem multipleLine extra="extra content">
        Title
        <ListItemBrief>subtitle</ListItemBrief>
      </ListItem>
    </List>
    <List renderHeader="Icon in the left">
      <ListItem thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="horizontal" :onClick="()=>{}">My wallet</ListItem>
      <ListItem thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal" :onClick="()=>{}">
        My Cost Ratio
      </ListItem>
    </List>
    <List renderHeader="Text Wrapping" class="my-list">
      <ListItem data-seed="logId">Single line，long text will be hidden with ellipsis；</ListItem>
      <ListItem wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</ListItem>
      <ListItem extra="extra content" multipleLine align="top" wrap>
        Multiple line and long text will wrap. Long Text Long Text Long Text
      </ListItem>
      <ListItem extra="no arrow" arrow="empty" class="spe" wrap>
        In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
      </ListItem>
    </List>
    <List renderHeader="Other">
      <ListItem extra=" " :onClick="handleClick" :disabled="disabled">Click to disable</ListItem>
      <ListItem>
        <select>
          <option value="1">Html select element</option>
          <option value="2" disabled>Unable to select</option>
          <option value="3">option 3</option>
        </select>
      </ListItem>
    </List>
    <form>
      <List renderHeader="Form Validation" renderFooter="">
        <InputItem
          placeholder="please input account"
          :labelNumber="5"
          clear
          :error="hasError"
          @onChange="validateAccount"
          @onErrorClick="onErrorClick"
          v-model="account"
        >Account</InputItem>
        <InputItem
          placeholder="please input password"
          type="password"
          v-model="password"
        >Password</InputItem>
        <ListItem>Confirm Infomation
          <template slot="extra">
            <uSwitch checked></uSwitch>
          </template>
        </ListItem>
        <ListItem>
          <div style="padding:7px;">
            <Range :value="[20, 80]"></Range>
          </div>
        </ListItem>
        <ListItem>
          Number of Subscribers
          <template slot="extra">
            <Stepper showNumber style="width:100%;min-width:100px" :value="20"></Stepper>
          </template>
        </ListItem>
        <ListItem>
          <Button type="primary" size="small" inline :onClick="handleSubmit">Submit</Button>
          <Button size="small" inline :style="{marginLeft: '2.5px'}" :onClick="handleReset">Reset</Button>
        </ListItem>
      </List>
    </form>
  </div>
</template>
<script>
import { List, ListItem, ListItemBrief } from '@/components/List'
import InputItem from '@/components/InputItem'
import Stepper from '@/components/Stepper'
import uSwitch from '@/components/Switch'
import Range from '@/components/Range'
import Button from '@/components/Button'
export default {
  components: {
    List,
    ListItem,
    ListItemBrief,
    InputItem,
    Stepper,
    uSwitch,
    Range,
    Button
  },
  data () {
    return {
      disabled: false,
      hasError: false,
      account: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      this.disabled = true
    },
    validateAccount () {
      if (this.account.length < 5) {
        this.hasError = true
      } else {
        this.hasError = false
      }
    },
    onErrorClick () {
      alert('At least four charactors for account')
    },
    handleSubmit () {
      this.validateAccount()
      if (this.hasError) {
        alert('Validation failed')
      } else {
        console.log('pass')
      }
    },
    handleReset () {
      this.account = ''
      this.password = ''
    }
  }
}
</script>
<style>
.my-list .spe .um-list-line .um-list-extra {
  flex-basis: initial;
}

</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| renderHeader | list header | String / Slot `name="renderHeader"` | - |
| renderFooter | list footer | String / Slot `name="renderFooter"` | - |

## ListItem
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 缩略图 (作为 `img src`) | String / Slot `name="thumb"` | - |
| extra | 右边内容 | String / Slot `name="extra"` | - |
| arrow | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是empty则存在对应的dom,但是不显示	 | String | - |
| align | 子元素垂直对齐，可选`top`,`middle`,`bottom` | String | - |
| onClick | 点击事件的回调函数 | Function | - |
| error `不支持` (`web only`) | 报错样式,右侧文字颜色变成橙色 | Boolean | false |
| multipleLine | 多行 | Boolean | false |
| wrap | 是否换行，默认情况下，文字超长会被隐藏 | Boolean | false |
| activeStyle `不支持` (`web only`)	 | 自定义active的样式	| Object | - |
| platform (`web only`) | 设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios` | String | - |

## ListItemBrief

辅助说明，提供一个slot


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/list" />