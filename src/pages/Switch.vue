<template>
  <div>
    <List>
      <template slot="renderHeader">Form switch</template>
      <ListItem>
        Off
        <template slot="extra">
          <uSwitch @click="log"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        On
        <template slot="extra">
          <uSwitch checked @click="log"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Disabled off
        <template slot="extra">
          <uSwitch disabled @click="log"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Disabled on
        <template slot="extra">
          <uSwitch checked disabled @click="log"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Style for Android
        <template slot="extra">
          <uSwitch checked platform="android"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Color for Android
        <template slot="extra">
          <uSwitch checked platform="android" color="red"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Color for iOS
        <template slot="extra">
          <uSwitch checked platform="ios" color="red"></uSwitch>
        </template>
      </ListItem>
    </List>
  </div>
</template>
<script>
import List from '@/components/list'
import ListItem from '@/components/list-item'
import uSwitch from '@/components/switch'
export default {
  components: {
    List,
    ListItem,
    uSwitch
  },
  methods: {
    log (v) {
      console.log(v)
    }
  }
}
</script>

