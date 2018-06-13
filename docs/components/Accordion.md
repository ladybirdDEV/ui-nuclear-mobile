# Accordion 手风琴

可以折叠/展开的内容区域。

### 规则

- 对复杂区域进行分组和隐藏。

- 通常，一次只允许单个内容区域展开；特殊情况，多个内容区域可以同时展开。

## Accordion


#### Code Example
```vue
<template>
  <div>
    <WingBlank><div class="accordion-title">基本</div></WingBlank>
    <div style="margin: 10px 0;">
      <Accordion class="my-accordion" defaultActiveKey="1" :onChange="onChange">
        <Panel header="Title 1" name="1">
          <List class="my-list">
            <ListItem>content 1</ListItem>
            <ListItem>content 2</ListItem>
            <ListItem>content 3</ListItem>
          </List>
        </Panel>
        <Panel header="Title 2" class="pad"  name="2">
          this is panel content2 or other
        </Panel>
        <Panel header="Title 3" class="pad"  name="3">
          text text text text text text text text
        </Panel>
      </Accordion>
    </div>
    <WingBlank><div class="accordion-title">手风琴模式</div></WingBlank>
    <div style="margin: 10px 0;">
      <Accordion class="my-accordion" v-model="value" accordion :openAnimation="false" :onChange="onChange">
        <Panel header="Title 1" name="1">
          <List class="my-list">
            <ListItem>content 1</ListItem>
            <ListItem>content 2</ListItem>
            <ListItem>content 3</ListItem>
          </List>
        </Panel>
        <Panel header="Title 2" class="pad"  name="2">
          this is panel content2 or other
        </Panel>
        <Panel header="Title 3" class="pad"  name="3">
          text text text text text text text text
        </Panel>
      </Accordion>
    </div>
  </div>

</template>

<script>
  import {Accordion, Panel} from '@/components/Accordion'
  import {List, ListItem} from '@/components/List'
  import WingBlank from '@/components/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace'

  export default {
    components: {
      Accordion,
      Panel,
      ListItem,
      List,
      WingBlank,
      WhiteSpace
    },
    data () {
      return {
        value: []
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
      }
    },
    watch: {
      value (val) {
        console.log(val)
      }
    }
  }
</script>

<style>
  .accordion-title {
    color: #363636;
    font-size: 16px;
    padding-top: 20px;
  }
  .my-accordion .pad .um-accordion-content-box {
    padding: 10px;
  }
</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前激活tab面板中的key，可用v-model双向绑定 | Array | 默认无，accordion模式下默认为第一个元素 |
| defaultActiveKey | 初始化选中面板的key | String|Array(正常模式下，可以多选) |  |
| onChange | 切换面板的回调函数 | function(key){} | 无 |
| accordion | 手风琴模式 | Boolean | false |
| openAnimation | 设置是否开启切换动画| Boolean | true |


## Accordion.Panel

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 当前面板的name，与Accordion的activeKey对应，不填为索引值 | String | index |
| header | 面板头内容 | String |  |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/accordion" />