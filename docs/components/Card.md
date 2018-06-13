# Card 卡片

用于组织信息和操作，通常也作为详细信息的入口。

### 规则

- 形状为矩形。
- 可包含多种类型的元素，eg：图片、文字、按钮等。
、

## Card

#### Code Example
```vue
<template>
  <div>
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <Card>
        <CardHeader title="This is title" thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png">
          <span slot="extra">this is extra</span>
        </CardHeader>
        <CardBody>
          <div>This is content of `Card`</div>
        </CardBody>
        <CardFooter content="footer content">
          <div slot="extra">extra footer content</div>
        </CardFooter>
      </Card>
    </WingBlank>
    <WhiteSpace size="lg" />
    <Card full>
      <CardHeader title="This is title" thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png">
        <span slot="extra">this is extra</span>
      </CardHeader>
        <CardBody>
          <div>This is content of `Card`</div>
        </CardBody>
      <CardFooter content="footer content">
        <div slot="extra">extra footer content</div>
      </CardFooter>
  </Card>
  </div>
</template>
<script>
import { Card, CardHeader, CardBody, CardFooter } from '@/components/Card'
import WingBlank from '@/components/WingBlank'
import WhiteSpace from '@/components/WhiteSpace'
export default {
  components: {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    WingBlank,
    WhiteSpace
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| full | 是否通栏  | Boolean | `false` |

## CardHeader
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | String / Slot `name="title"` | - |
| thumb | 卡片标题图片 | String / Slot `name="thumb"` | - |
| thumbStyle | 标题图片样式 | Object | {} |
| extra | 卡片标题辅助内容 | String / Slot `name="extra"` | - |

## CardBody

内容直接通过默认slot分发
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| 无 |   |   |   |

## CardFooter
### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 尾部内容 | String / Slot `name="content"` | - |
| extra | 卡片标题辅助内容 | String / Slot `name="extra"` | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/card" />