# Carousel 走马灯

走马灯，轮播图



#### Code Example
```vue
<template>
  <div>
    <WingBlank>
      <div class="sub-title">Normal</div>
      <Carousel :selectedIndex="1" infinite @afterChange="changed" @beforeChange="changing">
        <a href="#/" style="display:inline-block;width:100%;height:176px;" v-for="item in img" :key="item"><img :src="'https://zos.alipayobjects.com/rmsportal/'+item+'.png'" alt="" style="width:100%;vertical-align:top;"></a>
      </Carousel>
      <div class="sub-title">Vertical</div>
      <Carousel class="my-carousel" autoplay vertical infinite :dots="false" :swiping="false">
        <div class="v-item" v-for="item in 3" :key="item">carousel {{item}}</div>
      </Carousel>
      <div class="sub-title">Lottery</div>
      <Carousel class="my-carousel" vertical :dots="false" :swiping="false" autoplay infinite :speed="200" :autoplayInterval="300" :resetAutoplay="false">
        <div class="v-item" v-for="item in type" :key="item">{{ item }}</div>
      </Carousel>
    </WingBlank>
  </div>
</template>
<script>
import Carousel from '@/components/Carousel'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    Carousel,
    WingBlank
  },
  methods: {
    changed () {
      console.log('changed')
    },
    changing () {
      console.log('changing')
    }
  },
  data () {
    return {
      img: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      type: ['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note']
    }
  }
}
</script>
<style scoped>
.my-carousel {
  height: 36px;
  overflow: 36px;
}

.my-carousel .v-item {
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
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
| selectedIndex | 手动设置当前显示的索引 | Number | 0 |
| dots | 是否显示面板指示点 | Boolean | true |
| vertical | 垂直显示 | Boolean | false |
| autoplay | 是否自动切换 | Boolean | false |
| infinite | 是否循环播放 | Boolean | false |
| dotStyle `暂不支持` | 指示点样式  | Object | false |
| dotActiveStyle `暂不支持` | 当前激活的指示点样式  | Object | false |
| easing `暂不支持` | 缓动函数  | Function | - |


### events

| 事件名 | 说明 | 返回值 |
| --- | --- | --- |
| afterChange | 切换面板后的回调函数 | - |
| beforeChange | 切换面板前的回调函数 | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/carousel" />