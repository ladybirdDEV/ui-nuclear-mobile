<template>
  <div>
    <WhiteSpace />
    <div class="sub-title">StartTime</div>
    <DatePickerView
      mode="datetime"
      :minDate="new Date('2011-1-2 16:00:02')"
      :maxDate="new Date('2030-1-2 18:00:02')"
      v-model="startTime"
      :minuteStep="2"
      :onValueChange="startTimeValueChanged"
      :onChange="startTimeChangedDate"
      :onScrollChange="startTimeScrollChange"
    ></DatePickerView>
    <div class="sub-title">EndTime</div>
    <DatePickerView
      mode="datetime"
      :minDate="new Date('2011-1-2 16:00:02')"
      :maxDate="new Date('2030-1-2 02:00:02')"
      v-model="endTime"
      :locale="enUS"
      :minuteStep="2"
      :onValueChange="endTimeValueChanged"
      :onChange="endTimeChangedDate"
      :onScrollChange="endTimeScrollChange"
    ></DatePickerView>
  </div>
</template>
<script>
import WhiteSpace from '@/components/white-space'
import DatePickerView from '@/components/date-picker-view'
import enUS from '@/components/MobileDatePicker/locale/en_US'
export default {
  name: 'DatepickerViewPage',
  components: {
    WhiteSpace,
    DatePickerView
  },
  data () {
    return {
      startTime: new Date('2015-3-16 9:00:05'),
      endTime: new Date('2018-3-16 9:00:05'),
      enUS: enUS
    }
  },
  methods: {
    startTimeValueChanged (value, index) {
    },
    startTimeChangedDate (date) {
      this.startTime = date
      if (date > this.endTime) {
        this.endTime = date
      }
    },
    startTimeScrollChange (date, value, index) {

    },
    endTimeValueChanged (value, index) {

    },
    endTimeChangedDate (date) {
      this.endTime = date
      if (date < this.startTime) {
        this.startTime = date
      }
    },
    endTimeScrollChange (date, value, index) {}
  }
}
</script>
<style lang="less">
.sub-title {
  margin: 8px;
}
</style>
