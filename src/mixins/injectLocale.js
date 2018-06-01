const mixin = {
  inject: {
    localeData: {
      from: 'localeData',
      default: function () {
        const localeCode = 'zh_CN'
        const name = this.$options.name
        const defaultLocale = require(`../components/${name}/locale/${localeCode}.js`).default
        console.log(`../components/${ name }/locale/${ localeCode }.js`)
        return defaultLocale
      }
    }
  },
  props: {
    locale: {
      type: Object,
      default() {
        return this.localeData[this.$options.name] ? this.localeData[this.$options.name] : this.localeData
      }
    }
  }
}
export default mixin
