# Modal 对话框

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
 * 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
 * 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
 * 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
 * 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。
 


#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <h3>Baisc</h3>
      <Button @click.native="basicModal">Baisc</Button>
      <!-- <WhiteSpace></WhiteSpace>
      <Button @click.native="popupModal">popupModal</Button> -->
      <h3>Alert</h3>
      <Button @click.native="confirmModal">confirm</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="buttonsModal">more than two buttons</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="promiseModal">promise</Button>
      <h3>Prompt</h3>
      <Button @click.native="promptModal">promise</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="defaultModal">defaultValue</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="secureModal">secure-text</Button>
      <h3>Operation</h3>
      <Button @click.native="operationModal">operation</Button>
    </WingBlank>
  </div>
</template>

<script>
  import Modal from '@/components/Modal'
  import WingBlank from '@/components/WingBlank'
  import Button from '@/components/Button'
  import WhiteSpace from '@/components/WhiteSpace'
  import Toast from '@/components/Toast'

  export default{
    components: {
      WingBlank,
      Modal,
      Button,
      WhiteSpace
    },
    data () {
      return {}
    },
    methods: {
      basicModal () {
        Modal({
          title: '提示',
          message: '确定执行此操作?',
          btnGroup: [
            {text: 'Cancel', onPress: () => console.log('cancel')},
            {text: 'OK', onPress: () => console.log('Ok')}
          ]
        })
      },
      // popupModal () {
      //   Modal({
      //     title: '提示',
      //     message: '确定执行此操作?',
      //     popup: true,
      //     animationType: 'slide-up',
      //     popItem: [
      //      {text: '股票名称'},
      //      {text: '股票代码'},
      //      {text: '买入价格'}
      //     ]
      //   })
      // },
      confirmModal () {
        Modal.alert(
          'Delete', 'Are you sure',
          [
            {text: 'Cancel', onPress: () => console.log('cancel')},
            {text: 'OK', onPress: () => console.log('OK')}
          ]
        )
      },
      buttonsModal () {
        Modal.alert(
          'Much Buttons',
          'More than two buttons',
          [
            {text: 'Button1', onPress: () => console.log('第1个按钮被点击了')},
            {text: 'Button2', onPress: () => console.log('第2个按钮被点击了')},
            {text: 'Button3', onPress: () => console.log('第3个按钮被点击了')}
          ]
        )
      },
      promiseModal () {
        Modal.alert('Delete',
          'Are you sure',
          [
            {text: 'Cancel'},
            {text: 'Ok',
              onPress: () => new Promise((resolve) => {
                Toast({
                  message: '操作成功',
                  duration: 1000
                })
                setTimeout(() => {
                  resolve()
                }, 1000)
              })
            }
          ]
        )
      },
      promptModal () {
        Modal.prompt(
          'input name',
          'please input your name',
          [
            {text: 'Cancel'},
            {text: 'Submit',
              onPress: (inputValue) => new Promise((resolve) => {
                Toast({
                  message: '操作成功',
                  duration: 800
                })
                setTimeout(() => {
                  console.log(inputValue)
                  resolve()
                }, 1000)
              })
            }
          ],
          '',
          '',
          ['input your name']
        )
      },
      defaultModal () {
        Modal.prompt(
          'input name',
          'please input your name',
          [
            {text: 'Cancel'},
            {text: 'Submit', onPress: (inputValue) => console.log(inputValue)}
          ],
          '',
          'skottie',
          ['']
        )
      },
      secureModal () {
        Modal.prompt(
          'PassWord',
          'password message',
          [
            {text: 'Cancel'},
            {text: 'Submit'}
          ],
          'secure-text',
          '',
          ['input your password']
        )
      },
      operationModal () {
        Modal.operation(
          [
            {text: '标为未读', onPress: () => console.log('标为未读')},
            {text: '置顶聊天', onPress: () => console.log('置顶聊天')}
          ]
        )
      }
    }
  }
</script>



```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  title  | 标题 | String | 无 |
|  message  | 提示信息	 | String | 无 |
|  btnGroup  | 按钮组, {text, onPress, style} | Array | 无 |
|  onPress  | 点击对应按钮后的回调函数 | Function | 无 |


```js
 Modal({
           title: '提示',
           message: '确定执行此操作?',
           btnGroup: [
             {text: 'Cancel', onPress: () => console.log('cancel')},
             {text: 'OK', onPress: () => console.log('Ok')}
           ]
         })
```


# Modal.alert

```js
 Modal.alert(
          'Delete', 'Are you sure',
          [
            {text: 'Cancel', onPress: () => console.log('cancel')},
            {text: 'OK', onPress: () => console.log('OK')}
          ]
        )
```

```js
  Modal.alert(
           'Much Buttons',
           'More than two buttons',
           [
             {text: 'Button1', onPress: () => console.log('第1个按钮被点击了')},
             {text: 'Button2', onPress: () => console.log('第2个按钮被点击了')},
             {text: 'Button3', onPress: () => console.log('第3个按钮被点击了')}
           ]
         )
```

```js
  Modal.alert('Delete',
            'Are you sure',
            [
              {text: 'Cancel'},
              {text: 'Ok',
                onPress: () => new Promise((resolve) => {
                  Toast({
                    message: '操作成功',
                    duration: 1000
                  })
                  setTimeout(() => {
                    resolve()
                  }, 1000)
                })
              }
            ]
          )
```


#  Modal.prompt

```js
 Modal.prompt(
          'input name',
          'please input your name',
          [
            {text: 'Cancel'},
            {text: 'Submit',
              onPress: (inputValue) => new Promise((resolve) => {
                Toast({
                  message: '操作成功',
                  duration: 800
                })
                setTimeout(() => {
                  console.log(inputValue)
                  resolve()
                }, 1000)
              })
            }
          ],
          '',
          '',
          ['input your name']
        )
```

```js
Modal.prompt(
          'input name',
          'please input your name',
          [
            {text: 'Cancel'},
            {text: 'Submit', onPress: (inputValue) => console.log(inputValue)}
          ],
          '',
          'skottie',
          ['']
        )
```
```js
Modal.prompt(
          'PassWord',
          'password message',
          [
            {text: 'Cancel'},
            {text: 'Submit'}
          ],
          'secure-text',
          '',
          ['input your password']
        )
```

#  Modal.operation
```js
Modal.operation(
          [
            {text: '标为未读', onPress: () => console.log('标为未读')},
            {text: '置顶聊天', onPress: () => console.log('置顶聊天')}
          ]
        )
```

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/modal" />