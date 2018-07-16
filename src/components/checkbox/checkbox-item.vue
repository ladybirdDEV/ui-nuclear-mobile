<template>
  <div>
    <ListItem
      :multipleLine="multipleLine"
      :onClick="check"
      :extra="extra"
      :arrow="arrow"
      :align="align"
      :wrap="wrap"
      :platform="platform"
      :disabled="isDisabled">
      <template slot="thumb">
        <Checkbox
          :label="label"
          :disabled="disabled"
          :checked="checked"
          :defaultChecked="defaultChecked"
          @onChange="change"
          :name="name"
          ref="checkbox"></Checkbox>
      </template>
      <span :class="titleColor">{{ Title }}</span>
      <ListItemBrief v-if="subtitle">{{ subtitle }}</ListItemBrief>
    </ListItem>
  </div>
</template>

<script>
  import Checkbox from './checkbox'
  import List from '../list'
  import ListItem from '../list-item'
  import ListItemBrief from '../list-item-brief'

  export default {
    name: 'CheckboxItem',
    components: {
      Checkbox,
      List,
      ListItem,
      ListItemBrief
    },
    data () {
      return {
        titleColor: this.disabled ? 'um-cbxitem-color' : '',
        isDisabled: this.disabled
      }
    },
    methods: {
      check () {
        this.$refs.checkbox.isChecked = !this.$refs.checkbox.isChecked
      },
      change (value) {
        this.$emit('onChange')
      }
    },
    watch: {
      checked () {
        this.$children[0].$children[0].$children[0].isChecked = this.checked
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      checked: {
        type: Boolean,
        default: undefined
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
        type: String
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
      defaultChecked: {
        type: Boolean
      }
    }
  }
</script>

<style>
  .um-cbxitem-color {
    color: #bbb;
  }
</style>
