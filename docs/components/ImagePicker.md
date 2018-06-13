# ImagePicker 图片选择器

注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能



#### Code Example
```vue
<template>
<ImagePicker :files="files"></ImagePicker>
</template>

<script>
  import ImagePicker from '@/components/ImagePicker'
  export default {
    components: {
      ImagePicker
    },
    data () {
      return {
        files: [
          {
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2121'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2122'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2123'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2124'
          }
        ]
      }
    }
  }
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|  files  |  图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性  | Array | [] |
| onChange | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第二个参数代表的是移除图片的索引 |
| onImageClick | 点击图片触发的回调 | function |
| onAddImageClick | 自定义选择图片的方法 | function |
| onFail | 选择失败或取消回调 | function |
| selectable | 是否显示添加按钮	 | boolean | true |
| multiple | 是否支持多选 | boolean | false |
| accept | 图片类型 | string	 | image/* |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/image-picker" />