<template>
  <form :class="cls" action="#" @submit="submit" ref="search">
    <div class="um-search-input">
      <div class="um-search-synthetic-ph"  ref="syntheticPhRef">
        <span class="um-search-synthetic-ph-container" ref="container">
          <i class="um-search-synthetic-ph-icon" />
            <!-- <Icon type="search" size="xs" color="#ccc"></Icon> -->
          <span class="um-search-synthetic-ph-placeholder"
            :style="{visibility: curPlaceholder && !curValue ? 'visible' : 'hidden'}">
            {{curPlaceholder}}
          </span>
        </span>
      </div>
      <input type="search"
             v-model="curValue"
             class="um-search-value"
             :maxlength="maxLength"
             :disabled="disabled"
             ref="input"
             @change="getChange"
             @blur="lostFocus"
             @click="getFocus($event)"/>
      <div class="um-search-clear-active" v-if="showClearButton">
        <a :class="clearCls" @click="doClear"></a>
      </div>
    </div>
    <div :class="cancelCls" @click="cancelBtn($event)" ref="rightBtnRef">{{cancelText}}</div>
  </form>
</template>
<script>
  import Icon from '../icon'
  import Feedback from '../feedback'

  const prefixCls = 'um-search'

  export default {
    name: 'SearchBar',
    components: {
      Icon,
      Feedback
    },
    props: {
      maxLength: {
        type: Number,
        default: 8
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      defaultValue: String,
      value: String,
      placeholder: {
        type: String,
        default: 'Search'
      },
      onSubmit: Function,
      onChange: Function,
      onFocus: Function,
      onBlur: Function,
      onCancel: Function,
      showCancelButton: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onClear: Function
    },
    data () {
      return {
        curValue: null,
        curPlaceholder: this.placeholder,
        curShowCancelButton: this.showCancelButton,
        focus: false,
        firstFocus: null,
        showClearButton: false
      }
    },
    computed: {
      cls () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-start`]: this.focus || (this.curValue && this.curValue.length > 0)
        }
      },
      clearCls () {
        return {
          [`${prefixCls}-clear`]: true,
          [`${prefixCls}-clear-show`]: this.focus || (this.value && this.value.length > 0)
        }
      },
      cancelCls () {
        return {
          [`${prefixCls}-cancel`]: true,
          [`${prefixCls}-cancel-show`]: this.showCancelButton || this.focus || this.curValue || this.curShowCancelButton,
          [`${prefixCls}-cancel-anim`]: this.firstFocus
        }
      }
    },
    methods: {
      submit (event) {
        event.preventDefault()
        if (this.onSubmit) {
          this.onSubmit(this.curValue)
        }
        this.$refs.input.blur()
      },
      getFocus (event) {
        event && event.stopPropagation()
        this.$refs.input.focus()
        this.focus = true
        this.firstFocus = true
        this.curShowCancelButton = true
        if (typeof this.onFocus === 'function' && this.onFocus) {
          this.onFocus()
        }
        if (this.curValue) {
          this.showClearButton = true
        }
      },
      lostFocus () {
        this.focus = false
        if (this.onBlur) {
          this.onBlur()
        }
        if (this.curValue) {
          this.showClearButton = false
        } else {
          this.doCancel()
        }
      },
      cancelBtn (event) {
        event.stopPropagation()
        if (typeof this.onCancel === 'function' && this.onCancel) {
          this.onCancel(this.curValue)
        } else {
          this.doCancel()
        }
      },
      doCancel () {
        this.curValue = ''
        this.focus = false
        if (!this.showCancelButton) {
          this.curShowCancelButton = false
        }
      },
      doClear (event) {
        event.stopPropagation()
        if (typeof this.onClear === 'function' && this.onClear) {
          this.onClear(this.curValue)
        }
        // this.curValue = ''
        this.focus = true
      },
      getChange () {
        if (typeof this.onChange === 'function' && this.onChange) {
          this.onChange()
        }
      },
      touchEnd () {
        if (!this.showCancelButton && this.curShowCancelButton) {
          if (this.curValue) {
            this.showClearButton = false
          } else {
            this.cancelBtn(event)
          }
        } else {
          this.lostFocus()
        }
      },
      stopTouch (e) {
        e.stopPropagation()
      },
      animation () {
        const realWidth = this.$refs.container.getBoundingClientRect().width
        if (this.$refs.search.className.indexOf('um-search-start') > -1) {
          this.$refs.syntheticPhRef.style.width = `${Math.ceil(realWidth)}px`
          if (!this.showCancelButton) {
            this.$refs.rightBtnRef.style.marginRight = 0
          }
        } else {
          this.$refs.syntheticPhRef.style.width = '100%'
          if (!this.showCancelButton) {
            this.$refs.rightBtnRef.style.marginRight = `-${this.$refs.rightBtnRef.offsetWidth}px`
          }
        }
      }
    },
    watch: {
      curValue (val, oldVal) {
        this.curValue = val
        if (val !== '' && this.focus) {
          this.showClearButton = true
        } else {
          this.showClearButton = false
        }
        this.$emit('input', val)
      }
    },
    created () {
      if (this.value) {
        this.curValue = this.value
      } else if (this.defaultValue) {
        this.curValue = this.defaultValue
      } else {
        this.curValue = ''
      }
    },
    updated () {
      this.animation()
    },
    mounted () {
      this.autofocus && this.getFocus()
      this.animation()
      document.querySelector('body').addEventListener('click', this.touchEnd)
    },
    destroyed () {
      document.querySelector('body').removeEventListener('click', this.touchEnd)
    }
  }
</script>
<style lang="less">
  @import './style/index';
</style>
