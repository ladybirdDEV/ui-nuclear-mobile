<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent=20 :unfilled=false></Progress>
    <WhiteSpace size="lg"></WhiteSpace>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent=60></Progress>
  </div>
</template>

<script>
  import Progress from '@/components/Progress'
  import WhiteSpace from '@/components/WhiteSpace'
  import WingBlank from '@/components/wing-blank'

  export default {
    components: {
      Progress,
      WhiteSpace,
      WingBlank
    }
  }
</script>
