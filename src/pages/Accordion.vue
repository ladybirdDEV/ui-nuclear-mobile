<template>
  <div>
    <WingBlank><div class="accordion-title">基本</div></WingBlank>
    <div style="margin: 10px 0;">
      <Accordion class="my-accordion" defaultActiveKey="1" :onChange="onChange">
        <Panel header="Title 1" name="1">
          <List class="my-list">
            <ListItem>content 1</ListItem>
            <ListItem>content 2</ListItem>
            <ListItem>content 3</ListItem>
          </List>
        </Panel>
        <Panel header="Title 2" class="pad" name="2">
          this is panel content2 or other
        </Panel>
        <Panel header="Title 3" class="pad" name="3">
          text text text text text text text text
        </Panel>
      </Accordion>
    </div>
    <WingBlank><div class="accordion-title">手风琴模式</div></WingBlank>
    <div style="margin: 10px 0;">
      <Accordion class="my-accordion" v-model="value" accordion :openAnimation="false" :onChange="onChange">
        <Panel header="Title 1" name="1">
          <List class="my-list">
            <ListItem>content 1</ListItem>
            <ListItem>content 2</ListItem>
            <ListItem>content 3</ListItem>
          </List>
        </Panel>
        <Panel header="Title 2" class="pad" name="2">
          this is panel content2 or other
        </Panel>
        <Panel header="Title 3" class="pad" name="3">
          text text text text text text text text
        </Panel>
      </Accordion>
    </div>
  </div>
</template>

<script>
  import Accordion from '@/components/accordion'
  import Panel from '@/components/accordion-panel'
  import List from '@/components/list'
  import ListItem from '@/components/list-item'
  import WingBlank from '@/components/wing-blank'
  import WhiteSpace from '@/components/white-space'

  export default {
    components: {
      Accordion,
      Panel,
      ListItem,
      List,
      WingBlank,
      WhiteSpace
    },
    data () {
      return {
        value: []
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
      }
    },
    watch: {
      value (val) {
        console.log(val)
      }
    }
  }
</script>
