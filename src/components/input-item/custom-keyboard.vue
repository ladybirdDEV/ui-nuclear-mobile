<template>
<div :class="`${prefixCls}-container`" data-transfer="true" v-transfer-dom>
  <div :class="wrapperCls">
    <table>
      <tbody>
        <tr>
          <KeyboardItem v-for="(item, index) in ['1', '2', '3']" :key="'item-' + item + '-' + index" @onClick="onKeyboardClick">{{ item }}</KeyboardItem>
          <KeyboardItem class="keyboard-delete" :rowSpan="2" type="delete" @onClick="onKeyboardClick"><i class="sr-only">{{currentLocale.backspaceLabel}}</i></KeyboardItem>
        </tr>
        <tr>
          <KeyboardItem v-for="(item, index) in ['4', '5', '6']" :key="'item-' + item + '-' + index" @onClick="onKeyboardClick">{{ item }}</KeyboardItem>
        </tr>
        <tr>
          <KeyboardItem v-for="(item, index) in ['7', '8', '9']" :key="'item-' + item + '-' + index" @onClick="onKeyboardClick">{{ item }}</KeyboardItem>
          <KeyboardItem :class="`keyboard-confirm`" :rowSpan="2" type="confirm" @onClick="onKeyboardClick">
            {{currentLocale.confirmLabel}}
          </KeyboardItem>
        </tr>
        <tr>
          <KeyboardItem v-for="(item, index) in ['.', '0']" :key="'item-' + item + '-' + index" @onClick="onKeyboardClick">{{ item }}</KeyboardItem>
          <KeyboardItem class="keyboard-hide" type="hide" @onClick="onKeyboardClick"><i class="sr-only">{{currentLocale.cancelKeyboardLabel}}</i></KeyboardItem>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import TransferDom from '../../directives/transfer-dom'
import KeyboardItem from './keyboard-item'
const prefixCls = 'um-number-keyboard'
const localeCode = 'zh_CN'
const defaultLocale = require(`./locale/${localeCode}.js`).default
export default {
  name: 'CustomKeyboard',
  directives: {
    TransferDom
  },
  components: {
    KeyboardItem
  },
  computed: {
    wrapperCls () {
      return {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-hide`]: this.isHide
      }
    },
    currentLocale () {
      if (this.locale) {
        return this.locale
      } else if (this.localeData && this.localeData.unmLocale !== undefined) {
        return this.localeData.unmLocale['InputItem']
      } else {
        return defaultLocale
      }
    }
  },
  inject: {
    localeData: {
      from: 'localeData',
      default: function () {
        return defaultLocale
      }
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      isHide: true
    }
  },
  methods: {
    onKeyboardClick (v) {
      this.$emit('onClick', v)
    }
  },
  props: {
    locale: {
      type: Object
    }
  }
}
</script>
<style lang="less">
@import 'style/custom-keyboard';
</style>


