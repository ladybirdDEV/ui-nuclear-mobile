# Flex 布局
Flex 是 CSS flex 布局的一个封装。

## Flex


#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <div class="sub-title">Basic</div>
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <WhiteSpace size="lg" />
      <Flex>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
        <FlexItem>
          <PlaceHolder />
        </FlexItem>
      </Flex>
      <div class="sub-title">Wrap</div>
      <Flex wrap="wrap">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace size="lg" />
      <div class="sub-title">Align</div>
      <Flex justify="center">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex justify="between">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="start">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="end">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
      <WhiteSpace />
      <Flex align="baseline">
        <PlaceHolder class="inline" />
        <PlaceHolder class="inline small" />
        <PlaceHolder class="inline" />
      </Flex>
    </WingBlank>
  </div>
</template>
<script>
import { Flex, FlexItem } from '@/components/Flex'
import PlaceHolder from '@/components/PlaceHolder'
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    Flex,
    FlexItem,
    PlaceHolder,
    WhiteSpace,
    WingBlank
  }
}
</script>
<style scoped>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}

.inline {
  width: 80px!important;
  margin: 9px 9px 9px 0;
}

.small {
  height: 20px!important;
  line-height: 20px!important;
}

</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse` | String | `row` |
| wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse` | String | `nowrap` |
| justify | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around` | String | `start` |
| align | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch` | String | `center` |
| alignContent | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch` | String | `stretch` |

# FlexItem

FlexItem 组件默认加上了样式flex:1,保证所有 item 平均分宽度, Flex 容器的 children 不一定是 FlexItem

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/flex" />