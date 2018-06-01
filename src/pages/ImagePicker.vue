<template>
<ImagePicker :files="files"></ImagePicker>
</template>

<script>
  import ImagePicker from '@/components/ImagePicker'
  export default {
    components: {
      ImagePicker
    },
    data () {
      return {
        files: [
          {
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2121'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2122'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2123'
          },
          {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2124'
          }
        ]
      }
    }
  }
</script>
