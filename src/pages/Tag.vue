<template>
  <div>
    <WingBlank>
      <h3>基本</h3>
      <div style="color: #999">RadioItem demo</div>
      <WhiteSpace></WhiteSpace>
      <Tag text="Basic"></Tag>
      <Tag text="Selected" :selected=true></Tag>
      <Tag :disabled=true text="Disabled"></Tag>
      <WhiteSpace></WhiteSpace>
      <Tag :closable=true text="Closeable"></Tag>
      <Tag text="Small and Readonly" :small=true></Tag>
    </WingBlank>
  </div>
</template>

<script>
  import Tag from '@/components/tag'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/white-space'

  export default {
    components: {
      WingBlank,
      WhiteSpace,
      Tag
    }
  }
</script>

