<template>
  <div>
    <List renderHeader="Customize to focus">
      <TextareaItem
        title="标题"
        placeholder="auto focus in Alipay client"
        autoHeight
        ref="autoFocusInst"
      />
      <TextareaItem
        title="标题"
        placeholder="click the button below to focus"
        ref="customFocusInst"
        autoHeight
      ></TextareaItem>
      <ListItem>
        <div
          :style="{width: '100%', color:'#108ee9', textAlign:'center'}"
          @click="$refs.customFocusInst.focus()"
        >click to focus</div>
      </ListItem>
    </List>
    <!-- <List renderHeader="Whether is controlled">
      <TextareaItem title="受控组件" placeholder="controlled"></TextareaItem>
      <TextareaItem title="非受控组件"
                    placeholder="please input content"
                    clear>
      </TextareaItem>
    </List>-->
    <List renderHeader="Auto / Fixed height">
      <TextareaItem title="高度自适应" autoHeight :labelNumber="5" />
      <TextareaItem :rows="3" placeholder="fixed number of lines" />
    </List>

    <List renderHeader="show clear">
      <TextareaItem clear title="标题" placeholder="displayed clear while typing" />
    </List>

    <List renderHeader="Custom title（text / image / empty）">
      <TextareaItem placeholder="title can be customized">
        <img slot="title" src="https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png" />
      </TextareaItem>
    </List>

    <List renderHeader="Limited value length">
      <TextareaItem placeholder="can enter up to 10 characters" :count="10" />
    </List>

    <List renderHeader="Count">
      <TextareaItem value="计数功能，我的意见是..." :rows="5" :count="100" />
    </List>

    <List renderHeader="'Not editable / Disabled'">
      <TextareaItem value="not editable" title="姓名" :editable="false" />
      <TextareaItem value="disabled style" title="姓名" disabled />
    </List>
  </div>
</template>

<script>
import TextareaItem from "@/components/textarea-item"
import List from "@/components/list"
import ListItem from "@/components/list-item"

export default {
  components: {
    TextareaItem,
    List,
    ListItem
  },
  data() {
    return {}
  },
  mounted() {
    this.$refs.autoFocusInst.focus()
  },
  methods: {
    btnClick() {
      this.$refs.textarea.setFocus()
    },
    onBlur(value) {
      console.log(value)
    },
    onFocus(value) {
      console.log(value)
    }
  }
}
</script>

