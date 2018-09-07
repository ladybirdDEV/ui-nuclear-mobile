<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent="20" :unfilled="false" position="normal"></progress>
    <WhiteSpace size="lg"></WhiteSpace>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent="60"  position="normal"></progress>
  </div>
</template>

<script>
  import Progress from '@/components/progress'
  import WhiteSpace from '@/components/white-space'
  import WingBlank from '@/components/wing-blank'

  export default {
    components: {
      Progress,
      WhiteSpace,
      WingBlank
    }
  }
</script>
