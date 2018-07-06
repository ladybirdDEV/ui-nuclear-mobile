<template>
  <div :style="{ padding: '15px 0'}">
    <WhiteSpace size="xs" />
    <PlaceHolder />
    <WhiteSpace size="sm" />
    <PlaceHolder />
    <WhiteSpace />
    <PlaceHolder />
    <WhiteSpace size="lg" />
    <PlaceHolder />
    <WhiteSpace size="xl" />
    <PlaceHolder />
  </div>
</template>
<script>
import PlaceHolder from '@/components/PlaceHolder'
import WhiteSpace from '@/components/WhiteSpace'
import WingBlank from '@/components/wing-blank'
export default {
  components: {
    PlaceHolder,
    WingBlank,
    WhiteSpace
  }
}
</script>
