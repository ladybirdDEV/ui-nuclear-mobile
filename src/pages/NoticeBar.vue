<template>
  <div>
    <NoticeBar :marqueeProps="{ loop: true, style: { padding: '0 7.5px'} }">
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link" :onClick="log">
      Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable" icon="null">Remove the default icon.</NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable">
      <Icon type="check-circle-o" slot="icon" size="xxs"></Icon>
      Customized icon.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="closable">
      <span slot="action" style="color: #a1a1a1">不再提示</span>
      Closable demo for `actionText`.
    </NoticeBar>
    <WhiteSpace size="lg" />
    <NoticeBar mode="link">
      <span slot="action">去看看</span>
      Link demo for `actionText`.
    </NoticeBar>
  </div>
</template>
<script>
import NoticeBar from '@/components/notice-bar'
import WhiteSpace from '@/components/white-space'
import Icon from '@/components/icon'
export default {
  components: {
    NoticeBar,
    WhiteSpace,
    Icon
  },
  methods: {
    log (e) {
      console.log('click')
    }
  }
}
</script>
