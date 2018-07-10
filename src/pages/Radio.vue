<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
    </WingBlank>
    <List renderHeader="RadioItem demo">
      <RadioItem
        v-for="item in data"
        :key="item.value"
        :Title="item.label"
        v-model="value"
        name="test"
        :value="item.value"
        @change="changedVal"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem
        v-for="item in data2"
        :key="item.value"
        :value="item.value"
        :Title="item.label"
        :subtitle="item.extra"
        :checked="item.value === value2"
        name="demo2"
        v-model="value2"></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List renderHeader="Disabled">
      <RadioItem
        v-for="item in data"
        :key="item.value"
        :value="item.value"
        :Title="item.label"
        v-model="value3"
        disabled></RadioItem>
    </List>
    <WhiteSpace></WhiteSpace>
    <List>
      <RadioItem
        v-for="item in data2"
        :key="item.value"
        :value="item.value"
        :Title="item.label"
        disabled
        :subtitle="item.extra"
        v-model="value4"></RadioItem>
    </List>
    <Flex style="padding: 15px">
      <FlexItem style="flex: 2">Radio demo(dustomized style)</FlexItem>
      <FlexItem>
        <Radio class="my-radio" @change="changedVal">Agree</Radio>
      </FlexItem>
    </Flex>
  </div>
</template>

<script>
  import Radio from '@/components/radio'
  import RadioItem from '@/components/radio-item'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/white-space'
  import { List, ListItem, ListItemBrief } from '@/components/list'
  import Flex from '@/components/flex'
  import FlexItem from '@/components/flex-item'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Radio,
      List,
      ListItem,
      ListItemBrief,
      RadioItem,
      Flex,
      FlexItem
    },
    data () {
      return {
        data: [
          { value: 0, label: 'doctor' },
          { value: 1, label: 'bachelor' }
        ],
        data2: [
          { value: 0, label: 'basketball', extra: 'details' },
          { value: 1, label: 'football', extra: 'details' }
        ],
        value: 0,
        value2: 0,
        value3: 0,
        value4: 0
      }
    },
    methods: {
      changedVal (val) {
        console.log('value changed, value = ', val)
      }
    }
  }
</script>

<style>
.my-radio .um-radio {
  padding: 2.5px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
