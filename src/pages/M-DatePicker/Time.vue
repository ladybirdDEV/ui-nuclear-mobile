<template>
  <div style="margin: 10px 30px;">
     <h2>date picker</h2>
     <div>
       <span>{{(date && format(date)) || format(now)}}</span>
       <MobileDatePicker
        :defaultDate="date || now"
        mode="time"
        :minuteStep="4"
        :maxDate="maxDate"
        :minDate="minDate"
        :onDateChange="onDateChange"></MobileDatePicker>
     </div>
  </div>
</template>

<script>
import {MobileDatePicker} from '@/components/MobileDatePicker'
import {minDate, maxDate, now, format} from './util'
now.setHours(15)
now.setMinutes(39)

export default {
  components: {
    MobileDatePicker
  },
  data () {
    return {
      date: null,
      now,
      minDate,
      maxDate
    }
  },
  methods: {
    onDateChange (date) {
      this.date = date
    },
    format (date) {
      format(date)
    }
  }
}
</script>
