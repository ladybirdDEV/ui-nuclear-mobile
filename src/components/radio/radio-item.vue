<template>
  <div>
    <ListItem
      :multipleLine="multipleLine"
      :extra="extra"
      :arrow="arrow"
      :align="align"
      :wrap="wrap"
      :onClick="click"
      :platform="platform"
      :disabled="disabled"
      class="um-radio-item">
      <span :class="titleColor">{{ Title }}</span>
      <ListItemBrief v-if="subtitle">{{ subtitle }}</ListItemBrief>
      <template slot="extra">
        <Radio
          :label="label"
          :name="name"
          :value="value"
          :disabled="disabled"
          :defaultChecked="defaultChecked"
          :checked="currentChecked"
          v-model="currentCheckedVal"
          @change="change"></Radio>
      </template>
    </ListItem>
  </div>
</template>

<script>
  import Radio from './radio'
  import ListItem from '../list-item'
  import ListItemBrief from '../list-item-brief'

  export default {
    name: 'RadioItem',
    components: {
      Radio,
      ListItem,
      ListItemBrief
    },
    data () {
      return {
        titleColor: this.disabled ? 'um-cbxitem-color' : '',
        currentValue: this.value,
        currentCheckedVal: this.checkedVal,
        currentChecked: this.checked
      }
    },
    methods: {
      change (val) {
        if (this.onChange) {
          this.onChange(val)
        }
        this.$emit('change', val)
      },
      click () {}
    },
    model: {
      prop: 'checkedVal',
      event: 'input'
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      wrap: {
        type: Boolean,
        default: false
      },
      platform: {
        type: String,
        default: 'ios'
      },
      align: {
        type: String,
        default: 'middle'
      },
      arrow: {
        type: String
      },
      extra: {
        type: String
      },
      multipleLine: {
        type: Boolean,
        default: false
      },
      subtitle: {
        type: String,
        default: ''
      },
      Title: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      itembrief: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      value: {
        type: [String, Number]
      },
      defaultChecked: {
        type: Boolean,
        default: undefined
      },
      checked: {
        type: Boolean,
        default: undefined
      },
      checkedVal: [String, Number, Boolean],
      onChange: Function
    },
    watch: {
      currentCheckedVal (val) {
        this.$emit('input', val)
      },
      checked (val) {
        this.currentChecked = val
      },
      checkedVal (val) {
        this.currentCheckedVal = val
      }
    }
  }
</script>
