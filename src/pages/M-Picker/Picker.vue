<template>
  <div style="background: '#f5f5f9', padding: 10px">
    <Button :onClick="rerender" type="primary" size="small" inline style="margin-right:4px;">rerender</Button>
    <Button :onClick="disable" type="primary" size="small" inline>{{disabled ? 'enable' : 'disable'}}</Button>
    <MobilePicker
      style="margin-top:15px"
      v-model="selectedValue"
      :defaultSelectedValue="value"
      :disabled="disabled"
      :onValueChange="onChange"
      :onScrollChange="onScrollChange">
      <MobilePickerItem v-for="item in items" :key="item.value" :value="`${item.value}`">{{item.count}}</MobilePickerItem>
    </MobilePicker>
  </div>
</template>

<script>
import Button from '@/components/Button'
import {MobilePicker, MobilePickerItem} from '@/components/MobilePicker'
let count = 0
const len = 10

export default {
  components: {
    MobilePicker,
    MobilePickerItem,
    Button
  },
  data () {
    return {
      selectedValue: '',
      disabled: false,
      items: this.getItems(count),
      value: `${count + len / 2}`
    }
  },
  watch: {
    selectedValue (val) {
      console.log('value', val)
    }
  },
  methods: {
    onChange (value) {
      console.log('onChange', value)
      this.value = value
    },
    onScrollChange (value) {
      console.log('onScrollChange', value)
    },
    disable () {
      this.disabled = !this.disabled
    },
    getItems (start) {
      const items = []
      for (let i = start; i < start + len; i++) {
        items.push({
          value: i,
          count: `${count} ${i}`
        })
      }
      return items
    },
    rerender () {
      count += len
      const items = this.getItems(count)
      this.items = items
      this.value = count.toString()
    }
  }
}
</script>

<style>
</style>

