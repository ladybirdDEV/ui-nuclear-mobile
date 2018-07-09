<template>
  <div>
    <List>
      <template slot="renderHeader">Form switch</template>
      <ListItem>
        On
        <template slot="extra">
          <uSwitch checked :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Off
        <template slot="extra">
          <uSwitch :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        Off disabled
        <template slot="extra">
          <uSwitch disabled :onClick="(v) => {log(v)}"></uSwitch>
        </template>
      </ListItem>
      <ListItem>
        On disabled
        <template slot="extra">
          <uSwitch checked disabled :onClick="(v) => {log(v)}"></uSwitch>
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
import { List, ListItem } from '@/components/list'
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

