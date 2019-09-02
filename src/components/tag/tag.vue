<template>
  <div class="um-tag" :class="wrapCls" @click="tagClick" id="umtag" v-if="isShow">
    <Icon v-if="closable" :class="{'um-tag-close': closable = true}" type="cross-circle" size="xs" @click.native="closeClick"></Icon>
    <div class="um-tag-text">
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
