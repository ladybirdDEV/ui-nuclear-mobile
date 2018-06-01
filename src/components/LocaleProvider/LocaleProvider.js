export default {
  name: 'LocaleProvider',
  props: {
    locale: Object
  },
  data () {
    if (this.locale) {
      return {
        unmLocale: {
          ...this.locale,
          exist: true
        }
      }
    } else {
      return {
        unmLocale: undefined
      }
    }
  },
  provide () {
    return {
      localeData: this.$data
    }
  },
  watch: {
    locale () {
      if (this.locale) {
        this.unmLocale = {
          ...this.locale
        }
      } else {
        this.unmLocale = undefined
      }
    }
  },
  render () {
    return this.$slots.default[0]
  }
}
