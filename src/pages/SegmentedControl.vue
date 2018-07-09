<template>
  <WingBlank>
    <WhiteSpace></WhiteSpace>
    <h3>基本</h3>
    <h4 style="color: #888;">Simplest</h4>
    <SegmentedControl
      :values="segSimplest"
      :onChange="change"></SegmentedControl>
    <WhiteSpace></WhiteSpace>
    <h4 style="color: #888;">disabled</h4>
    <SegmentedControl :values="segDisabled" disabled></SegmentedControl>
     <h4 style="color: #888;">SelectedIndex</h4>
    <SegmentedControl
      :values="segSelected"
      :selectedIndex=1
      :onChange="change"></SegmentedControl>
    <h4 style="color: #888;">Custom</h4>
    <SegmentedControl
      :values="segSelected"
      :selectedIndex=2
      :tintColor='tintColor'
      :customStyle="{ height: '40px', width: '250px'}"></SegmentedControl>
  </WingBlank>
</template>

<script>
  import SegmentedControl from '@/components/segmented-control'
  import WhiteSpace from '@/components/white-space'
  import WingBlank from '@/components/wing-blank'

  export default {
    components: {
      SegmentedControl,
      WhiteSpace,
      WingBlank
    },
    data () {
      return {
        segSimplest: ['segment1', 'segment2'],
        segDisabled: ['segment1', 'segment2'],
        segSelected: ['segment1', 'segment2', 'segment3'],
        tintColor: '#F56C6C'
      }
    },
    methods: {
      change () {
        // console.log(435345)
      }
    }
  }
</script>
