<template>
  <div style="padding: 10px;">
    <h3>popup cascader</h3>
    <p>选择的城市：{{getSel()}}</p>
    <PopupCascader
        v-model="visible"
        :value="value"
        :data="cityData"
        :onDismiss="onDismiss"
        :onChange="onPickerChange"
        :onScrollChange="onScrollChange"
        :onOk="onChange"
        title="Cascader"></PopupCascader>
    <button @click="outerCtrl">open</button>
  </div>
</template>

<script>
import PopupCascader from '@/components/MobileCascader/MobilePopup.vue'
import arrayTreeFilter from 'array-tree-filter'
import cityData from '@/components/MobileCascader/data'

export default {
  components: {
    PopupCascader
  },
  data () {
    return {
      cityData: cityData,
      visible: false,
      value: []
    }
  },
  methods: {
    outerCtrl () {
      this.visible = !this.visible
    },
    onPickerChange (value) {
      console.log('picker change', value)
    },
    onDismiss () {
      console.log('onDismiss')
      this.visible = false
    },
    onChange (value) {
      console.log('onChange', value)
      this.value = value
      this.visible = false
    },
    onScrollChange (value) {
      console.log('onScrollChange', value)
    },
    getSel () {
      const value = this.value
      if (!value) {
        return ''
      }
      const treeChildren = arrayTreeFilter(this.cityData, (c, level) => {
        return c.value === value[level]
      })
      return treeChildren.map((v) => {
        return v.label
      }).join(',')
    }
  }
}
</script>

