<template>
  <div>
    <WhiteSpace />
    <PickerView :data="seasons" v-model="valueArr" @change="changed" @scroll-change="scrollChange" :disabled="false" />
    <WhiteSpace />
    <PickerView :data="city" :col="3" :cascade="true" v-model="citiesArr" @change="changedCascade" @scroll-change="scrollChangedCascade" :disabled="false" />
  </div>
</template>
<script>
import PickerView from '@/components/PickerView'
import WhiteSpace from '@/components/white-space'
import city from '@/components/mobile-cascader/data'
export default {
  name: 'PickerViewPage',
  components: {
    PickerView,
    WhiteSpace
  },
  data () {
    return {
      seasons: [
        [
          {label: '2015', value: '2015'},
          {label: '2016', value: '2016'},
          {label: '2017', value: '2017'},
          {label: '2018', value: '2018'}
        ],
        [
          {label: '春', value: '春'},
          {label: '夏', value: '夏'}
        ]
      ],
      valueArr: [''],
      city: city,
      citiesArr: ['01', '01-2'],
      style: {
        background: 'red',
        fontSize: '20px'
      }
    }
  },
  methods: {
    changed (val) {
      console.log('value changed', val)
    },
    scrollChange (val) {
      console.log('scrollChange', val)
    },
    changedCascade (val) {
      console.log('changedCascade', val)
    },
    scrollChangedCascade (val, index) {
      console.log('scrollChangedCascade', val, index)
    }
  }
}
</script>
