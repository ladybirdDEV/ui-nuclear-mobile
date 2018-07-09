<template>
  <div class="um-tag" :class="wrapCls" @click="tagClick" id="umtag" v-if="isShow">
    <Icon v-if="closable" :class="{'um-tag-closable': closable = true}" type="cross-circle" size="xs" @click.native="closeClick"></Icon>
    <div>
      {{text}}
    </div>
  </div>
</template>
<script>
  import Icon from '../icon'

  export default {
    name: 'Tag',
    components: {
      Icon
    },
    props: {
      text: {
        type: String,
        default: ''
      },
      small: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isselected: '',
        isShow: true
      }
    },
    computed: {
      wrapCls () {
        return [
          'um-tag-normal',
          {
            'um-tag-disabled': this.disabled,
            'um-tag-small': this.small,
            'um-tag-selected': this.isselected
          }
        ]
      }
    },
    methods: {
      tagClick () {
        if (this.closable) {
          return undefined
        }
        this.isselected = !this.isselected
      },
      closeClick () {
        this.isShow = false
      }
    },
    mounted () {
      this.isselected = this.selected
    }
  }
</script>

<style lang="less">
  .um-tag {
    display: inline-block;
    position: relative;
    font-size: 14px;
    text-align: center;
    padding: 0 15px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .um-tag-small {
    height: 15px;
    line-height: 15px;
    padding: 0 5px;
    font-size: 10px;
  }

  .um-tag-normal {
    background-color: #fff;
    color: #888;
    border: 1PX solid #ddd;

  }

  .um-tag-selected {
    background-color: #fff;
    color: #108ee9;
    border: 1PX solid #108ee9;
  }

  .um-tag-disabled {
    color: #bbb;
    background-color: #ddd;
    border: 1PX solid #ddd;
  }

  .um-tag-closable {
    position: absolute;
    top: -9px;
    left: -10px;
    color: #bbb;
    background-color: #fff;
    border-radius: 9px;
  }

  .um-tag-closable:active {
    color: #888;
  }
</style>
