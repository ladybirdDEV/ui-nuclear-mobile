<template>
   <MobilePullToRefresh :onRefresh="onRefresh"
                     :distanceToRefresh="distanceToRefresh"
                     :direction="direction"
                     :prefixCls="prefixCls"
                     :indicator="indicator"
                     :refreshing="refreshing">
            <div slot="loadingIcon">
              <slot name="loadingIcon"></slot>
            </div>
            <div slot="scrollContent">
              <slot name="scrollContent"></slot>
            </div>
   </MobilePullToRefresh>
</template>

<script>
  import MobilePullToRefresh from '../mobile-pull-to-refresh'

  export default {
    name: 'PullToRefresh',
    components: {
      MobilePullToRefresh
    },
    props: {
      distanceToRefresh: {
        type: Number,
        default: 25
      },
      direction: {
        type: String,
        default: 'down'
      },
      prefixCls: {
        type: String,
        default: 'mobile-pull-to-refresh'
      },
      indicator: {
        type: Object
      },
      refreshing: {
        type: Boolean,
        default: false
      },
      onRefresh: {
        type: Function,
        required: true
      }
    }
  }
</script>
