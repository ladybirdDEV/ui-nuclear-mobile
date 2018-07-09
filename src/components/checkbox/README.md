# Checkbox 复选框

复选框

## Checkbox

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | name | String | 无 |
| defaultChecked  | 初始是否选中| Boolean | 无 |
| checked | 指定当前是否选中 | Boolean | 无 |
| disabled  | 	禁用 | Boolean | false |
| onChange  | change 事件触发的回调函数 | Function | 无 |


## CheckboxItem

基于`ListItem`对`Checkbox`进行封装,`ListItem`的`thumb`属性固定传入`Checkbox`,其他属性和`ListItem`一致。 其他 `API`和 `Checkbox` 相同。

## AgreeItem

用于同意协议这种场景的复选框
