<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <List renderHeader="CheckboxItem demo">
      <CheckboxItem Title="Barcelona" defaultChecked></CheckboxItem>
      <CheckboxItem Title="Stuttgart" ></CheckboxItem>
      <CheckboxItem Title="Paris" extra="extra content"></CheckboxItem>
      <CheckboxItem Title="Liverpool" disabled defaultChecked subtitle="Disable options"></CheckboxItem>
    </List>
    <AgreeItem>Agree
      <a @click="onClick">agreement</a></AgreeItem>
  </div>
</template>

<script>
  import Button from '@/components/button'
  import Checkbox from '@/components/checkbox'
  import CheckboxItem from '@/components/checkbox-item'
  import AgreeItem from '@/components/agree-item'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/white-space'
  import Flex from '@/components/flex'
  import FlexItem from '@/components/flex-item'
  import List from '@/components/list'
  import ListItem from '@/components/list-item'

  export default {
    components: {
      WingBlank,
      List,
      CheckboxItem,
      AgreeItem,
    },
    data () {
      return {
        checked: ''
      }
    },
    methods: {
      stuOnChange (value) {
        console.log(value)
      },
      onClick () {
        console.log(234)
      }
    }
  }
</script>
