<template>
  <div>
    <div class="demoTitle">基本</div>
    <Grid :data="data" :renderItem="(h, data) => renderItem(h, data)" :columnNum="3" :hasLine="false" :activeStyle="false"></Grid>
    <div class="demoTitle">大小</div>
    <Grid :data="sizeData" :renderItem="(h, sizeData) => renderItem(h, sizeData)" :columnNum="5" :hasLine="false" :activeStyle="false"></Grid>
  </div>
</template>
<script>
import Icon from '@/components/icon'
import Grid from '@/components/grid'
export default {
  components: {
    Icon,
    Grid
  },
  computed: {
    data () {
      const data = this.list.map(item => ({
        icon: item,
        text: item
      }))
      return data
    },
    sizeData () {
      const data = this.size.map(item => ({
        icon: 'search',
        size: item,
        text: item
      }))
      return data
    }
  },
  data () {
    return {
      list: [
        'check',
        'check-circle',
        'check-circle-o',
        'cross',
        'cross-circle',
        'cross-circle-o',
        'left',
        'right',
        'down',
        'up',
        'loading',
        'search',
        'ellipsis',
        'ellipsis-circle',
        'exclamation-circle',
        'info-circle',
        'question-circle',
        'voice',
        'plus',
        'minus',
        'dislike',
        'fail',
        'success'
      ],
      size: ['xxs', 'xs', 'sm', 'md', 'lg']
    }
  },
  methods: {
    renderItem (h, data) {
      return (
        <div style={{ padding: '12.5px' }}>
          <Icon type={data.icon} size={data.size}></Icon>
          <div class="um-grid-text">{data.text}</div>
        </div>
      )
    }
  }
}
</script>
