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
import Carousel from '@/components/carousel'
import WingBlank from '@/components/wing-blank'
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
