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
import PlaceHolder from '@/components/place-holder'
import WhiteSpace from '@/components/white-space'
export default {
  components: {
    PlaceHolder,
    WhiteSpace
  }
}
</script>
