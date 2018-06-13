# TextareaItem 多行输入

用于接受多行文本。

### 规则
 * 支持通过键盘或者剪切板输入文本。
 * 通过光标可以在垂直或者水平方向进行移动。


#### Code Example
```vue
<template>
  <div>
    <List renderHeader="Customize to focus">
      <TextareaItem title="标题"
                    placeholder="auto focus in Alipay client"
                    autoHeight ></TextareaItem>
      <TextareaItem title="标题"
                    placeholder="click the button below to focus"
                    ref='textarea'
                    autoHeight
                    :onBlur='onBlur'
                    :onFocus='onFocus'></TextareaItem>
      <ListItem>
        <div class="click-btn" @click="btnClick">click to focus</div>
      </ListItem>
    </List>
    <!-- <List renderHeader="Whether is controlled">
      <TextareaItem title="受控组件" placeholder="controlled"></TextareaItem>
      <TextareaItem title="非受控组件"
                    placeholder="please input content"
                    clear>
      </TextareaItem>
    </List> -->
    <List renderHeader="Auto / Fixed height">
      <TextareaItem title="高度自适应" autoHeight/>
      <TextareaItem :rows=3 placeholder="fixed number of lines"/>
    </List>

    <List renderHeader="show clear">
      <TextareaItem clear title="标题" placeholder="displayed clear while typing"/>
    </List>

    <List renderHeader="Custom title（text / image / empty)">
          <TextareaItem
            title=""
            placeholder="title can be customized"
            >
              <img src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/>
          </TextareaItem>
    </List>

     <List renderHeader='Limited value length'>
          <TextareaItem
            placeholder="can enter up to 5 characters"
            :count=5
          />
    </List>

    <List renderHeader='Count'>
          <TextareaItem
            defaultValue="计数功能，我的意见是..."
            :rows=5
            :count=100
          />
    </List>

    <List renderHeader="'Not editable / Disabled'">
          <TextareaItem
            value="not editable"
            title="姓名"
            :editable=false
          />
          <TextareaItem
            value="disabled style"
            title="姓名"
            disabled
          />
    </List>
  </div>
</template>

<script>
  import TextareaItem from '@/components/TextareaItem'
  import { List, ListItem, ListItemBrief } from '@/components/List'

  export default {
    components: {
      TextareaItem,
      List,
      ListItem,
      ListItemBrief
    },
    data () {
      return {}
    },
    methods: {
      btnClick () {
        this.$refs.textarea.setFocus()
      },
      onBlur (value) {
        console.log(value)
      },
      onFocus (value) {
        console.log(value)
      }
    }
  }
</script>

<style>
.click-btn {
  width: 100%;
  color: rgb(16, 142, 233);
  text-align: center
}
</style>


```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | value 值 | String | 无 |
| defaultValue | 设置初始默认值	 | String | 无 |
| placeholder | placeholder | String | '' |
| editable | 是否可编辑	 | bool | true |
| disabled | 是否禁用	 | bool | false |
| clear | 是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false |
| rows | 显示几行 | number | 1 |
| count | 计数功能,兼具最大长度,默认为0,代表不开启计数功能 | number | 无 |
| onChange | change 事件触发的回调函数 | function | 无 |
| onBlur | blur 事件触发的回调函数 | function | 无 |
| onFocus | focus 事件触发的回调函数 | function | 无 |
| error | 报错样式 | bool | false |
| onErrorClick | 点击报错 icon 触发的回调 | function | 无 |
| autoHeight | 高度自适应, autoHeight 和 rows 请二选一 | bool | false |
| labelNumber | 定宽枚举值：num * @input-label-width: 34px，可用2-7之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | 5 |
| name (`Web Only`) | textarea 的 name | String | 无 |
| prefixListCls (`Web Only`) | 列表 className 前缀 | String | `um-list` |
| title (`Web Only`) | 文案说明	 | String | '' |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| setFocus`Web Only` | 强制获得焦点	 |  |

```js
 methods: {
      btnClick () {
        this.$refs.textarea.setFocus()
      }
    }
```

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/textarea-item" />