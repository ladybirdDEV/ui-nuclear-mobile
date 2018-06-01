<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <List renderHeader="RadioItem demo">
      <RadioItem value="doctor" Title="doctor" defaultChecked ></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" @onChange="baOnChange"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem value="baseketball" Title="baseketball" defaultChecked subtitle="details"></RadioItem>
      <RadioItem value="football" Title="football" subtitle="details"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List renderHeader="Disabled">
      <RadioItem value="doctor" Title="doctor" disabled></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" disabled defaultChecked></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem value="doctor" Title="doctor" disabled defaultChecked subtitle="details"></RadioItem>
      <RadioItem value="bachelor" Title="bachelor" disabled subtitle="details"></RadioItem>
    </List>
  </div>
</template>

<script>
  import { Radio, RadioItem } from '@/components/Radio'
  import WingBlank from '@/components/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace'
  import { List, ListItem, ListItemBrief } from '@/components/List'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Radio,
      List,
      ListItem,
      ListItemBrief,
      RadioItem
    },
    methods: {
      baOnChange (value) {
        console.log(value)
      }
    }
  }
</script>

<style>

</style>
