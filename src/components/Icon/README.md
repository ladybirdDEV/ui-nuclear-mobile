# Icon 图标

图标

### 图标命名规则

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；

- 命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 内置 icon 名称 | String `types见下方`| - |
| size | 图标大小 | String `xxs` `xs` `sm` `md` `lg` | 'md' |
| color | 图标颜色 | String | '#000' |

### icon types:
| 名称 | 说明 |
| --- | --- |
| `check` | √ 实心对勾|
| `check-circle` | 实心圆中镂空对勾 |
| `check-circle-o` | 空心圆中实心对勾 |
| `cross` | × 实心叉 |
| `cross-circle` | 实心圆中镂空叉 |
| `cross-circle-o` | 空心圆中实心对勾 |
| `left` | 向左 |
| `right` | 向右 |
| `down` | 向下 |
| `up` | 向上 |
| `loading` | 圆环动画 |
| `search` | 放大镜 |
| `ellipsis` | 省略号 |
| `ellipsis-circle` | 圆环中省略号 |
| `exclamation-circle` | ⚠️ 警告 |
| `info-circle` | 💬 对话气泡 |
| `question-circle` | 圆环中问号 |
| `voice` | 🔊 音量 |
| `plus` | ＋ 加号 |
| `minus` | － 减号 |
| `dislike` | 🙁 不高兴 |
| `fail` | 圆环内部叉  |
| `success` | 圆环内部对勾 |
