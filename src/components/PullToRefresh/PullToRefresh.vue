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
  import MobilePullToRefresh from '@/components/MobilePullToRefresh'

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

<style lang="less">
@pull-to-refresh: mobile-pull-to-refresh;
@hd: 1px;

.@{pull-to-refresh} {
  &-content {
    &-wrapper {
      overflow: hidden;
    }
    transform-origin: left top 0;
  }

  &-transition {
    transition: transform 0.3s;
  }

  &-indicator {
    color: grey;
    // text-align: center;
    height: 25 * @hd;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  &-down .@{pull-to-refresh}-indicator {
    margin-top: -25 * @hd;
  }

  &-up .@{pull-to-refresh}-indicator {
    margin-bottom: -25 * @hd;
  }
}
</style>