# Radio 单选框

单选框

## Radio
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | v-model绑定的值 | String/Number | - |
| defaultChecked | 初始是否选中| Boolean | - |
| name | name | String | - |
| checked | 指定当前是否选中| Boolean | - |
| disabled | 	是否禁用 | Boolean | false |
| onChange | 	change 事件触发的回调函数		 | Function | - |

### events
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| change | 值切换时触发，与`onChange`二选一即可 | 选中的值 |

## RadioItem

基于`ListItem`对`Radio`进行封装,`ListItem`的`thumb`属性固定传入`Radio`,其他属性和`ListItem`一致。 其他 `API`和 `Radio` 相同。
