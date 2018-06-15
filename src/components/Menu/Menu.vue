<template>
  <Flex class="um-menu" direction="column" align="stretch" :style="{ height: height + 'px' }">
    <Flex class="um-menu-select-container" align="start">
      <FlexItem :style="{ height: height + 'px' }" v-if="level === 2" >
        <List>
          <ListItem v-for="(item, index) in data" :key="index" align="middle"
          :class="{'um-menu-selected': firstLevelSelectValue === item.value}"
          :onClick="() => clickFirstLevel(item.value)">
            {{item.label}}
          </ListItem>
        </List>
      </FlexItem>
      <FlexItem class="un-menu-select-container-submenu" >
        <SubMenu :subMenuData="subMenuData"
                 class="um-sub-menu"
                 :onChange="onChange"
                 :data="data"
                 :value="value"
                 :level="level"
                 :multiSelect="multiSelect"
                 @input="getValue">
        </SubMenu>
      </FlexItem>
    </Flex>
    <div class="um-multi-select-btns" v-if="multiSelect">
      <Button :onClick="onMenuCancel" inline
              class="um-multi-select-btns-btn">取消</Button>
      <Button type="primary" inline
              class="um-multi-select-btns-btn"
              :onClick="onOk">确认</Button>
    </div>
  </Flex>
</template>
<script>
  import {Flex, FlexItem} from '../Flex'
  import {List, ListItem} from '../List'
  import {RadioItem, Radio} from '../Radio'
  import SubMenu from './SubMenu'
  import Button from '../Button'
  import { oneOf } from '../../utils'

  export default {
    name: 'Menu',
    components: {
      Flex,
      FlexItem,
      List,
      ListItem,
      RadioItem,
      Radio,
      SubMenu,
      Button
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      data: {
        type: Array,
        default: () => []
      },
      level: {
        validator (value) {
          return oneOf(value, [1, 2])
        },
        default: 2
      },
      value: {
        type: Array
      },
      onChange: Function,
      onOk: Function,
      onCancel: Function,
      height: {
        type: Number,
        default: document.documentElement.clientHeight * 0.6
      },
      multiSelect: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        subMenuData: this.defaultData(),
        firstLevelSelectValue: this.value ? this.value[0] : '',
        checkList: [],
        currentValue: []
      }
    },
    methods: {
      clickFirstLevel (value) {
        this.firstLevelSelectValue = value
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].value === value) {
            if (!this.data[i].isLeaf) {
              this.subMenuData = this.data[i]
            } else {
              this.subMenuData = []
            }
          }
        }
      },
      defaultData () {
        let subMenuData
        if (this.level === 2) {
          if (this.value && this.value.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
              if (this.data[i].value === this.value[0]) {
                if (this.data[i].isLeaf) {
                  subMenuData = []
                }
                subMenuData = this.data[i]
              }
            }
          } else {
            subMenuData = this.data[0]
          }
        } else {
          subMenuData = this.data
        }
        this.subMenuData = subMenuData
        return subMenuData
      },
      getValue (value) {
        if (this.level === 2) {
          this.currentValue[0] = this.firstLevelSelectValue
          this.currentValue[1] = value
        } else {
          if (!this.multiSelect) {
            this.currentValue[0] = value
          } else {
            this.currentValue = value
          }
        }
        this.$emit('input', this.currentValue)
      },
      onMenuCancel () {
        if (this.onCancel) {
          this.onCancel()
        }
      }
    },
    mounted () {
      this.defaultData()
    }
  }
</script>
<style lang="less">
@import "style/index";
</style>
