<template>
  <div>
    <div class="sub-title">Always square grid item </div>
    <Grid :data="mockData" :activeStyle="false"></Grid>
    <div class="sub-title">Grid item adjust accroiding to img size </div>
    <Grid :data="mockData" :square="false" class="not-square-grid" :onClick="handleClick" />
    <div class="sub-title">ColumnNum=3 </div>
    <Grid :data="mockData" :columnNum="3" />
    <div class="sub-title">No border</div>
    <Grid :data="mockData" :hasLine="false" />
    <div class="sub-title">Carousel</div>
    <Grid :data="mockData" isCarousel :onClick="(el, index) => handleClick(el, index)"/>
    <div class="sub-title">Custom content</div>
    <Grid :data="mockData1" :renderItem="renderItem" :columnNum="3"></Grid>
    <div class="sub-title">Custom GridCell Style</div>
    <Grid :data="mockData1" :columnNum="3" :itemStyle="{ height: '150px', backgroundColor: '#ffff00' }" />
  </div>
</template>
<script>
import Grid from '@/components/Grid'
export default {
  components: {
    Grid
  },
  computed: {
    mockData () {
      return Array.from(new Array(9)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`
      }))
    },
    mockData1 () {
      return Array.from(new Array(9)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
      }))
    }
  },
  methods: {
    handleClick (el, index) {
      console.log(el, index)
    },
    renderItem (h, dataItem) {
      return (
        <div style={{ padding: '12.5px' }}>
          <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} />
          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
            <span>I am title..</span>
          </div>
        </div>
      )
    }
  }
}
</script>
<style>
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 15px 0 9px 15px;
}
.not-square-grid .um-grid-icon {
  width: 40px;
  height: 60px;
}

</style>
