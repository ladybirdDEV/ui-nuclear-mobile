<template>
  <div style="padding: 10px;">
      <h3>simple inline</h3>
      <MobileCascader :onChange="onChange" :data="cityData" :defaultValue="value"></MobileCascader>
    </div>
</template>

<script>
import MobileCascader from '../../components/MobileCascader'
import cityData from '@/components/MobileCascader/data'

export default {
  components: {
    MobileCascader
  },
  data () {
    return {
      cityData: cityData,
      value: ['02', '02-1', '02-1-1']
    }
  },
  methods: {
    onChange (value) {
      console.log('onChange', value)
      this.value = value
    }
  }
}
</script>

