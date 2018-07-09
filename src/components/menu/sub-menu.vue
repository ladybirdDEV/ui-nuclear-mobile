<template>
  <List class="um-sub-menu">
    <ListItem v-for="(item, index) in curSubMenuData" :key="index"
              :disabled="item.disabled"
              :class="{checked: isChecked(item.label)}"
              :onClick="() => clickSubMenuItem(item.label, item.value)">
      {{item.label}}
      <template slot="extra" v-if="multiSelect">
        <input type="checkbox"
               :value="item.label"
               v-model="checkList"
               class="um-checkbox-input"
               :disabled="item.disabled"/>
        <span class="um-checkbox-core"></span>
      </template>
      <template slot="extra" v-else>
        <!--<Radio :checked="isChecked (item.label)"></Radio>-->
        <input type="radio" :checked="isChecked (item.label)" class="um-checkbox-input"/>
        <Icon v-if="isChecked (item.label)" class="um-checkbox-checked" type="check" :color="color"></Icon>
      </template>
    </ListItem>
  </List>
</template>

<script>
  import {List, ListItem} from '../list'
  import {RadioItem, Radio} from '../Radio'
  import Icon from '../icon'
  import { oneOf } from '../../utils'

  export default {
    components: {
      List,
      ListItem,
      Radio,
      RadioItem,
      Icon
    },
    props: {
      subMenuData: {
        type: [Object, Array]
      },
      value: {
        type: Array,
        default: () => []
      },
      data: {
        type: Array,
        default: () => []
      },
      multiSelect: {
        type: Boolean,
        default: false
      },
      level: {
        validator (value) {
          return oneOf(value, [1, 2])
        }
      },
      onChange: Function
    },
    data () {
      return {
        labelName: '',
        curCheckItem: '',
        curCheckItemValue: '',
        checked: false,
        checkList: [],
        checkListValue: []
      }
    },
    computed: {
      color () {
        if (this.disabled) {
          return '#ccc'
        } else return '#108ee9'
      },
      curSubMenuData () {
        return this.level === 1 ? this.subMenuData : this.subMenuData.children
      }
    },
    // watch: {
    //   curCheckItemValue (val) {
    //     if (!this.multiSelect) {
    //       this.$emit('input', val)
    //     }
    //   },
    //   checkListValue (val) {
    //     if (this.multiSelect) {
    //       this.$emit('input', val)
    //     }
    //   }
    // },
    methods: {
      clickSubMenuItem (label, value) {
        this.curCheckItem = label
        this.curCheckItemValue = value
        if (this.multiSelect) {
          this.multiSelected(label, value)
        }
        if (this.multiSelect) {
          this.$emit('input', this.checkListValue)
        } else {
          this.$emit('input', this.curCheckItemValue)
        }
        if (this.onChange) {
          this.onChange()
        }
      },
      multiSelected (label, value) {
        if (this.labelName !== this.subMenuData.label) {
          this.labelName = this.subMenuData.label
          this.checkList = []
          this.checkListValue = []
        }
        if (this.checkList.indexOf(label) > -1) {
          let index = this.checkList.indexOf(label)
          this.checkList.splice(index, 1)
          this.checkListValue.splice(index, 1)
        } else {
          this.checkList.push(label)
          this.checkListValue.push(value)
        }
      },
      defaultCheck () {
        // 二级
        if (this.level === 2) {
          const subMenuData = this.subMenuData.children
            // 多选
          if (this.subMenuData.value === this.value[0]) {
            if (this.multiSelect) {
              for (let j = 0; j < subMenuData.length; j++) {
                if (this.value[1]) {
                  for (let i = 0; i < this.value[1].length; i++) {
                    if (subMenuData[j].value === this.value[1][i]) {
                      this.checkList.push(subMenuData[j].label)
                      this.checkListValue.push(subMenuData[j].value)
                    }
                  }
                }
              }
              // 单选
            } else {
              for (let j = 0; j < subMenuData.length; j++) {
                if (subMenuData[j].value === this.value[1]) {
                  this.curCheckItem = subMenuData[j].label
                  this.curCheckItemValue = subMenuData[j].value
                }
              }
            }
          }
          // 一级菜单
        } else {
          // 多选
          if (this.multiSelect) {
            for (let i = 0; i < this.subMenuData.length; i++) {
              for (let j = 0; j < this.value.length; j++) {
                if (this.subMenuData[i].value === this.value[j]) {
                  this.checkList.push(this.subMenuData[i].label)
                  this.checkListValue.push(this.subMenuData[i].value)
                }
              }
            }
            // 单选
          } else {
            for (let i = 0; i < this.subMenuData.length; i++) {
              if (this.subMenuData[i].value === this.value[0]) {
                this.curCheckItem = this.subMenuData[i].label
                this.curCheckItemValue = this.subMenuData[i].value
              }
            }
          }
        }
      },
      isChecked (value) {
        if (this.multiSelect) {
          return this.checkList.indexOf(value) > -1
        } else {
          return this.curCheckItem === value
        }
      }
    },
    mounted () {
      if (this.value && this.value.length > 0) {
        this.defaultCheck()
      }
      this.labelName = this.subMenuData && this.subMenuData.label
      if (!this.multiSelect) {
        this.$emit('input', this.curCheckItemValue)
      } else {
        this.$emit('input', this.checkListValue)
      }
    }
  }
</script>

<style lang="less">
  @import 'style/index';
</style>
