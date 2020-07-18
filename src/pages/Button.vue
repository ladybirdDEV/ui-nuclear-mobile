<template>
  <div>
    <WingBlank>
      <WhiteSpace></WhiteSpace>
      <Button @click="log">default</Button>
      <WhiteSpace></WhiteSpace>
      <Button disabled>default disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary">primary</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary" disabled>primary disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="warning">warning</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="warning" disabled>warning disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button :loading="loading" @click="handleLoading">loading button</Button>
      <WhiteSpace></WhiteSpace>
      <Button icon="check-circle-o">with icon</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="primary" inline style="margin-right:4px;">inline primary</Button>
      <Button type="ghost" inline class="um-button-borderfix">inline ghost</Button>
      <!-- use `um-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display -->
      <WhiteSpace></WhiteSpace>
      <Button type="primary" inline size="small" style="margin-right:4px;">primary</Button>
      <Button type="primary" inline size="small" disabled>primary disabled</Button>
      <WhiteSpace></WhiteSpace>
      <Button type="ghost" inline size="small" style="margin-right:4px;">ghost</Button>
      <Button type="ghost" inline size="small" class="um-button-borderfix" disabled>ghost disabled</Button>
      <!-- use `um-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display -->
    </WingBlank>
    <List>
      <ListItem>
        <template slot="extra" multipleLine><Button type="ghost" size="small" inline>small</Button></template>
        Regional manager
        <ListItemBrief>Can be collected, refund, discount management, view data and other operations</ListItemBrief>
      </ListItem>
      <ListItem>
        <template slot="extra" multipleLine><Button type="primary" size="small" inline>small</Button></template>
        Regional manager
        <ListItemBrief>Can be collected, refund, discount management, view data and other operations</ListItemBrief>
      </ListItem>
    </List>
  </div>
</template>
<script>
import Button from '@/components/button'
import WingBlank from '@/components/wing-blank'
import WhiteSpace from '@/components/white-space'
import List from '@/components/list'
import ListItem from '@/components/list-item'
import ListItemBrief from '@/components/list-item-brief'

export default {
  components: {
    Button,
    WingBlank,
    WhiteSpace,
    List,
    ListItem,
    ListItemBrief,
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    log (e) {
      console.log(e)
    },
    handleLoading () {
      this.loading = !this.loading
    }
  }
}
</script>
