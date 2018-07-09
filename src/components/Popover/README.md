# Popover 气泡

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。


### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 当前显隐状态 | Boolean | false |
| onVisibleChange | 当显隐状态变化时回调函数 | Function | |
| placement | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String | 'bottomRight' |
| mask | 是否显示遮罩背景层 | Boolean | false |

### slots

| 名字 | 说明 | 作用域参数 |
| --- | --- | --- |
| overlay | 显示的菜单内容 | slot`slot-scope="item"`。 slot的具体内容加点击事件`@click="item.select(index)"`。参考如下代码 |

``` html
  <template slot="overlay" slot-scope="item">
    <Item :icon="myImg('tOtXhkIWzwotgGSeptou')" @click="item.select(0)">Scan</Item>
    <Item :icon="myImg('PKAgAqZWJVNwKsAJSmXd')" @click="item.select(1)">My Qrcode</Item>
    <Item :icon="myImg('uQIYTFeRrjPELImDRrPt')" @click="item.select(2)">Help</Item>
    <div @click="item.select(3)">111</div>
  </template>
```

### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| close | 点击遮罩层关闭后的触发 |  |
| select | 选中某选项时的触发 | 某一项的特殊标记（自定义） |

# Popover.Item
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | Boolean | false |
| icon | icon图标类型 | String | |

### events
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| click | 选中某选项时的回调函数，指定为`slot-scope`中的`select`，即对popover中select的回调 | 某一项的特殊标记（自定义） |
