
# ActionSheet 动作面板
 弹出类动作面板

## ActionSheet

 
#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>Baisc</h3>
      <Button @click.native="showActionSheet">ShowActionSheet</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="shareActionSheet">ShareActionSheet</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="shareActionSheetMulpitleLine">ShareActionSheetMulpitleLine</Button>
    </WingBlank>
  </div>
</template>

<script>
  import WingBlank from '@/components/WingBlank'
  import Button from '@/components/Button'
  import WhiteSpace from '@/components/WhiteSpace'
  import ActionSheet from '@/components/ActionSheet'
  import Toast from '@/components/Toast'

  export default{
    components: {
      WingBlank,
      ActionSheet,
      Button,
      WhiteSpace,
      Toast
    },
    data () {
      return {}
    },
    methods: {
      showActionSheet () {
        ActionSheet({
//          title: '提示',
          message: 'I am description, description, description',
          cancelButtonIndex: 4,
          destructiveButtonIndex: 3,
          btnGroup: [
            {text: 'Operation1'},
            {text: 'Operation2'},
            {text: 'Operation3'},
            {text: 'Delete'},
            {text: 'Cancel'}
          ],
          callback: (item) => new Promise((resolve) => {
            console.log(item)
            resolve()
          })
        })
      },
      shareActionSheet () {
        ActionSheet.share({
          message: 'I am description, description, description',
          cancelButtonText: '取消',
          iconGroup: [
            {title: '发送给朋友', icon: 'https://gw.alipayobjects.com/zos/rmsportal/OpHiXAcYzmPQHcdlLFrc.png'},
            {title: '新浪微博', icon: 'https://gw.alipayobjects.com/zos/rmsportal/wvEzCMiDZjthhAOcwTOu.png'},
            {title: '生活圈', icon: 'https://gw.alipayobjects.com/zos/rmsportal/cTTayShKtEIdQVEMuiWt.png'},
            {title: '微信好友', icon: 'https://gw.alipayobjects.com/zos/rmsportal/umnHwvEgSyQtXlZjNJTt.png'},
            {title: 'QQ', icon: 'https://gw.alipayobjects.com/zos/rmsportal/SxpunpETIwdxNjcJamwB.png'}
          ],
          callback: (inputValue) => new Promise((resolve) => {
            Toast({
              message: 'closed after 1000s',
              duration: 1000
            })
            setTimeout(() => {
              console.log(inputValue)
              resolve()
            }, 1000)
          })
        })
      },
      shareActionSheetMulpitleLine () {
        ActionSheet.share({
          message: 'I am description, description, description',
          cancelButtonText: '取消',
          iconGroup: [[
            {title: '发送给朋友', icon: 'https://gw.alipayobjects.com/zos/rmsportal/OpHiXAcYzmPQHcdlLFrc.png'},
            {title: '新浪微博', icon: 'https://gw.alipayobjects.com/zos/rmsportal/wvEzCMiDZjthhAOcwTOu.png'},
            {title: '生活圈', icon: 'https://gw.alipayobjects.com/zos/rmsportal/cTTayShKtEIdQVEMuiWt.png'},
            {title: '微信好友', icon: 'https://gw.alipayobjects.com/zos/rmsportal/umnHwvEgSyQtXlZjNJTt.png'},
            {title: 'QQ', icon: 'https://gw.alipayobjects.com/zos/rmsportal/SxpunpETIwdxNjcJamwB.png'}
          ], [
            {title: '微信好友', icon: 'https://gw.alipayobjects.com/zos/rmsportal/umnHwvEgSyQtXlZjNJTt.png'},
            {title: 'QQ', icon: 'https://gw.alipayobjects.com/zos/rmsportal/SxpunpETIwdxNjcJamwB.png'}
          ]],
          callback: (row, col) => new Promise((resolve) => {
            console.log(row, col)
            resolve()
          })
        })
      }
    }
  }
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  title  | 顶部标题 | String | 无 |
|  message  | 顶部标题下的简要消息 | String | 无 |
|  cancelButtonIndex  | 按钮列表中取消按钮的索引位置 | Int | 无 |
|  destructiveButtonIndex  | 按钮列表中破坏性按钮（一般为删除）的索引位置 | Int | 无 |
|  maskClosable  | 点击蒙层是否允许关闭，默认允许 | Boolean | true |
|  btnGroup  | 按钮标题列表 (required) | Array | 无 |
|  callback  | 函数支持返回 Promise | Function | 无 |

## ActionSheet.share
动作面板，分享模式

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  title  | 顶部标题 | String | 无 |
|  message  | 顶部标题下的简要消息 | String | 无 |
|  cancelButtonText  | 取消按钮文案 | String | 取消 |
|  maskClosable  | 点击蒙层是否允许关闭，默认允许 | Boolean | true |
|  iconGroup  | 按钮标题列表 (required)，可以是二维数组，能显示多行按钮，例如[[{icon,title},...],...]表示两行两列。当为二维数组时callback有两个参数，第一个为列序列、第二个为行序列。 | Array | 无 |
|  callback  | 函数支持返回 Promise | Function | 无 |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/action-sheet" />