<template>
  <div :style="{ padding: '15px 0'}">
    <WingBlank><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="md"><PlaceHolder /></WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="sm"><PlaceHolder /></WingBlank>
  </div>
</template>
<script>
import PlaceHolder from '@/components/PlaceHolder'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
export default {
  components: {
    PlaceHolder,
    WingBlank,
    WhiteSpace
  }
}
</script>
