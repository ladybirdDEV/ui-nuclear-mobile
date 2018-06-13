# LocaleProvider 国际化

为组件内建文案提供统一的国际化支持。

## 使用

LocaleProvider 使用 Vue 的 [provider/inject](https://cn.vuejs.org/v2/api/#provide-inject) 选项， 只需要在应用外围包裹一次即可全局生效

当有多个组件时，需要保证最外层有一个根节点

```html
<LocaleProvider :locale="enUS"><component></component></LocaleProvider>
<script>
import enUS from '@/components/LocaleProvider/en_US'
export default {
  data () {
    return {
      enUS: enUS
    }
  }
}
</script>
```

## 其他国际化需求

本模块仅用于组件的内建文案，若有业务文案的国际化需求，建议使用[vue-i18n](https://github.com/kazupon/vue-i18n)

### props

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| locale | 语言包配置，可到 `@/components/LocaleProvider/` 目录下找 | Obejct | - |
