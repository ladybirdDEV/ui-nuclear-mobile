<template>
  <WingBlank>
    <WhiteSpace></WhiteSpace>
    <Button :onClick="listView">ListView</Button>
    <WhiteSpace> </WhiteSpace>
    <Button :onClick="indexList">索引列表（标题吸顶）</Button>
  </WingBlank>
</template>

<script>
import Button from '@/components/Button'
import WingBlank from '@/components/wing-blank'
import WhiteSpace from '@/components/white-space'

export default {
  components: {
    Button,
    WingBlank,
    WhiteSpace
  },
  methods: {
    indexList () {
      this.$router.push({ name: 'index-list' })
    },
    listView () {
      this.$router.push({ name: 'list-view' })
    }
  }
}
</script>
