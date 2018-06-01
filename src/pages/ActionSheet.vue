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
