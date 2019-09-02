<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <Progress :percent="30"></progress>
    <WhiteSpace size="lg"></WhiteSpace>
    <Progress :percent="40" :unfilled="false" position="normal" appearTransition></progress>
    <div class="show-info">
      <div class="progress">
        <Progress :percent="percent"  position="normal"></progress>
      </div>
      <div aria-hidden="true">{{percent}}%</div>
    </div>
    <WhiteSpace size="xl"></WhiteSpace>
    <WingBlank>
      <Button @onClick="add">(+-)10</Button>
    </WingBlank>
  </div>
</template>

<script>
import Progress from '@/components/progress'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
import Button from '@/components/button'

export default {
  components: {
    Progress,
    WhiteSpace,
    WingBlank,
    Button
  },
  data () {
    return {
      percent: 50
    }
  },
  methods: {
    add () {
      let p = this.percent + 10
      if (this.percent >= 100) {
        p = 0
      }
      this.percent = p
    }
  }
}
</script>

