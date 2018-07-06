<template>
  <div>
    <div :class="{'menu-active': showA}">
      <div style="z-index: 80;position: relative;">
        <div class="sub-title">菜单</div>
        <NavBar :onLeftClick="($event) => handleClickA($event)">
          <template slot="leftContent">
            <Icon type="ellipsis-circle" style="margin-right: 6px;"></Icon>
            Menu
          </template>
          Here is title
        </NavBar>
      </div>
      <umMenu
        v-if="showA && initData"
        :data="initData"
        v-model="valueA"
        :onChange="onChangeA"
        class="foo-menu"/>
      <div v-if="showA && !initData" :style="[{width: '100%'}, {height: height + 'px'}, {display: 'flex'}, {justifyContent: 'center'}]">
        <ActivityIndicator text="loading..." size="large" align="vertical"/>
      </div>
      <div class="menu-mask" v-if="showA" @click="onMaskClick"></div>
    </div>

    <div :class="{'menu-active': showB}">
      <div style="z-index: 80;position: relative;">
        <div class="sub-title">单级菜单</div>
        <NavBar :onLeftClick="handleClickB">
          <template slot="leftContent">
            <Icon type="ellipsis-circle" style="margin-right: 6px;"></Icon>
            Menu
          </template>
          OneLevel menu
        </NavBar>
      </div>
      <umMenu
        v-if="showB"
        :data="data2"
        class="foo-menu"
        :level=1
        v-model="valueB"/>
    </div>

    <div :class="{'menu-active': showC}">
      <div>
        <div class="sub-title">单级菜单多选</div>
        <NavBar :onLeftClick="handleClickC">
          <template slot="leftContent">
            <Icon type="ellipsis-circle" style="margin-right: 6px;"></Icon>
            Menu
          </template>
          Single Multi menu
        </NavBar>
      </div>
      <umMenu
        v-if="showC"
        :data="data2"
        class="foo-menu"
        :level=1
        :multiSelect="true"
        :onOk="onOk"
        :onChange="onChangeB"
        v-model="valueC"/>
    </div>

    <div :class="{'menu-active': show}">
      <div>
        <div class="sub-title">菜单多选</div>
        <NavBar :onLeftClick="handleClick">
          <template slot="leftContent">
            <Icon type="ellipsis-circle" style="margin-right: 6px;"></Icon>
            Menu
          </template>
          Multi select menu
        </NavBar>
      </div>
      <umMenu
        v-if="show"
        :data="data1"
        class="foo-menu"
        :multiSelect="true"
        :onChange="onChangeD"
        v-model="value"/>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import Menu from '@/components/Menu'
  import Icon from '@/components/Icon'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/white-space'
  import ActivityIndicator from '@/components/activity-indicator'

  export default {
    components: {
      umMenu: Menu,
      NavBar,
      Icon,
      WhiteSpace,
      WingBlank,
      ActivityIndicator
    },
    data () {
      return {
        show: false,
        showA: false,
        showB: false,
        showC: false,
        initData: null,
        valueA: ['1', '3'],
        valueB: ['1'],
        valueC: ['1', '3'],
        value: ['1', ['3', '4']],
        height: document.documentElement.clientHeight * 0.6,
        curValue: '',
        data1: [
          {
            value: '1',
            label: 'Food',
            children: [
              {
                label: 'All Foods',
                value: '1',
                disabled: false
              },
              {
                label: 'Chinese Food',
                value: '2'
              }, {
                label: 'Hot Pot',
                value: '3'
              }, {
                label: 'Buffet',
                value: '4'
              }, {
                label: 'Fast Food',
                value: '5'
              }, {
                label: 'Snack',
                value: '6'
              }, {
                label: 'Bread',
                value: '7'
              }, {
                label: 'Fruit',
                value: '8'
              }, {
                label: 'Noodle',
                value: '9'
              }, {
                label: 'Leisure Food',
                value: '10'
              }]
          }, {
            value: '2',
            label: 'Supermarket',
            children: [
              {
                label: 'All Supermarkets',
                value: '1'
              }, {
                label: 'Supermarket',
                value: '2',
                disabled: true
              }, {
                label: 'C-Store',
                value: '3'
              }, {
                label: 'Personal Care',
                value: '4'
              }]
          }, {
            value: '3',
            label: 'Extra',
            isLeaf: true,
            children: [
              {
                label: 'you can not see',
                value: '1'
              }]
          }
        ],
        data2: [
          {
            value: '1',
            label: 'Food'
          }, {
            value: '2',
            label: 'Supermarket'
          }, {
            value: '3',
            label: 'Extra',
            isLeaf: true
          }
        ]
      }
    },
    methods: {
      handleClickA (ev) {
        ev.preventDefault()
        this.showA = !this.showA
        if (!this.initData) {
          setTimeout(() => {
            this.initData = this.data1
          }, 500)
        }
        this.initData = this.data1
      },
      handleClickB () {
        this.showB = !this.showB
      },
      handleClickC () {
        this.showC = !this.showC
      },
      handleClick () {
        this.show = !this.show
      },
      onMaskClick () {
        this.showA = false
      },
      onOk () {
        this.showC = false
      },
      onChangeA () {
        var label = ''
        this.data1.forEach((dataItem) => {
          if (dataItem.value === this.valueA[0]) {
            label = dataItem.label
            if (dataItem.children && this.valueA[1]) {
              dataItem.children.forEach((cItem) => {
                if (cItem.value === this.valueA[1]) {
                  label += ` ${cItem.label}`
                }
              })
            }
          }
        })
        console.log(label)
      },
      onChangeB () {
        console.log(this.valueC)
      },
      onChangeD () {
        console.log(this.value)
      }
    }
  }
</script>

<style scoped>
  .sub-title {
    color: #2f2f2f;
    font-size: 18px;
    padding: 20px 0 12px 15px;
  }
  .foo-menu{
    position: relative;
    z-index: 1000;
  }
  .menu-active{
    z-index: 80;
  }
  .menu-mask {
    content: ' ';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
    z-index: 79;
  }
</style>
