<template>
  <div>
    <List renderHeader="Customize to focus">
      <TextareaItem
        title="标题"
        placeholder="auto focus in Alipay client"
        autoHeight></TextareaItem>
      <TextareaItem
        title="标题"
        placeholder="click the button below to focus"
        ref="textarea"
        autoHeight
        :onBlur="onBlur"
        :onFocus="onFocus"></TextareaItem>
      <ListItem>
        <div class="click-btn" @click="btnClick">click to focus</div>
      </ListItem>
    </List>
    <!-- <List renderHeader="Whether is controlled">
      <TextareaItem title="受控组件" placeholder="controlled"></TextareaItem>
      <TextareaItem title="非受控组件"
                    placeholder="please input content"
                    clear>
      </TextareaItem>
    </List> -->
    <List renderHeader="Auto / Fixed height">
      <TextareaItem title="高度自适应" autoHeight/>
      <TextareaItem :rows="3" placeholder="fixed number of lines"/>
    </List>

    <List renderHeader="show clear">
      <TextareaItem clear title="标题" placeholder="displayed clear while typing"/>
    </List>

    <List renderHeader="Custom title（text / image / empty）">
      <TextareaItem
        title=""
        placeholder="title can be customized">
        <img src="https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png"/>
      </TextareaItem>
    </List>

    <List renderHeader="Limited value length">
      <TextareaItem
        placeholder="can enter up to 5 characters"
        :count="5"/>
    </List>

    <List renderHeader="Count">
      <TextareaItem
        defaultValue="计数功能，我的意见是..."
        :rows="5"
        :count="100"/>
    </List>

    <List renderHeader="'Not editable / Disabled'">
      <TextareaItem
        value="not editable"
        title="姓名"
        :editable="false"/>
      <TextareaItem
        value="disabled style"
        title="姓名"
        disabled/>
    </List>
  </div>
</template>

<script>
  import TextareaItem from '@/components/textarea-item'
  import List from '@/components/list'
  import ListItem from '@/components/list-item'
  import ListItemBrief from '@/components/list-item-brief'

  export default {
    components: {
      TextareaItem,
      List,
      ListItem,
      ListItemBrief
    },
    data () {
      return {}
    },
    methods: {
      btnClick () {
        this.$refs.textarea.setFocus()
      },
      onBlur (value) {
        console.log(value)
      },
      onFocus (value) {
        console.log(value)
      }
    }
  }
</script>

