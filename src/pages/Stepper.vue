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
            v-model="value"></Stepper>
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
            :defaultValue="3"
            disabled></Stepper>
        </template>
        Disabled
      </ListItem>
    </List>
  </div>
</template>
<script>
import { List, ListItem } from '@/components/list'
import Stepper from '@/components/stepper'
export default {
  components: {
    Stepper,
    List,
    ListItem
  },
  data () {
    return {
      value: 3
    }
  }
}
</script>

