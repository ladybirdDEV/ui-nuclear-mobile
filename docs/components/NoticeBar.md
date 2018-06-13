# NoticeBar 通告栏

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 规则

需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。


#### Code Example
```vue
<template>
  <div>
    <NoticeBar :marqueeProps="{ loop: true, style: { padding: '0 7.5px'} }">
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link" :onClick="log">
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon="null">Remove the default icon.</NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable">
      <Icon type="check-circle-o" slot="icon" size="xxs"></Icon>
      Customized icon.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable">
      <span slot="action" style="color: #a1a1a1">不再提示</span>
      Closable demo for `actionText`.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link">
      <span slot="action">去看看</span>
      Link demo for `actionText`.
    </NoticeBar>
  </div>
</template>
<script>
import NoticeBar from '@/components/NoticeBar'
import WhiteSpace from '@/components/WhiteSpace'
import Icon from '@/components/Icon'
export default {
  components: {
    NoticeBar,
    WhiteSpace,
    Icon
  },
  methods: {
    log (e) {
      console.log('click')
    }
  }
}
</script>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 提示类型，可选 `closable`,`link` | String | `''` |
| icon | 在开始位置设置图标	 | Slot / String `设置为'null'时不显示图标` | `<Icon type="voice" size="xxs"></Icon>` |
| onClick | 点击关闭或者操作区域的回调函数	 | Function | - |
| marqueeProps | marquee 参数	 | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}` |
| action | 用于替换操作 icon 的文案 | Slot | `mode = 'closable'` 时为 `×`; `mode = 'link'` 时为 `>` |


<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/notice-bar" />