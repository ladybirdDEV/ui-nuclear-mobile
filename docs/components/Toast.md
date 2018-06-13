# Toast 轻提示

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

### 规则
 * 一次只显示一个 toast。
 * 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。



#### Code Example
```vue
<template>
    <WingBlank>
      <WhiteSpace></WhiteSpace>
        <Button @click.native="textonly">text only</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="withoutmask">without mask</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="cumstomicon">cumstom icon</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="toastsuccess">success</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="toastfail">fail</Button>
      <WhiteSpace></WhiteSpace>
      <Button @click.native="toastloading">loading</Button>
    </WingBlank>
</template>

<script>
  import Toast from '@/components/Toast'
  import WingBlank from '@/components/WingBlank'
  import Button from '@/components/Button'
  import WhiteSpace from '@/components/WhiteSpace'

  export default{
    components: {
      WingBlank,
      Button,
      WhiteSpace,
      Toast
    },
    data () {
      return {
        visible: true
      }
    },
    methods: {
      textonly () {
        Toast({
          message: '操作成功',
          duration: 2000,
          onClose: () => {
            console.log('onClose callback')
          }
        })
      },
      withoutmask () {
        Toast({
          message: 'Toast without mask',
          duration: 2000,
          mask: false
        })
      },
      cumstomicon () {
        Toast({
          iconClass: 'loading'
        })
      },
      toastsuccess () {
        Toast({
          iconClass: 'check',
          message: '操作成功'
        })
      },
      toastfail () {
        Toast({
          iconClass: 'cross',
          message: '操作失败'
        })
      },
      toastloading () {
        Toast({
          iconClass: 'loading',
          message: 'loading...'
        })
      }
    }
  }
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  message  |  内容  | | 无|
|  duration  |  自动关闭的延时，单位秒	  | number | 3000 |
|  iconclass  |  图标名称  | String | 无 |
|  mask  |  是否显示透明蒙层，防止触摸穿透  | Boolean | true |
|  onClose  |  关闭后回调	  | Function | 无 |



### samples

```js
 Toast({
          iconClass: 'check',
          message: '操作成功',
          onClose: () => {
                      console.log('onClose callback')
                    }
        })
```



<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/toast" />