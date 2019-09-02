<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
      <p>Without text</p>
      <ActivityIndicator></ActivityIndicator>
      <p>With text</p>
      <ActivityIndicator text="loading..." size="small" />
      <p>With large size and customized text style</p>
      <ActivityIndicator size="large" />
      <div>Loading...</div>

      <ActivityIndicator toast :animating="isAnimating" text="Loading" />
    </WingBlank>
    <WhiteSpace size="xl" />
    <Button :onClick="showToast">click to show Toast</Button>
  </div>
</template>

<script>
  import WingBlank from '@/components/wing-blank'
  import Button from '@/components/button'
  import WhiteSpace from '@/components/white-space'
  import ActionSheet from '@/components/action-sheet'
  import ActivityIndicator from '@/components/activity-indicator'

  export default{
    components: {
      WingBlank,
      ActionSheet,
      Button,
      WhiteSpace,
      ActivityIndicator
    },
    data () {
      return {
        isAnimating: false
      }
    },
    methods: {
      showToast () {
        this.isAnimating = true
        setTimeout(() => {
          this.isAnimating = false
        }, 1000)
      }
    }
  }
</script>

