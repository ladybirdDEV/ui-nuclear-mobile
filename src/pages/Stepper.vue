<template>
  <div>
    <List>
      <ListItem wrap>
        <template slot="extra">
          <Stepper
            :style="{ width: '100%', minWidth: '100px' }"
            :max="10"
            :min="1"
            showNumber
            :value="value"
            @change="onChange"
          ></Stepper>
        </template>
        Show number value
      </ListItem>
      <ListItem wrap>
        <template slot="extra">
          <Stepper
            :style="{ width: '100%', minWidth: '100px' }"
            :max="10"
            :min="1"
            showNumber
            :value="3"
            disabled
          ></Stepper>
        </template>
        Disabled
      </ListItem>
    </List>
  </div>
</template>
<script>
import List from "@/components/list"
import ListItem from "@/components/list-item"
import Stepper from "@/components/stepper"
export default {
  components: {
    Stepper,
    List,
    ListItem
  },
  data() {
    return {
      value: 3
    }
  },
  methods: {
    onChange (val) {
      this.value = val
    }
  }
}
</script>

