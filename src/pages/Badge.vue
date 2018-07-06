<template>
  <List renderHeader="Basic Style">
    <ListItem extra="extra content" arrow="horizontal">
      <Badge dot>
        <span style="width:26px;height:26px;background:#ddd;display:inline-block"></span>
      </Badge>
      <span style="margin-left:12px;">Dot badge</span>
    </ListItem>
    <ListItem thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png" arrow="horizontal">
      <template slot="extra">
        <Badge :text="77" :overflowCount="55"></Badge>
      </template>
      Content
    </ListItem>
    <ListItem>
      <Badge text="促" corner>
        <div class="corner-badge">Use corner prop</div>
      </Badge>
    </ListItem>
    <ListItem class="special-badge">
      <template slot="extra">
        <Badge text="促"></Badge>
      </template>
      Custom corner
    </ListItem>
    <ListItem extra="extra" arrow="horizontal">
      <Badge :text="0">Text number 0</Badge>
      <Badge text="new" :styles="{ marginLeft: '12px' }" />
    </ListItem>
    <ListItem>
      Marketing:
      <Badge text="减" hot :styles="{ marginLeft: '8px' }" />
      <Badge text="惠" hot :styles="{ marginLeft: '8px' }" />
      <Badge text="免" hot :styles="{ marginLeft: '8px' }" />
      <Badge text="反" hot :styles="{ marginLeft: '8px' }" />
      <Badge text="HOT" hot :styles="{ marginLeft: '8px' }" />
    </ListItem>
    <ListItem>
      Marketing:
      <Badge text="券" :styles="{ marginLeft: '8px', padding: '0 3px', backgroundColor: '#f19736', borderRadius: '2px' }" />
      <Badge text="NEW" :styles="{ marginLeft: '8px', padding: '0 3px', backgroundColor: '#21b68a', borderRadius: '2px' }" />
      <Badge
        text="自动缴费"
        :styles="{
          marginLeft: '8px',
          padding: '0 3px',
          backgroundColor: '#fff',
          borderRadius: '2px',
          color: '#f19736',
          border: '1px solid #f19736',
        }" />
    </ListItem>
  </List>
</template>
<script>
import Badge from '@/components/badge'
import { List, ListItem, ListItemBrief } from '@/components/List'
export default {
  components: {
    Badge,
    List,
    ListItem,
    ListItemBrief
  }
}
</script>
<style>
.corner-badge {
  height: 50px;
  width: 200px;
}
.special-badge.um-list-item .um-list-line {
  padding-right: 0;
}

.special-badge.um-list-item .um-list-line .um-list-extra {
  padding: 0;
  height: 44px;
}

.special-badge .um-badge {
  transform: rotate(45deg);
  transform-origin: right bottom;
  right: 0;
  top: 13px;
  width: 50px;
}

.special-badge .um-badge-text {
  border-radius: 1px;
}

</style>
