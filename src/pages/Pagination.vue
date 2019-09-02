<template>
<div class="pagination-container">
  <p class="sub-title">Button with text</p>
  <Pagination :total="5" v-model="page" />

  <p class="sub-title">Button with text and icon</p>
  <Pagination :total="5" class="custom-pagination-with-icon" :current="1">
    <span slot="prevText" class="arrow-align"><Icon type="left"></Icon>上一步</span>
    <span slot="nextText" class="arrow-align">下一步<Icon type="right"></Icon></span>
  </pagination>

  <p class="sub-title">Hide number</p>
  <Pagination simple :total="5" :current="1" :locale="locale" />

  <p class="sub-title">Show number only</p>
  <Pagination mode="number" :total="5" :current="3" />

  <p className="sub-title">Point style</p>
  <Pagination mode="pointer" :total="5" :current="2" style="margin-bottom:16px" />
</div>
</template>
<script>
import Icon from '@/components/icon'
import Pagination from '@/components/pagination'

export default {
  components: {
    Pagination,
    Icon
  },
  data () {
    return {
      page: 2,
      locale: {
        prevText: 'Prev',
        nextText: 'Next'
      }
    }
  },
  methods: {
    log (obj) {
      console.log(obj)
    }
  }
}
</script>
