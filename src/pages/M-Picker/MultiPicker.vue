<template>
  <div style="background: #f5f5f9; padding: 10px;">
    <MobileMultiPicker
      v-model="selectedValue"
      :defaultSelectedValue="value"
      :onValueChange="onChange"
      :onScrollChange="onScrollChange"
    >
      <MobilePicker indicatorClassName="my-picker-indicator" >
        <MobilePickerItem className="my-picker-view-item" value="1">one</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="2">two</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="3">three</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="4">four</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="5">five</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="6">six</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="7">seven</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="8">eight</MobilePickerItem>
      </MobilePicker>
      <MobilePicker indicatorClassName="my-picker-indicator">
        <MobilePickerItem className="my-picker-view-item" value="11">eleven</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="12">twelve</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="13">thirteen</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="14">fourteen</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="15">fifteen</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="16">sixteen</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="17">seventeen</MobilePickerItem>
        <MobilePickerItem className="my-picker-view-item" value="18">eighteen</MobilePickerItem>
      </MobilePicker>
    </MobileMultiPicker>
  </div>
</template>

<script>
import {MobilePicker, MobilePickerItem, MobileMultiPicker} from '@/components/mobile-picker'

export default {
  components: {
    MobilePickerItem,
    MobilePicker,
    MobileMultiPicker
  },
  data () {
    return {
      value: ['3', '12'],
      selectedValue: []
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
    }
  }
}
</script>

