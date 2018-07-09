<template>
  <div :class="`${prefixCls}`">
    <Flex v-if="mode !== 'pointer'">
      <FlexItem :class="[`${prefixCls}-wrap-btn`, `${prefixCls}-wrap-btn-prev`]" v-if="mode !== 'number'">
        <Button inline :disabled="currentPage === 1" :onClick="() =>{click($refs.prev)}" ref="prev">
          <slot name="prevText">{{ currentLocale.prevText }}</slot>
        </Button>
      </FlexItem>
      <FlexItem :class="`${prefixCls}-wrap`" aria-live="assertive" v-if="!simple">
        <span class="active">{{ currentPage }}</span>/<span>{{ total }}</span>
      </FlexItem>
      <FlexItem :class="[`${prefixCls}-wrap-btn`, `${prefixCls}-wrap-btn-next`]" v-if="mode !== 'number'">
        <Button inline :disabled="currentPage >= total" :onClick="() =>{click($refs.next)}" ref="next">
          <slot name="nextText">{{ currentLocale.nextText }}</slot>
        </Button>
      </FlexItem>
    </Flex>
    <div :class="`${prefixCls}-wrap`" v-else>
      <div :class="[`${prefixCls}-wrap-dot`, currentPage === (index + 1) ? `${prefixCls}-wrap-dot-active` : '' ]" v-for="(page, index) in total" :key="index">
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
import { oneOf } from '../../utils'
import { Flex, FlexItem } from '../flex'
import Button from '../button'
const prefixCls = 'um-pagination'
const localeCode = 'zh_CN'
const defaultLocale = require(`./locale/${localeCode}.js`).default
export default {
  name: 'Pagination',
  components: {
    Flex,
    FlexItem,
    Button
  },
  model: {
    prop: 'current',
    event: 'onChange'
  },
  computed: {
    currentLocale () {
      if (this.locale) {
        return this.locale
      } else if (this.localeData && this.localeData.unmLocale !== undefined) {
        return this.localeData.unmLocale[this.$options.name]
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
      currentPage: this.current,
      prefixCls: prefixCls
    }
  },
  watch: {
    currentPage () {
      this.$emit('onChange', this.currentPage)
    },
    current () {
      this.currentPage = this.current
    }
  },
  methods: {
    click (obj) {
      if (obj === this.$refs.next) {
        if (this.currentPage < this.total) {
          this.currentPage = this.currentPage + 1
        }
      } else if (obj === this.$refs.prev) {
        if (this.currentPage > 1) {
          this.currentPage = this.currentPage - 1
        }
      } else {
      }
    }
  },
  props: {
    mode: {
      validator (value) {
        return oneOf(value, ['button', 'number', 'pointer'])
      },
      default: 'button'
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    simple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    locale: {
      type: Object
    }
  }
}
</script>
<style lang="less">
@import './style/index';
</style>
