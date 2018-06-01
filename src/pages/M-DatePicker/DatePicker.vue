<template>
  <div style="margin: 10px 30px">
    <h2>date picker</h2>
    <select v-model="mode">
      <option>datetime</option>
      <option>date</option>
      <option>time</option>
      <option>month</option>
      <option>year</option>
    </select>
    <div>
      <span></span>
      <MobileDatePicker
        :defaultDate="date || now"
        :mode="mode"
        :minDate="minDate"
        :maxDate="maxDate"
        :onDateChange="onDateChange"
        :onValueChange="onValueChange"
        :onScrollChange="onScrollChange"
        use12Hours></MobileDatePicker>
    </div>
  </div>
</template>

<script>
import {MobileDatePicker} from '@/components/MobileDatePicker'
import {minDate, maxDate, now, format} from './util'
const date = new Date(2017, 2, 31, 15, 1, 1)

export default {
  components: {
    MobileDatePicker
  },
  data () {
    return {
      date,
      mode: 'datetime',
      now,
      minDate,
      maxDate
    }
  },
  methods: {
    format (date) {
      format(date)
    },
    onDateChange (date) {
      console.log('onChange', format(date))
      this.date = date
    },
    onValueChange (values, index) {
      console.log('onValueChange', values, index)
    },
    onScrollChange (values, index) {
      console.log('onScrollChange', values, index)
    }
  },
  mounted () {
    console.log(this.date)
  }
}
</script>

