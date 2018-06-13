# Pagination 分页器

分隔长列表，每次只加载一个页面。

### 规则

当加载/渲染所有数据将花费很多时间或者流量时使用


#### Code Example
```vue
<template>
<div class="pagination-container">
  <p class="sub-title">Button with text</p>
  <Pagination :total="5" v-model="page" />

  <p class="sub-title">Button with text and icon</p>
  <Pagination :total="5" class="custom-pagination-with-icon" :current="1">
    <span slot="prevText" class="arrow-align"><Icon type="left"></Icon>上一步</span>
    <span slot="nextText" class="arrow-align">下一步<Icon type="right"></Icon></span>
  </Pagination>

  <p class="sub-title">Hide number</p>
  <Pagination simple :total="5" :current="1" :locale="locale" />

  <p class="sub-title">Show number only</p>
  <Pagination mode="number" :total="5" :current="3" />

  <p className="sub-title">Point style</p>
  <Pagination mode="pointer" :total="5" :current="2" style="margin-bottom:16px" />
</div>
</template>
<script>
import Icon from '@/components/Icon'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination,
    Icon
  },
  data () {
    return {
      page: 2,
      locale: {
        prevText: 'Prev',
        nextText: 'Next'
      }
    }
  },
  methods: {
    log (obj) {
      console.log(obj)
    }
  }
}
</script>
<style scoped>
.pagination-container {
  margin: 0 15px;
}

.custom-pagination-with-icon .am-pagination-wrap-btn-prev .am-button-inline{
  padding-left: 0;
  padding-right: 10px;
}
.custom-pagination-with-icon .am-pagination-wrap-btn-next .am-button-inline{
  padding-left: 10px;
  padding-right: 0;
}
.arrow-align {
  display: flex;
  align-items: center;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
</style>

```
### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 形态，可选 `button`,`number`,`pointer` | String | `'button'` |
| current | 当前页号 双向绑定 | Number | 1 |
| v-model | 当前页号 | Number | 1 |
| total | 数据总数 | Number | 0 |
| simple | 是否隐藏数值 | Boolean | `false` |
| disabled | 禁用状态	 | Boolean | `false` |
| locale | 国际化, 可以覆盖全局`LocaleProvider`的配置	 | Object: {prevText, nextText} | - |

### event
| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| onChange | change 事件触发 | value |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/pagination" />