# Dialog
vuejs dialog component for mobile

### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefixCls | 样式前缀 | String | vmc-dialog |
| className | 额外的class | String | - |
| wrapClassName | dialog wrapper的样式名 | String | - |
| styles | 组件的样式,比如:width,height | Object | - |
| bodyStyle | dialog body部分的样式,比如:height | Object | {} |
| maskStyle | dialog mask部分的样式 | Object | {} |
| v-model | 是否显示dialog,双向绑定 | Boolean | false |
| animation | dialog 主体的动画class名称 | String | - |
| maskAnimation | dialog 遮罩层动画class名称 | String | - |
| transitionName | dialog 主体过渡动画class名称 | String | - |
| maskTransitionName | dialog 遮罩层过渡动画class名称 | String | - |
| title | dialog标题 | Slot `name="title"` | - |
| footer | dialog尾部 | Slot `name="title"` | - |
| closable | 是否显示关闭按钮 | Boolean | true |
| mask | 是否显示遮罩 | Boolean | true |
| maskClosable | 是否开启点击遮罩关闭 | Boolean | true |

### event
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onClose | 关闭时 | currentVisible |
| onChange | 打开或关闭时 | currentVisible |
