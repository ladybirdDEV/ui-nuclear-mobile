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


#### Code Example
```vue
<template>
  <div>
    <WhiteSpace size="lg"></WhiteSpace>
    <WingBlank>
      <WhiteSpace />
      <List>
      <Picker :data="languages" :cascade="false" :onOk="changeLanguage" :value="[...locale]">
        <template slot-scope="props" slot="list-item">
          <ListItem arrow="horizontal" :onClick="props.onClick" :extra="props.extra">Choose language</ListItem>
        </template>
      </Picker>
      </List>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <LocaleProvider :locale="currentLocale">
        <div>
          <Pagination :total="5"></Pagination>
          <WhiteSpace />
          <InputItem type="money" placeholder="money input" />
        </div>
      </LocaleProvider>
    </WingBlank>
  </div>
</template>
<script>
import enUS from '@/components/LocaleProvider/en_US'
import ruRU from '@/components/LocaleProvider/ru_RU'
import Picker from '@/components/Picker'
import Button from '@/components/Button'
import { List, ListItem } from '@/components/List'
import LocaleProvider from '@/components/LocaleProvider'
import WingBlank from '@/components/WingBlank'
import WhiteSpace from '@/components/WhiteSpace'
import Pagination from '@/components/Pagination'
import InputItem from '@/components/InputItem'
export default {
  components: {
    WingBlank,
    WhiteSpace,
    Pagination,
    LocaleProvider,
    Button,
    Picker,
    List,
    ListItem,
    InputItem
  },
  data () {
    return {
      showPicker: false,
      locale: 'English',
      languages: [
        {
          value: '中国',
          label: '中国',
          language: undefined
        },
        {
          value: 'English',
          label: 'English',
          language: enUS
        },
        {
          value: 'Русский',
          label: 'Русский',
          language: ruRU
        }
      ]
    }
  },
  computed: {
    currentLocale () {
      return this.languages.find(item => item.value === this.locale).language
    }
  },
  methods: {
    changeLanguage (value) {
      this.locale = value[0]
    }
  }
}
</script>

```
### props

| 参数 | 说明 | 类型 | 默认值 |
| -- | -- | -- | -- |
| locale | 语言包配置，可到 `@/components/LocaleProvider/` 目录下找 | Obejct | - |

<Demo url="https://ladybirddev.github.io/ui-nuclear-mobile-demo/#/locale-provider" />