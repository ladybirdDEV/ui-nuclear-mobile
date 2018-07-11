<template>
  <div>
    <List>
      <InputItem
         type="money"
         placeholder="start from left"
         moneyKeyboardAlign="left"
         clear>光标在左</InputItem>
      <InputItem type="money" placeholder="start from right" clear>光标在右</InputItem>
      <InputItem type="money" placeholder="money format" clear>数字键盘</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Customize to focus
      </template>
      <InputItem
        clear
        placeholder="auto focus">标题</InputItem>
      <InputItem
        clear
        placeholder="click the button below to focus"
        ref="customFocusInst">标题</InputItem>
      <ListItem>
        <div :style="{ width: '100%', color: '#108ee9', textAlign: 'center' }" @click="handleClick">click to focus</div>
      </ListItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Click label to focus input
      </template>
      <InputItem
        placeholder="click label to focus input"
        ref="labelFocusInst">
        <div @click="() => {$refs.labelFocusInst.setFocus()}">标题</div>
      </InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Show clear
      </template>
      <InputItem
        placeholder="limited title length"
        :labelNumber="5"
        :maxLength="5">标题过长超过默认的5个字</InputItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Custom title（text / image / empty）
      </template>
      <InputItem
        placeholder="no label"></InputItem>
      <InputItem
        placeholder="title can be icon，image or text">
        <div :style="{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px', }"></div>
      </InputItem>
    </List>
    <WhiteSpace/>
    <List>
      <template slot="renderHeader">
        Customize the extra content in the right
      </template>
      <InputItem
        placeholder="0.00"
        extra="¥">价格</InputItem>
    </List>
    <WhiteSpace />
    <List>
      <template slot="renderHeader">
        Format
      </template>
      <InputItem
        type="bankCard"
        initialValue="8888 8888 8888 8888">银行卡</InputItem>
      <InputItem
        type="phone"
        placeholder="186 1234 1234">手机号码</InputItem>
      <InputItem
        type="password"
        placeholder="****">密码</InputItem>
      <InputItem
        type="number"
        placeholder="click to show number keyboard">数字键盘</InputItem>
      <InputItem
        type="digit"
        placeholder="click to show native number keyboard">数字键盘</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        'Not editable / Disabled
      </template>
      <InputItem
        initialValue="not editable"
        :editable="false">姓名</InputItem>
      <InputItem
        initialValue="style of disabled `InputItem`"
        disabled>姓名</InputItem>
    </List>
    <List>
      <template slot="renderHeader">
        Confirm when typing
      </template>
      <InputItem
        type="phone"
        placeholder="input your phone"
        @onChange="onChange"
        @onErrorClick="onErrorClick"
        :error="hasError"
        v-model="value">手机号码</InputItem>
    </List>
  </div>
</template>
<script>
import List from '@/components/list'
import ListItem from '@/components/list-item'
import InputItem from '@/components/input-item'
import WhiteSpace from '@/components/white-space'
import Toast from '@/components/toast'
export default {
  components: {
    List,
    ListItem,
    InputItem,
    WhiteSpace
  },
  data () {
    return {
      hasError: false,
      value: ''
    }
  },
  methods: {
    handleClick () {
      this.$refs.customFocusInst.setFocus()
    },
    onChange () {
      if (this.value.replace(/\s/g, '').length < 11) {
        this.hasError = true
      } else {
        this.hasError = false
      }
    },
    onErrorClick () {
      Toast({
        message: 'Please enter 11 digits'
      })
    }
  }
}
</script>

