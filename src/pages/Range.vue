<template>
  <div>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Basic range</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" @onChange="change" @afterChange="afterChange" />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p class="sub-title">Disabled range</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" disabled />
    </WingBlank>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
      <p className="sub-title">Range with customized style</p>
      <Range style="margin-left:15px;margin-right:15px" :min="0" :max="20" :defaultValue="[3, 10]" :trackStyle="{backgroundColor: 'red'}" :railStyle="{backgroundColor: 'black'}" :handleStyle="[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]"/>
    </WingBlank>
  </div>
</template>
<script>
import Range from '@/components/range'
import WhiteSpace from '@/components/white-space'
import WingBlank from '@/components/wing-blank'
export default {
  components: {
    Range,
    WhiteSpace,
    WingBlank
  },
  methods: {
    change (v) {
      console.log('change' + v)
    },
    afterChange (v) {
      console.log('afterChange' + v)
    }
  }
}
</script>
