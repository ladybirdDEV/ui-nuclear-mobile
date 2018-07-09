<template>
  <div class="um-list-brief">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Brief'
}
</script>
<style>
.um-list-item .um-list-line .um-list-brief {
  color: #888;
  font-size: 15px;
  line-height: 1.5;
  margin-top: 6px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
