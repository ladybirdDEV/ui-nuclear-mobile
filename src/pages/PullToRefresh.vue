<template>
  <div>
    <WingBlank>
      <h3>拉动刷新</h3>
    </WingBlank>
    <Button
      style="margin-bottom: 15px;"
      :onClick="btnClick">
      direction: {{down ? 'down' : 'up'}}
    </Button>
    <PullToRefresh
      :onRefresh='onRefresh'
      :direction="down ? 'down' : 'up'"
      :indicator="indicator"
      :refreshing="refreshing">
      <Icon slot="loadingIcon" type="loading" style="margin-right: 8px; margin-top: 3px;"></Icon>
      <div style="text-align: center; padding: 10px;" v-for="(value, index) in items" :key="index" slot="scrollContent">
        pull up{{ index }}
      </div>
    </PullToRefresh>
  </div>
</template>

<script>
  import PullToRefresh from '@/components/PullToRefresh'
  import Icon from '@/components/Icon'
  import WhiteSpace from '@/components/white-space'
  import Button from '@/components/button'
  import WingBlank from '@/components/wing-blank'

  export default {
    components: {
      PullToRefresh,
      WhiteSpace,
      WingBlank,
      Icon,
      Button
    },
    data () {
      return {
        items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        down: true,
        refreshing: false
      }
    },
    methods: {
      btnClick () {
        this.down = !this.down
      },
      onRefresh () {
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 0)
      }
    },
    computed: {
      indicator () {
        if (this.down) {
          return {
            activate: '松开立即刷新',
            deactivate: '下拉可以刷新',
            release: 'loading',
            finish: '完成刷新'
          }
        } else {
          return {
            activate: '松开立即刷新',
            deactivate: '上拉可以刷新',
            release: 'loading',
            finish: '完成刷新'
          }
        }
      }
    }
  }
</script>
