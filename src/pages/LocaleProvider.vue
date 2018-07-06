<template>
  <div>
    <WhiteSpace size="lg"></WhiteSpace>
    <WingBlank>
      <!-- <WhiteSpace /> -->
      <LocaleProvider :locale="currentLocale">
        <div>
          <List>
            <Picker :data="languages" :cascade="false" :onOk="changeLanguage" :value="[...locale]">
              <template slot-scope="props" slot="list-item">
                <ListItem arrow="horizontal" :onClick="props.onClick" :extra="props.extra">Choose language</ListItem>
              </template>
            </Picker>
          </List>
          <WhiteSpace size="xl" />
          <WhiteSpace size="xl" />
          <Pagination :total="5"></Pagination>
          <WhiteSpace />
          <List>
            <DatePicker mode="date">
              <template slot-scope="props" slot="list-item">
                <ListItem arrow="horizontal" :extra="props.extra">datePicker</ListItem>
              </template>
            </DatePicker>
            <Picker :data="seasons" :cascade="false">
              <template slot-scope="props" slot="list-item">
                <ListItem arrow="horizontal" :onClick="props.onClick" :extra="props.extra">picker</ListItem>
              </template>
            </Picker>
          </List>
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
import DatePicker from '@/components/DatePicker'
import Picker from '@/components/Picker'
import Button from '@/components/Button'
import { List, ListItem } from '@/components/List'
import LocaleProvider from '@/components/LocaleProvider'
import WingBlank from '@/components/wing-blank'
import WhiteSpace from '@/components/white-space'
import Pagination from '@/components/Pagination'
import InputItem from '@/components/InputItem'
export default {
  components: {
    WingBlank,
    WhiteSpace,
    Pagination,
    LocaleProvider,
    Button,
    DatePicker,
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
      ],
      seasons: [
        [
          {
            label: '2013',
            value: '2013'
          },
          {
            label: '2014',
            value: '2014'
          }
        ],
        [
          {
            label: '春',
            value: '春'
          },
          {
            label: '夏',
            value: '夏'
          }
        ]
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
