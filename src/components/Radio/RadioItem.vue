<template>
  <div>
    <ListItem :multipleLine="multipleLine"
              :onClick="check"
              :extra="extra"
              :arrow="arrow"
              :align="align"
              :wrap="wrap"
              :platform="platform"
              :disabled="isDisabled">
      <span :class="titleColor">{{ Title }}</span>
      <ListItemBrief v-if="subtitle">{{ subtitle }}</ListItemBrief>
      <template slot="extra">
        <Radio :label="label"
                :name="name"
                :value="value" 
                :disabled="disabled"
                :defaultChecked="defaultChecked"
                :checked="checked"
                @onChange="change"></Radio>
      </template>
    </ListItem>
  </div>
</template>

<script>
  import Radio from './Radio'
  import { List, ListItem, ListItemBrief } from '@/components/List'

  export default {
    name: 'RadioItem',
    components: {
      Radio,
      List,
      ListItem,
      ListItemBrief
    },
    data () {
      return {
        titleColor: this.disabled ? 'um-cbxitem-color' : '',
        currentValue: this.value,
        isDisabled: this.disabled
      }
    },
    methods: {
      check () {
        if (!this.subtitle) {
          this.$children[0].$children[0].$children[0].isChecked = !this.$children[0].$children[0].$children[0].isChecked
        } else {
          this.$children[0].$children[0].$children[1].isChecked = !this.$children[0].$children[0].$children[1].isChecked
        }
      },
      change (value) {
        this.$emit('onChange', value)
      }
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
        type: String,
        default: ''
      },
      defaultChecked: {
        type: Boolean
      },
      checked: {
        type: Boolean,
        default: undefined
      }
    }
  }
</script>

<style>
  .um-cbxitem-color {
    color: #bbb;
  }
</style>
