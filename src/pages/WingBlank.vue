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
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/WingBlank'
export default {
  components: {
    PlaceHolder,
    WingBlank,
    WhiteSpace
  }
}
</script>
