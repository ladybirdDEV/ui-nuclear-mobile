<template>
  <div>
    <Tabs :tabs="tabs" :page="page" @onTabClick="(obj, index) => log(obj, index)" @onChange="(obj, index) => log(obj, index)">
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of first tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of second tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <Tabs :tabs="tabs2" :initialPage="1" tabBarPosition="bottom">
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of first tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of second tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <h2>无动画</h2>
    <Tabs :tabs="tabs2" :initialPage="1" :animated="false">
      <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
        Content of first tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
        Content of second tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
        Content of third tab
      </div>
    </Tabs>
    <h2>固定高度</h2>
    <div style="height:200px;">
      <Tabs :tabs="tabs2" :initialPage="1">
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of first tab
        </div>
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of second tab
        </div>
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of third tab
        </div>
      </Tabs>
    </div>
    <h2>垂直样式</h2>
    <div style="height:200px;">
      <Tabs :tabs="tabs3" :initialPage="1" tabBarPosition="left" tabDirection="vertical">
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of first tab
        </div>
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of second tab
        </div>
        <div style="display: flex; align-items: center; justify-content: center; height: 250px; background-color: #fff;">
          Content of third tab
        </div>
      </Tabs>
    </div>
    <h2>超出界面宽度，多于5个标签</h2>
    <Tabs :tabs="tabs4">
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 1st tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 2nd tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 3rd tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 4th tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 5th tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 6th tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 7th tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 8th tab
      </div>
      <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: #fff;">
        Content of 9th tab
      </div>
    </Tabs>
  </div>
</template>
<script>
import Tabs from '@/components/tabs'
import WhiteSpace from '@/components/white-space'
export default {
  components: {
    Tabs,
    WhiteSpace,
  },
  data () {
    return {
      page: 1,
      tabs: [
        {
          render () {
            return (
              <Badge text="3">First Tab</Badge>
            )
          }
        },
        {
          render () {
            return (
              <Badge text="今日(20)">Second Tab</Badge>
            )
          }
        },
        {
          render () {
            return (
              <Badge dot>Third Tab</Badge>
            )
          }
        }
      ],
      tabs2: [
        { title: 'First Tab', sub: '1' },
        { title: 'Second Tab', sub: '2' },
        { title: 'Third Tab', sub: '3' }
      ],
      tabs3: [
        { title: '1 Tab', sub: '1' },
        { title: '2 Tab', sub: '2' },
        { title: '3 Tab', sub: '3' }
      ],
      tabs4: [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
        { title: '5th Tab' },
        { title: '6th Tab' },
        { title: '7th Tab' },
        { title: '8th Tab' },
        { title: '9th Tab' }
      ]
    }
  },
  methods: {
    log (obj, index) {
      console.log(obj, index)
    }
  }
}
</script>

