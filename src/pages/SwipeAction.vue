<template>
  <div>
    <div class="demoTitle">Basic</div>
    <List>
      <SwipeAction :left="demo1Left" :right="demo1Right" :onOpen="open" :onClose="close" :autoClose="true">
        <ListItem extra="More" arrow="horizontal">Have left and right buttons</ListItem>
      </SwipeAction>
      <SwipeAction :left="demo1Left">
        <ListItem extra="More" arrow="horizontal">Only left buttons</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo1Left">
        <ListItem extra="More" arrow="horizontal">Only right buttons</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo2Right">
        <ListItem extra="More" arrow="horizontal">Different button width</ListItem>
      </SwipeAction>
      <SwipeAction :right="demo1Left">
        <ListItem extra="More" arrow="horizontal" :onClick="() => {}">List.Item with onClick</ListItem>
      </SwipeAction>
    </List>
  </div>
</template>
<script>
import SwipeAction from '@/components/swipe-action'
import List from '@/components/list'
import ListItem from '@/components/list-item'
export default {
  components: {
    SwipeAction,
    List,
    ListItem
  },
  data () {
    return {
      demo1Left: [
        {
          text: 'edit',
          style: {
            backgroundColor: '#c8c7ce'
          },
          onPress: this.edit
        },
        {
          text: 'hide',
          style: {
            backgroundColor: '#0d8ee9'
          }
        }
      ],
      demo1Right: [
        {
          text: 'remove',
          style: {
            backgroundColor: '#ff3a2e'
          }
        }
      ],
      demo2Right: [
        {
          text: 'edit',
          style: {
            backgroundColor: '#c8c7ce'
          },
          onPress: this.edit
        },
        {
          text: 'long text',
          style: {
            backgroundColor: '#0d8ee9'
          }
        }
      ]
    }
  },
  methods: {
    edit () {
      console.log('edit')
    },
    open () {
      console.log('open buttons')
    },
    close () {
      console.log('close buttons')
    }
  }
}
</script>
<style>
.demoTitle {
  padding: 15px 0 9px 15px;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  font-weight: bolder;
  position: relative;
}
</style>
